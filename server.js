const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const Transaction = require('./models/Transaction');
const payment = require('./payment');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Koneksi dibuat saat endpoint database dipanggil agar deployment Vercel
// tetap bisa menyajikan halaman meskipun konfigurasi database belum tersedia.
const MONGODB_URI = process.env.MONGODB_URI;
let databaseConnection = null;

async function connectDatabase() {
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is not configured');
    }
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }
    if (!databaseConnection) {
        databaseConnection = mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 })
            .catch((error) => {
                databaseConnection = null;
                throw error;
            });
    }
    return databaseConnection;
}

const PORT = process.env.PORT || 3000;

// Server key WAJIB dari environment (.env / Vercel Environment Variables), tidak boleh ditulis di kode.
const PAYMENT_SERVER_KEY = process.env.PAYMENT_SERVER_KEY;
const SNAP_ENDPOINT = process.env.MIDTRANS_SNAP_URL || 'https://app.midtrans.com/snap/v1/transactions';

// Pemeriksaan aman: tidak pernah mengirim URI database atau nilai key ke browser.
app.get('/api/health', async (req, res) => {
    try {
        await connectDatabase();
        return res.json({
            status: 'ok',
            database: 'connected',
            paymentConfigured: Boolean(PAYMENT_SERVER_KEY)
        });
    } catch (error) {
        console.error('Database health check failed:', error?.name || 'Error', error?.code || '');
        return res.status(503).json({
            status: 'degraded',
            database: MONGODB_URI ? 'unavailable' : 'not_configured',
            paymentConfigured: Boolean(PAYMENT_SERVER_KEY)
        });
    }
});

// Endpoint 1: Buat Transaksi. Harga & fee dihitung di server, bukan dari browser.
app.post('/api/create-transaction', async (req, res) => {
    let transaction = null;
    try {
        const body = req.body || {};
        const gameId = String(body.gameId || '').trim();
        const userId = String(body.userId || '').trim();
        const zoneId = String(body.zoneId || '').trim();
        const denomId = String(body.denomId || '').trim();
        const paymentMethod = String(body.paymentMethod || '').trim();

        if (!gameId || !userId || !denomId || !paymentMethod) {
            return res.status(400).json({ success: false, message: 'Data pesanan tidak lengkap!' });
        }

        const accountError = payment.validateAccount(gameId, userId, zoneId);
        if (accountError) {
            return res.status(400).json({ success: false, message: accountError });
        }

        const order = payment.calcOrder({ gameId, denomId, paymentMethod, vipLevel: body.vipLevel });
        if (order.error) {
            return res.status(400).json({ success: false, message: order.error });
        }

        if (!PAYMENT_SERVER_KEY) {
            return res.status(503).json({ success: false, message: 'Layanan pembayaran belum dikonfigurasi.' });
        }
        await connectDatabase();

        // Suffix acak mencegah orderId kembar bila dua pesanan masuk di milidetik yang sama.
        const orderId = 'REX-' + Date.now() + Math.random().toString(36).slice(2, 6).toUpperCase();

        // 1. Simpan transaksi (status: pending)
        transaction = await Transaction.create({
            orderId,
            userId,
            zoneId,
            gameId,
            denomId,
            paymentMethod,
            amount: order.total,
            status: 'pending'
        });

        // 2. Minta token Snap ke Midtrans. Jumlah item_details harus sama dengan gross_amount.
        const payload = {
            transaction_details: { order_id: orderId, gross_amount: order.total },
            customer_details: {
                first_name: `User-${userId}`.slice(0, 50),
                email: 'customer@rexstore.id'
            },
            item_details: [
                {
                    id: denomId,
                    price: order.unitPrice,
                    quantity: 1,
                    name: order.product.name.slice(0, 50) // batas Midtrans: 50 karakter
                },
                ...(order.fee > 0 ? [{ id: 'admin-fee', price: order.fee, quantity: 1, name: 'Biaya Admin' }] : [])
            ],
            custom_field1: `${gameId}:${userId}${zoneId ? '-' + zoneId : ''}`
        };

        const base64Auth = Buffer.from(PAYMENT_SERVER_KEY + ':').toString('base64');
        const apiResponse = await fetch(SNAP_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${base64Auth}`
            },
            body: JSON.stringify(payload)
        });

        const result = await apiResponse.json();

        if (apiResponse.ok && result.token) {
            return res.json({
                success: true,
                orderId,
                token: result.token,
                redirectUrl: result.redirect_url,
                totalAmount: order.total
            });
        }

        // Midtrans menolak: jangan biarkan pesanan "pending" menggantung di database.
        console.error('❌ Midtrans API Error:', result);
        await Transaction.updateOne({ _id: transaction._id }, { status: 'failed' });
        return res.status(400).json({
            success: false,
            message: result.error_messages ? result.error_messages.join(', ') : 'Gagal terhubung ke Midtrans.'
        });

    } catch (error) {
        console.error('❌ Error Create Transaction:', error?.name || 'Error', error?.code || '');
        if (transaction) {
            await Transaction.updateOne({ _id: transaction._id }, { status: 'failed' }).catch(() => {});
        }
        res.status(500).json({ success: false, message: 'Terjadi kesalahan server internal.' });
    }
});

// Endpoint 2: Webhook Notification Midtrans (wajib lolos verifikasi signature)
app.post('/api/payment-notification', async (req, res) => {
    try {
        if (!PAYMENT_SERVER_KEY) {
            return res.status(503).json({ status: 'SERVICE_UNAVAILABLE' });
        }
        await connectDatabase();
        const notification = req.body || {};

        if (!payment.verifySignature(notification, PAYMENT_SERVER_KEY)) {
            console.warn('[WEBHOOK] Signature tidak valid, ditolak:', notification.order_id);
            return res.status(403).json({ status: 'INVALID_SIGNATURE' });
        }

        const orderId = notification.order_id;
        console.log(`[WEBHOOK] Order ID: ${orderId} | Status: ${notification.transaction_status}`);

        const transaction = await Transaction.findOne({ orderId });
        if (!transaction) {
            return res.status(404).json({ status: 'ORDER_NOT_FOUND' });
        }

        // Nominal dari Midtrans harus sama dengan yang kita simpan saat membuat pesanan.
        if (Number(notification.gross_amount) !== transaction.amount) {
            console.error(`[WEBHOOK] Nominal tidak cocok untuk ${orderId}: ${notification.gross_amount} != ${transaction.amount}`);
            return res.status(400).json({ status: 'AMOUNT_MISMATCH' });
        }

        transaction.status = payment.nextStatus(transaction.status, payment.mapStatus(notification));
        transaction.rawNotification = notification;
        await transaction.save();

        res.status(200).json({ status: 'OK' });
    } catch (error) {
        console.error('Error Webhook Notification:', error?.name || 'Error', error?.code || '');
        res.status(500).json({ status: 'ERROR' });
    }
});

// Endpoint 3: Riwayat transaksi per ID akun game (tanpa data mentah Midtrans)
app.get('/api/user-transactions/:userId', async (req, res) => {
    try {
        await connectDatabase();
        const userId = String(req.params.userId);
        const history = await Transaction.find({ userId })
            .select('-rawNotification')
            .sort({ createdAt: -1 })
            .limit(50);
        res.json({ success: true, data: history });
    } catch (error) {
        console.error('Error reading transaction history:', error?.name || 'Error', error?.code || '');
        res.status(503).json({ success: false, message: 'Database belum tersedia.' });
    }
});

app.use('/api', (req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint API tidak ditemukan.' });
});

// Sajikan frontend & aset statis (sesuai README: buka http://localhost:3000)
// Sajikan frontend & aset statis dari folder public dan frontend
const publicDir = path.join(__dirname, 'public');
const frontendDir = path.join(__dirname, 'frontend');

if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
    app.use('/public', express.static(publicDir));
}

if (fs.existsSync(frontendDir)) {
    app.use(express.static(frontendDir));
}

app.get('*', (req, res, next) => {
    // Jangan mengembalikan index.html untuk file gambar/CSS/JS yang tidak ada.
    // Itu membuat browser menerima HTML berstatus 200 seolah-olah asetnya berhasil.
    if (path.extname(req.path)) {
        return res.status(404).type('text/plain').send('Not Found');
    }
    res.sendFile(path.join(frontendDir, 'index.html'), (error) => {
        if (error) next(error);
    });
});

// Lokal: jalankan server. Vercel: cukup export app (tidak boleh app.listen).
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server RexStore aktif di http://localhost:${PORT}`);
    });
}

module.exports = app;

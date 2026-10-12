const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

// Model Transaction
const Transaction = require('./models/Transaction');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Koneksi ke Database MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rexstore';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Berhasil terhubung ke Database MongoDB!'))
    .catch((err) => console.error('❌ Gagal koneksi MongoDB:', err));

// Menyajikan aset statis
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/public', express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
const PAYMENT_SERVER_KEY = process.env.PAYMENT_SERVER_KEY || '';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Endpoint 1: Buat Transaksi & Simpan ke DB (Status Pending)
app.post('/api/create-transaction', async (req, res) => {
    try {
        const { gameId, userId, zoneId, denomId, paymentMethod, amount } = req.body;

        if (!userId || !amount || !paymentMethod || !gameId) {
            return res.status(400).json({ 
                success: false, 
                message: 'Data pesanan tidak lengkap!' 
            });
        }
        const orderId = 'REX-' + Date.now();

        // 1. Simpan Transaksi Baru ke Database (Status: pending)
        const newTransaction = new Transaction({
            orderId,
            userId,
            zoneId,
            gameId,
            denomId,
            paymentMethod,
            amount: Number(amount),
            status: 'pending'
        });
        await newTransaction.save();

        // 2. Kirim Request ke Midtrans Snap API
        const payload = {
            transaction_details: {
                order_id: orderId,
                gross_amount: Number(amount)
            },
            customer_details: {
                first_name: `User-${userId}`,
                email: 'customer@rexstore.id'
            },
            item_details: [{
                id: denomId,
                price: Number(amount),
                quantity: 1,
                name: `Top Up ${gameId.toUpperCase()} (${userId}${zoneId ? '-' + zoneId : ''})`
            }]
        };

        const base64Auth = Buffer.from(PAYMENT_SERVER_KEY + ':').toString('base64');
        const snapEndpoint = IS_PRODUCTION 
            ? 'https://app.midtrans.com/snap/v1/transactions' 
            : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

        const apiResponse = await fetch(snapEndpoint, {
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
                orderId: orderId,
                token: result.token,
                redirectUrl: result.redirect_url
            });
        } else {
            return res.json({
                success: true,
                orderId: orderId,
                simulated: true,
                message: "Transaksi disimpan ke DB (Mode Simulasi tanpa Snap Midtrans)."
            });
        }

    } catch (error) {
        console.error('Error Create Transaction:', error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
    }
});

// Endpoint 2: Webhook Notification Midtrans (Otomatis Mengubah Status Transaksi di DB)
app.post('/api/payment-notification', async (req, res) => {
    try {
        const notification = req.body;
        const orderId = notification.order_id;
        const transactionStatus = notification.transaction_status;
        const fraudStatus = notification.fraud_status;

        console.log(`[WEBHOOK] Order ID: ${orderId} | Status: ${transactionStatus}`);

        let newStatus = 'pending';

        if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
            if (fraudStatus === 'accept' || !fraudStatus) {
                newStatus = 'success';
            }
        } else if (['cancel', 'deny', 'expire'].includes(transactionStatus)) {
            newStatus = 'failed';
        } else if (transactionStatus === 'pending') {
            newStatus = 'pending';
        }

        // Update status transaksi di Database secara permanen
        await Transaction.findOneAndUpdate(
            { orderId: orderId },
            { 
                status: newStatus,
                rawNotification: notification 
            }
        );

        res.status(200).json({ status: 'OK' });
    } catch (error) {
        console.error('Error Webhook Notification:', error);
        res.status(500).json({ status: 'ERROR' });
    }
});

// Endpoint 3: Cek Riwayat Transaksi Pengguna dari DB
app.get('/api/user-transactions/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const history = await Transaction.find({ userId }).sort({ createdAt: -1 });
        res.json({ success: true, data: history });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil riwayat.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server RexStore aktif di http://localhost:${PORT}`);
});

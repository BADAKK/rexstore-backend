const crypto = require('crypto');
const catalog = require('./catalog.json');

const TERMINAL_STATUSES = ['success', 'failed', 'expired', 'cancelled'];

// Diskon VIP dibaca dari tabel yang sama dengan frontend (maks. VIP 9).
function getVipDiscount(level) {
    const lvl = Math.min(Math.max(parseInt(level, 10) || 0, 0), 9);
    return catalog.vipDiscounts[lvl] || 0;
}

// Validasi format ID akun game (aturan sama dengan validateGameAccount di frontend).
function validateAccount(gameId, userId, zoneId) {
    if (gameId === 'mlbb') {
        if (!/^\d{8,10}$/.test(userId)) return 'User ID Mobile Legends tidak valid (harus 8-10 angka).';
        if (!/^\d{4,5}$/.test(zoneId)) return 'Zone ID tidak valid (harus 4-5 angka).';
    } else if (gameId === 'ff') {
        if (!/^\d{8,11}$/.test(userId)) return 'Player ID Free Fire tidak valid (harus 8-11 angka).';
    } else if (gameId === 'pubgm') {
        if (!/^\d{8,12}$/.test(userId)) return 'Player ID PUBG Mobile tidak valid (harus 8-12 angka).';
    } else if (!userId || userId.length > 100) {
        return 'ID / Email akun tidak valid.';
    }
    return '';
}

// Harga SELALU dihitung server dari catalog.json. Nominal dari browser tidak dipercaya.
function calcOrder({ gameId, denomId, paymentMethod, vipLevel }) {
    const product = catalog.products[denomId];
    if (!product || product.gameId !== gameId) return { error: 'Produk tidak ditemukan.' };
    if (!Object.prototype.hasOwnProperty.call(catalog.fees, paymentMethod)) {
        return { error: 'Metode pembayaran tidak valid.' };
    }
    const discountPct = getVipDiscount(vipLevel);
    const unitPrice = Math.round(product.price * (1 - discountPct / 100));
    const fee = catalog.fees[paymentMethod];
    return { product, discountPct, unitPrice, fee, total: unitPrice + fee };
}

// Midtrans: SHA512(order_id + status_code + gross_amount + ServerKey) harus sama dengan signature_key.
function verifySignature(notification, serverKey) {
    const n = notification || {};
    const raw = `${n.order_id}${n.status_code}${n.gross_amount}${serverKey}`;
    const expected = Buffer.from(crypto.createHash('sha512').update(raw).digest('hex'));
    const given = Buffer.from(String(n.signature_key || ''));
    return given.length === expected.length && crypto.timingSafeEqual(given, expected);
}

// Status Midtrans -> status di database. null = jangan ubah status (mis. refund).
function mapStatus(notification) {
    const s = notification.transaction_status;
    const f = notification.fraud_status;
    if (s === 'capture') {
        if (!f || f === 'accept') return 'success';
        return f === 'deny' ? 'failed' : 'pending';
    }
    if (s === 'settlement') return 'success';
    if (s === 'cancel') return 'cancelled';
    if (s === 'expire') return 'expired';
    if (s === 'deny' || s === 'failure') return 'failed';
    if (s === 'pending' || s === 'authorize') return 'pending';
    return null;
}

// Notifikasi Midtrans bisa datang tidak berurutan: status akhir tidak boleh mundur.
function nextStatus(current, incoming) {
    if (!incoming || incoming === current) return current;
    if (current === 'success') return current;
    if (TERMINAL_STATUSES.includes(current) && incoming === 'pending') return current;
    return incoming;
}

module.exports = { getVipDiscount, validateAccount, calcOrder, verifySignature, mapStatus, nextStatus };

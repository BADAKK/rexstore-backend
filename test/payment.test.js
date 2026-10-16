const assert = require('assert');
const crypto = require('crypto');
const p = require('../payment');

const KEY = 'test-server-key';
const sign = (n) => crypto.createHash('sha512')
    .update(`${n.order_id}${n.status_code}${n.gross_amount}${KEY}`).digest('hex');

let passed = 0;
function t(name, fn) { fn(); passed++; console.log('  ok  -', name); }

// --- harga dihitung server ---
t('harga & fee dari katalog (QRIS: fee 0)', () => {
    const o = p.calcOrder({ gameId: 'ff', denomId: 'ff_1', paymentMethod: 'qris', vipLevel: 0 });
    assert.strictEqual(o.total, 10000);
});
t('fee tidak dihitung dobel (BCA VA = harga + 1000)', () => {
    const o = p.calcOrder({ gameId: 'ff', denomId: 'ff_1', paymentMethod: 'bca', vipLevel: 0 });
    assert.strictEqual(o.fee, 1000);
    assert.strictEqual(o.total, 11000);
});
t('Indomaret fee 2500 (dulu server menagih 1000 + 2500 dari klien)', () => {
    const o = p.calcOrder({ gameId: 'ff', denomId: 'ff_1', paymentMethod: 'indomaret', vipLevel: 0 });
    assert.strictEqual(o.total, 12500);
});
t('VIP 9 dapat diskon 9% (dulu terpotong di 8%)', () => {
    const o = p.calcOrder({ gameId: 'ff', denomId: 'ff_4', paymentMethod: 'qris', vipLevel: 9 });
    assert.strictEqual(o.discountPct, 9);
    assert.strictEqual(o.unitPrice, 91000);
});
t('vipLevel ngawur dibatasi 0-9', () => {
    assert.strictEqual(p.getVipDiscount(99), 9);
    assert.strictEqual(p.getVipDiscount(-5), 0);
    assert.strictEqual(p.getVipDiscount('abc'), 0);
    assert.strictEqual(p.getVipDiscount({ $gt: 1 }), 0);
});
t('produk tidak ada / game tidak cocok ditolak', () => {
    assert.ok(p.calcOrder({ gameId: 'ff', denomId: 'nope', paymentMethod: 'qris' }).error);
    assert.ok(p.calcOrder({ gameId: 'mlbb', denomId: 'ff_1', paymentMethod: 'qris' }).error);
});
t('metode bayar tidak dikenal ditolak (termasuk "constructor")', () => {
    assert.ok(p.calcOrder({ gameId: 'ff', denomId: 'ff_1', paymentMethod: 'bitcoin' }).error);
    assert.ok(p.calcOrder({ gameId: 'ff', denomId: 'ff_1', paymentMethod: 'constructor' }).error);
});

// --- validasi akun ---
t('validasi akun MLBB / FF / PUBG / voucher', () => {
    assert.strictEqual(p.validateAccount('mlbb', '12345678', '1234'), '');
    assert.ok(p.validateAccount('mlbb', '12345678', ''));
    assert.ok(p.validateAccount('mlbb', 'abc', '1234'));
    assert.strictEqual(p.validateAccount('ff', '123456789', ''), '');
    assert.ok(p.validateAccount('ff', '123', ''));
    assert.strictEqual(p.validateAccount('pubgm', '123456789012', ''), '');
    assert.strictEqual(p.validateAccount('steam', 'a@b.com', ''), '');
    assert.ok(p.validateAccount('steam', '', ''));
});

// --- webhook ---
t('signature benar diterima, salah/kosong ditolak', () => {
    const n = { order_id: 'REX-1', status_code: '200', gross_amount: '11000.00' };
    n.signature_key = sign(n);
    assert.strictEqual(p.verifySignature(n, KEY), true);
    assert.strictEqual(p.verifySignature({ ...n, gross_amount: '1.00' }, KEY), false);
    assert.strictEqual(p.verifySignature({ ...n, signature_key: 'x' }, KEY), false);
    assert.strictEqual(p.verifySignature({ ...n, signature_key: undefined }, KEY), false);
    assert.strictEqual(p.verifySignature(null, KEY), false);
});
t('mapping status Midtrans', () => {
    assert.strictEqual(p.mapStatus({ transaction_status: 'settlement' }), 'success');
    assert.strictEqual(p.mapStatus({ transaction_status: 'capture', fraud_status: 'accept' }), 'success');
    assert.strictEqual(p.mapStatus({ transaction_status: 'capture', fraud_status: 'challenge' }), 'pending');
    assert.strictEqual(p.mapStatus({ transaction_status: 'capture', fraud_status: 'deny' }), 'failed');
    assert.strictEqual(p.mapStatus({ transaction_status: 'expire' }), 'expired');
    assert.strictEqual(p.mapStatus({ transaction_status: 'cancel' }), 'cancelled');
    assert.strictEqual(p.mapStatus({ transaction_status: 'deny' }), 'failed');
    assert.strictEqual(p.mapStatus({ transaction_status: 'pending' }), 'pending');
    assert.strictEqual(p.mapStatus({ transaction_status: 'refund' }), null);
});
t('status akhir tidak mundur karena notifikasi telat', () => {
    assert.strictEqual(p.nextStatus('success', 'pending'), 'success');
    assert.strictEqual(p.nextStatus('success', 'expired'), 'success');
    assert.strictEqual(p.nextStatus('expired', 'pending'), 'expired');
    assert.strictEqual(p.nextStatus('pending', 'success'), 'success');
    assert.strictEqual(p.nextStatus('pending', 'expired'), 'expired');
    assert.strictEqual(p.nextStatus('pending', null), 'pending');
});

console.log(`\n${passed} tes lulus`);

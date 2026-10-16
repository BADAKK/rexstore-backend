// Membuat catalog.json dari frontend/script.js
// supaya harga, fee, dan diskon VIP di server SELALU sama dengan yang tampil di website.
//
// Pakai:  npm run catalog
// Wajib dijalankan ulang setiap kali kamu mengubah harga / fee / diskon VIP di script.js.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const srcPath = process.argv[2] || path.join(__dirname, '..', 'frontend', 'script.js');
const outPath = path.join(__dirname, '..', 'catalog.json');

const noop = () => {};
const sandbox = {
    document: { addEventListener: noop, getElementById: () => null, querySelectorAll: () => [] },
    window: {},
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
    location: { hostname: 'localhost' },
    console
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(srcPath, 'utf8'), sandbox, { filename: srcPath });

const { games, paymentMethods, vipTiers } = vm.runInContext('({ games, paymentMethods, vipTiers })', sandbox);

const products = {};
for (const g of games) {
    for (const d of g.denominations) {
        if (products[d.id]) throw new Error(`ID denominasi ganda: ${d.id}`);
        if (!Number.isInteger(d.price) || d.price <= 0) throw new Error(`Harga tidak valid untuk ${d.id}: ${d.price}`);
        products[d.id] = { gameId: g.id, name: d.name, price: d.price };
    }
}

const fees = {};
for (const group of Object.values(paymentMethods)) {
    for (const pm of group) fees[pm.id] = pm.fee;
}

const vipDiscounts = {};
for (const t of vipTiers) vipDiscounts[t.level] = t.discount;

fs.writeFileSync(outPath, JSON.stringify({ products, fees, vipDiscounts }, null, 2) + '\n');
console.log(`catalog.json dibuat: ${Object.keys(products).length} produk, ${Object.keys(fees).length} metode bayar.`);

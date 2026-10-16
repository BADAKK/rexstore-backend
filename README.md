# RexStore.gg

Frontend top-up game dan API Express dalam satu proyek.

## Jalankan lokal

1. Jalankan `npm install`.
2. Atur `MONGODB_URI` dan `PAYMENT_SERVER_KEY` di `.env` lokal.
3. Jalankan `npm start`, lalu buka `http://localhost:3000`.

Jangan unggah `.env` ke GitHub atau Vercel. Atur nilainya sebagai Environment Variables sensitif di Vercel.

## Vercel

Root `/` menyajikan frontend, sedangkan `/api/*` dilayani Express. `vercel.json` memasukkan folder frontend dan aset ke Node Function. Endpoint `/api/health` memeriksa ketersediaan database tanpa mengungkap nilai konfigurasi.
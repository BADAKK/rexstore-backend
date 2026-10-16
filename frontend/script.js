const games = [
{
    id: 'mlbb',
    name: 'Mobile Legends',
    publisher: 'Moonton',
    category: ['populer'],
    image: '../public/images/logo-game/ml.png',
    inputs: [
        { id: 'userId', label: 'User ID', placeholder: 'Cth: 12345678', type: 'text' },
        { id: 'zoneId', label: 'Zone ID', placeholder: 'Cth: 12434', type: 'text' }
    ],
    categories: [
        { id: 'recharge', name: '2x Recharge Bonus' },
        { id: 'diamonds', name: 'Diamonds' },
        { id: 'bonus', name: 'Weekly Diamonds Pass' },
        { id: 'starlight', name: 'Starlight Pass' },
        { id: 'twilight', name: 'Twilight Pass' }
    ],
    denominations: [
        // --- 2X RECHARGE BONUS ---
        { id: 'ml_recharge1', name: '100 Diamonds (50 + 50 Recharge Bonus)', price: 17806, cat: 'recharge', icon: 'fa-gem' },
        { id: 'ml_recharge2', name: '300 Diamonds (150 + 150 Recharge Bonus)', price: 53778, cat: 'recharge', icon: 'fa-gem' },
        { id: 'ml_recharge3', name: '500 Diamonds (250 + 250 Recharge Bonus)', price: 89750, cat: 'recharge', icon: 'fa-gem' },
        { id: 'ml_recharge4', name: '1000 Diamonds (500 + 500 Recharge Bonus)', price: 179679, cat: 'recharge', icon: 'fa-gem' },
        
        // --- DIAMONDS ---
        { id: 'ml_1', name: '5 Diamonds', price: 1800, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_2', name: '10 Diamonds (9 + 1 Bonus)', price: 3595, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_3', name: '12 Diamonds (11 + 1 Bonus)', price: 3961, cat: 'diamonds', badge: 'hemat', icon: 'fa-gem' },
        { id: 'ml_5', name: '28 Diamonds (25 + 3 Bonus)', price: 9000, cat: 'diamonds', badge: 'hemat', icon: 'fa-gem' },
        { id: 'ml_6', name: '44 Diamonds (40 + 4 Bonus)', price: 14389, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_7', name: '54 Diamonds (50 + 4 Bonus)', price: 17983, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_8', name: '59 Diamonds (53 + 6 Bonus)', price: 19065, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_9', name: '71 Diamonds (64 + 7 Bonus)', price: 23026, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_10', name: '74 Diamonds (67 + 7 Bonus)', price: 24456, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_11', name: '85 Diamonds (77 + 8 Bonus)', price: 27698, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_12', name: '88 Diamonds (80 + 8 Bonus)', price: 28778, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_13', name: '110 Diamonds (100 + 10 Bonus)', price: 36333, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_14', name: '113 Diamonds (102 + 11 Bonus)', price: 36700, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_15', name: '128 Diamonds (117 + 11 Bonus)', price: 42091, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_16', name: '148 Diamonds (134 + 14 Bonus)', price: 48208, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_17', name: '170 Diamonds (154 + 16 Bonus)', price: 55397, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_18', name: '176 Diamonds (160 + 16 Bonus)', price: 57556, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_19', name: '184 Diamonds (167 + 17 Bonus)', price: 61139, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_20', name: '222 Diamonds (200 + 22 Bonus)', price: 72662, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_21', name: '240 Diamonds (217 + 23 Bonus)', price: 78059, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_22', name: '258 Diamonds (233 + 25 Bonus)', price: 85613, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_23', name: '277 Diamonds (250 + 27 Bonus)', price: 91000, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_24', name: '284 Diamonds (257 + 27 Bonus)', price: 92200, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_25', name: '296 Diamonds (256 + 40 Bonus)', price: 92380, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_26', name: '301 Diamonds (261 + 40 Bonus)', price: 93977, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_27', name: '305 Diamonds (276 + 29 Bonus)', price: 100007, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_28', name: '333 Diamonds (302 + 31 Bonus)', price: 109000, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_29', name: '346 Diamonds (314 + 32 Bonus)', price: 113683, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_30', name: '356 Diamonds (322 + 34 Bonus)', price: 116636, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_31', name: '370 Diamomds (333 + 37 Bonus)', price: 117277, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_32', name: '384 Diamonds (346 + 38 Bonus)', price: 120958, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_33', name: '408 Diamonds (367 + 41 Bonus)', price: 132017, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_34', name: '424 Diamonds (383 + 41 Bonus)', price: 134271, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_35', name: '452 Diamonds (407 + 45 Bonus)', price: 146406, cat: 'diamonds', icon: 'fa-gem' },
        { id: 'ml_36', name: '518 Diamonds (467 + 51 Bonus)', price: 168700, cat: 'diamonds', icon: 'fa-gem' },
        
        
        // --- SPECIAL PASS ---
        { id: 'ml_elite1', name: 'Starlight Pass Member', price: 149000, cat: 'starlight', badge: 'Populer', icon: 'fa-crown' },
        { id: 'ml_elite2', name: 'Twilight Pass', price: 135000, cat: 'twilight', icon: 'fa-ticket' },
        { id: 'ml_bonus1', name: 'Weekly Diamond Pass', price: 28000, cat: 'bonus', badge: 'Hemat', icon: 'fa-star' }
    ]
},
{
    id: 'ff',
    name: 'Free Fire',
    publisher: 'Garena',
    category: ['populer'],
    image: '../public/images/logo-game/ff.png',
    inputs: [
        { id: 'userId', label: 'Player ID', placeholder: 'Masukkan Player ID', type: 'text' }
    ],
    categories: [
        { id: 'diamonds', name: 'Diamonds' },
        { id: 'membership', name: 'Membership' }
    ],
    denominations: [
        { id: 'ff_1', name: '70 Diamonds', price: 10000, cat: 'diamonds', badge: 'Hemat', icon: 'fa-diamond' },
        { id: 'ff_2', name: '140 Diamonds', price: 20000, cat: 'diamonds', badge: 'Populer', icon: 'fa-diamond' },
        { id: 'ff_3', name: '355 Diamonds', price: 50000, cat: 'diamonds', icon: 'fa-diamond' },
        { id: 'ff_4', name: '720 Diamonds', price: 100000, cat: 'diamonds', badge: 'Best Seller', icon: 'fa-diamond' },
        { id: 'ff_m1', name: 'Membership Mingguan', price: 30000, cat: 'membership', badge: 'Populer', icon: 'fa-id-card' },
        { id: 'ff_m2', name: 'Membership Bulanan', price: 75000, cat: 'membership', icon: 'fa-id-card' }
    ]
},
{
    id: 'pubgm',
    name: 'PUBG Mobile',
    publisher: 'Tencent',
    category: ['populer'],
    image: '../public/images/logo-game/pubgm.png',
    inputs: [
        { id: 'userId', label: 'Player ID', placeholder: 'Masukan Player ID', type: 'text' }
    ],
    categories: [
        { id: 'uc', name: 'UC Package' },
        { id: 'season', name: 'Royale Pass' }
    ],
    denominations: [
        { id: 'pub_1', name: '60 UC', price: 14000, cat: 'uc', badge: 'Hemat', icon: 'fa-coins' },
        { id: 'pub_2', name: '325 UC + 25 Bonus', price: 75000, cat: 'uc', badge: 'Populer', icon: 'fa-coins' },
        { id: 'pub_3', name: '660 UC + 60 Bonus', price: 150000, cat: 'uc', badge: 'Best Seller', icon: 'fa-coins' },
        { id: 'pub_rp1', name: 'Royale Pass Month 1', price: 150000, cat: 'season', badge: 'Populer', icon: 'fa-shield' }
    ]
},
{
    id: 'steam',
    name: 'Steam Wallet IDR',
    publisher: 'Valve',
    category: ['voucher'],
    image: '../public/images/logo-voucher/steam.png',
    inputs: [
        { id: 'userId', label: 'Steam ID / Email', placeholder: 'Masukkan Email / ID Steam', type: 'text' }
    ],
    categories: [
        { id: 'wallet', name: 'Steam Wallet' }
    ],
    denominations: [
        { id: 'st_1', name: 'Steam Wallet Rp 45.000', price: 48000, cat: 'wallet', badge: 'Hemat', icon: 'fa-wallet' },
        { id: 'st_2', name: 'Steam Wallet Rp 90.000', price: 95000, cat: 'wallet', badge: 'Populer', icon: 'fa-wallet' },
        { id: 'st_3', name: 'Steam Wallet Rp 120.000', price: 125000, cat: 'wallet', badge: 'Best Seller', icon: 'fa-wallet' }
    ]
},
{
    id: 'google-play',
    name: 'Google Play Gift Card',
    publisher: 'Google',
    category: ['voucher'],
    image: '../public/images/logo-voucher/google-play.png',
    inputs: [
        { id: 'userId', label: 'Email Akun Google', placeholder: 'Masukkan Email Google Play', type: 'text' }
    ],
    categories: [
        { id: 'giftcard', name: 'Google Play' }
    ],
    denominations: [
        { id: 'gp_1', name: 'Google Play Rp 20.000', price: 22000, cat: 'giftcard', badge: 'Hemat', icon: 'fa-ticket' },
        { id: 'gp_2', name: 'Google Play Rp 50.000', price: 53000, cat: 'giftcard', badge: 'Populer', icon: 'fa-ticket' },
        { id: 'gp_3', name: 'Google Play Rp 100.000', price: 105000, cat: 'giftcard', badge: 'Best Seller', icon: 'fa-ticket' }
    ]
}, ];

const paymentMethods = {
    ewallet: [
        { id: 'qris', name: 'QRIS All Pay', fee: 0, icon: 'fa-qrcode' },
        { id: 'gopay', name: 'GoPay', fee: 1000, icon: 'fa-wallet' },
        { id: 'dana', name: 'DANA', fee: 0, icon: 'fa-shield-halved' },
        { id: 'shopeepay', name: 'ShopeePay', fee: 1000, icon: 'fa-bag-shopping' }
    ],
    va: [
        { id: 'bca', name: 'BCA Virtual Account', fee: 1000, icon: 'fa-building-columns' },
        { id: 'mandiri', name: 'Mandiri VA', fee: 1000, icon: 'fa-building-columns' },
        { id: 'bni', name: 'BNI VA', fee: 1000, icon: 'fa-building-columns' }
    ],
    retail: [
        { id: 'indomaret', name: 'Indomaret', fee: 2500, icon: 'fa-store' },
        { id: 'alfamart', name: 'Alfamart', fee: 2500, icon: 'fa-store' }
    ]
};

const staticPagesData = {
    'cara-pembelian': {
        title: 'Cara Pembelian',
        content: `<p>1. Pilih game favoritmu pada halaman beranda.<br>2. Masukkan data akun dengan benar (User ID & Server).<br>3. Pilih nominal diamond atau voucher yang diinginkan.<br>4. Pilih metode pembayaran.<br>5. Klik Beli Sekarang dan selesaikan pembayaran. Selesai!</p>`
    },
    'syarat-ketentuan': {
        title: 'Syarat & Ketentuan',
        content: `<p>Pengguna wajib memasukkan ID akun yang benar. RexStore tidak bertanggung jawab atas kesalahan pengiriman akibat kesalahan input data oleh pengguna. Transaksi diproses otomatis 24 jam.</p>`
    },
    'kebijakan-privasi': {
        title: 'Kebijakan Privasi',
        content: `<p>Kami menjaga kerahasiaan data pribadi Anda dan hanya menggunakannya untuk keperluan transaksi top up game. Data Anda aman bersama kami.</p>`
    },
    'hubungi-kami': {
        title: 'Hubungi Kami',
        content: `<p>Butuh bantuan? Hubungi Customer Service kami melalui WhatsApp di nomor <strong>+62 812-3456-7890</strong> atau email ke <strong>support@rexstore.com</strong> (Jam operasional 08:00 - 23:00 WIB).</p>`
    }
};

function validateGameAccount() {
    const inputUserId = document.getElementById('input-userId');
    const inputZoneId = document.getElementById('input-zoneId');
    
    let isValid = true;
    let errorMessage = '';
    
    if (selectedGame.id === 'mlbb') {
        const userId = inputUserId ? inputUserId.value.trim() : '';
        const zoneId = inputZoneId ? inputZoneId.value.trim() : '';
        if (!/^\d{8,10}$/.test(userId)) {
            isValid = false;
            errorMessage = 'User ID Mobile Legends tidak valid! (Harus 8-10 Angka)';
        } else if (!/^\d{4,5}$/.test(zoneId)) {
            isValid = false;
            errorMessage = 'Zone ID tidak valid! (Harus 4-5 Angka)';
        }
    } else if (selectedGame.id === 'ff') {
        const userId = inputUserId ? inputUserId.value.trim() : '';
        if (!/^\d{8,11}$/.test(userId)) {
            isValid = false;
            errorMessage = 'Player ID Free Fire tidak valid! (Harus 8-11 Angka)';
        }
    } else if (selectedGame.id === 'pubgm') {
        const userId = inputUserId ? inputUserId.value.trim() : '';
        if (!/^\d{8,12}$/.test(userId)) {
            isValid = false;
            errorMessage = 'Player ID PUBG Mobile tidak valid! (Harus 8-12 Angka)';
        }
    } else {
        const userId = inputUserId ? inputUserId.value.trim() : '';
        if (userId === '') {
            isValid = false;
            errorMessage = 'Mohon isi ID atau Email akun Anda!';
        }
    }
    return isValid ? '' : errorMessage;
}

// Lokal -> backend di localhost:3000, produksi -> backend Vercel.
const API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ?
    'http://localhost:3000' :
    'https://rexstore-backend.vercel.app';

let currentUser = null;
let selectedGame = null;
let selectedDenom = null;
let selectedPayment = null;
let userTransactions = [];
let activeCategory = 'all'; // filter game di beranda
let activeDenomCategory = 'all'; // tab nominal di halaman top up
let currentLang = 'id';

const translations = {
    id: {
        searchPlaceholder: "Cari game favoritmu...",
        login: "Masuk",
        register: "Daftar",
        allGames: "Semua Game",
        popular: "Populer",
        voucher: "Voucher",
        pcGame: "PC",
        newGame: "New",
        home: "Beranda Utama",
        accountVip: "Pusat Akun & VIP",
        howToBuy: "Cara Pembelian",
        terms: "Syarat & Ketentuan",
        privacy: "Kebijakan Privasi",
        helpCs: "Bantuan & CS",
        loaderText: "Memuat sistem...",
        manageAccount: "Kelola Akun & Riwayat",
        slide1Tag: "BOOYAH PASS SEASON",
        slide1Title: "Free Fire Booyah Pass Top Up",
        slide1Desc: "Buka bundle eksklusif & senjata legendaris dengan harga terjangkau instan masuk!",
        slide1Btn: "Top Up Free Fire",
        bestSeller: "TERLARIS",
        slide2Tag: "PROMO KILAT MLBB",
        slide2Title: "Mobile Legends Diamond Pass",
        slide2Desc: "Dapatkan Weekly Diamond Pass dan Starlight termurah dengan proses otomatis.",
        slide2Btn: "Top Up MLBB",
        promo: "PROMO",
        slide3Tag: "DIJAMIN AMAN & LEGAL",
        slide3Title: "PUBG Mobile UC & Royale Pass",
        slide3Desc: "Top up UC aman resmi langsung masuk ke akun game kamu dalam hitungan detik.",
        slide3Btn: "Top Up PUBG",
        safe100: "AMAN 100%",
        liveTrx: "Live Transaksi",
        loadingTicker: "Memuat aktivitas transaksi terbaru...",
        safe100Percent: "100% Aman",
        backHome: "Kembali ke Beranda",
        totalSpend: "Total Belanja:",
        vipProgress: "(Menuju VIP berikutnya)",
        editProfile: "Edit Profil",
        logout: "Keluar Akun",
        totalTrx: "Total Transaksi",
        rexCoinBalance: "Saldo RexCoin",
        vipBenefit: "Keuntungan VIP",
        recentTrx: "Riwayat Transaksi Terakhir",
        thTrxId: "ID Pesanan",
        thItem: "Item",
        thTotal: "Total",
        thStatus: "Status",
        noTrx: "Belum ada riwayat transaksi",
        importantNote: "Catatan Penting:",
        noteDesc: "Top up diproses instan otomatis setelah pembayaran terkonfirmasi. Pastikan ID akun sudah benar.",
        step1Title: "Masukkan Data Akun",
        step2Title: "Pilih Nominal",
        vipDiscountActive: "VIP Diskon Aktif",
        step3Title: "Pilih Pembayaran",
        payEwallet: "E-Wallet & QRIS",
        payVa: "Virtual Account Bank",
        payRetail: "Gerai Retail / Minimarket",
        totalPay: "Total Pembayaran",
        buyNow: "Beli Sekarang",
        footerDesc: "Platform top-up game online tercepat, paling murah, dan 100% aman terpercaya di Indonesia. Layanan transaksi otomatis 24/7.",
        followUs: "Ikuti Kami",
        navTitle: "Navigasi",
        infoTitle: "Informasi",
        csHours: "Layanan CS: 08.00 - 23.00 WIB",
        paymentTitle: "Pembayaran Terlengkap",
        paymentSubtitle: "Mendukung berbagai metode pembayaran instan:",
        copyright: "Hak Cipta Dilindungi.",
        autoSystem: "Sistem Transaksi Otomatis 24 Jam",
        loginTitle: "Masuk ke RexStore",
        loginSubtitle: "Kelola transaksi dan poin reward Anda",
        emailLabel: "Email / Username",
        passLabel: "Password",
        noAccount: "Belum punya akun?",
        regTitle: "Daftar Akun Baru",
        regSubtitle: "Nikmati kemudahan top-up game kilat",
        nameLabel: "Nama Lengkap",
        registerBtn: "Daftar Sekarang",
        hasAccount: "Sudah punya akun?",
        editTitle: "Edit Profil Akun",
        editSubtitle: "Perbarui informasi data diri Anda",
        avatarLabel: "URL Foto Profil (Opsional)",
        avatarDesc: "Masukkan tautan gambar atau biarkan kosong untuk menggunakan inisial nama.",
        cancel: "Batal",
        save: "Simpan Perubahan",
        invoiceTitle: "Pesanan Berhasil Dibuat",
        invoiceSubtitle: "Silakan lakukan pembayaran",
        done: "Selesai",
        guideTitle: "Petunjuk",
        langModalTitle: "Pilih Bahasa & Wilayah",
        countryRegion: "Negara / Wilayah",
        languageLabel: "Bahasa",
        confirm: "Konfirmasi",
        vipInfoTitle: "INFORMASI VIP",
        vipBannerTitle: "BUKA MANFAAT VIP KAYA RAYA!",
        vipBannerDesc: "Belanja Lebih Banyak di RexStore, Buka Lebih Banyak Keistimewaan!",
        vipLevelTitle: "TINGKAT VIP",
        vipLevelDesc: "Sistem pertumbuhan keanggotaan RexStore memiliki 9 tingkat dari VIP 1 hingga VIP 9, memberikan hak istimewa dan manfaat yang berbeda untuk anggota di setiap tingkat.",
        vipUpgradeTitle: "PENINGKATAN LEVEL VIP",
        vipUpgradeDesc: "Level VIP terkait dengan jumlah kumulatif transaksi yang diisi ulang oleh pemain: pengguna dapat meningkatkan level keanggotaan dengan mengisi ulang atau menukarkan RexCoin sesuai kebutuhan.",
        thTier: "Tingkat",
        thMinSpend: "Minimal Belanja",
        thDiscount: "Diskon"
    },
    en: {
        searchPlaceholder: "Search your favorite game...",
        login: "Login",
        register: "Register",
        allGames: "All Games",
        popular: "Popular",
        voucher: "Voucher",
        pcGame: "PC",
        newGame: "New",
        home: "Main Home",
        accountVip: "Account Center & VIP",
        howToBuy: "How to Buy",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        helpCs: "Help & CS",
        loaderText: "Loading system...",
        manageAccount: "Manage Account & History",
        slide1Tag: "BOOYAH PASS SEASON",
        slide1Title: "Free Fire Booyah Pass Top Up",
        slide1Desc: "Unlock exclusive bundles & legendary weapons affordably and instantly credited!",
        slide1Btn: "Top Up Free Fire",
        bestSeller: "BEST SELLER",
        slide2Tag: "MLBB FLASH SALE",
        slide2Title: "Mobile Legends Diamond Pass",
        slide2Desc: "Get the cheapest Weekly Diamond Pass and Starlight with automated processing.",
        slide2Btn: "Top Up MLBB",
        promo: "PROMO",
        slide3Tag: "SECURE & LEGAL",
        slide3Title: "PUBG Mobile UC & Royale Pass",
        slide3Desc: "Official secure UC top up directly credited to your game account in seconds.",
        slide3Btn: "Top Up PUBG",
        safe100: "100% SECURE",
        liveTrx: "Live Transactions",
        loadingTicker: "Loading recent transaction activities...",
        safe100Percent: "100% Secure",
        backHome: "Back to Home",
        totalSpend: "Total Spending:",
        vipProgress: "(Towards next VIP)",
        editProfile: "Edit Profile",
        logout: "Log Out",
        totalTrx: "Total Transactions",
        rexCoinBalance: "RexCoin Balance",
        vipBenefit: "VIP Benefits",
        recentTrx: "Recent Transaction History",
        thTrxId: "Order ID",
        thItem: "Item",
        thTotal: "Total",
        thStatus: "Status",
        noTrx: "No transaction history yet",
        importantNote: "Important Note:",
        noteDesc: "Top ups are processed instantly and automatically after payment confirmation. Make sure your account ID is correct.",
        step1Title: "Enter Account Data",
        step2Title: "Select Denomination",
        vipDiscountActive: "VIP Discount Active",
        step3Title: "Select Payment",
        payEwallet: "E-Wallet & QRIS",
        payVa: "Bank Virtual Account",
        payRetail: "Retail Store / Minimarket",
        totalPay: "Total Payment",
        buyNow: "Buy Now",
        footerDesc: "The fastest, cheapest, and 100% trusted online game top-up platform in Indonesia. 24/7 automated transaction service.",
        followUs: "Follow Us",
        navTitle: "Navigation",
        infoTitle: "Information",
        csHours: "CS Hours: 08:00 - 23:00 WIB",
        paymentTitle: "Complete Payments",
        paymentSubtitle: "Supporting various instant payment methods:",
        copyright: "All Rights Reserved.",
        autoSystem: "24-Hour Automated Transaction System",
        loginTitle: "Login to RexStore",
        loginSubtitle: "Manage your transactions and reward points",
        emailLabel: "Email / Username",
        passLabel: "Password",
        noAccount: "Don't have an account?",
        regTitle: "Register New Account",
        regSubtitle: "Enjoy the ease of lightning game top-ups",
        nameLabel: "Full Name",
        registerBtn: "Register Now",
        hasAccount: "Already have an account?",
        editTitle: "Edit Account Profile",
        editSubtitle: "Update your personal information",
        avatarLabel: "Profile Picture URL (Optional)",
        avatarDesc: "Enter an image link or leave blank to use your name initials.",
        cancel: "Cancel",
        save: "Save Changes",
        invoiceTitle: "Order Successfully Created",
        invoiceSubtitle: "Please complete your payment",
        done: "Done",
        guideTitle: "Guide",
        langModalTitle: "Select Language & Region",
        countryRegion: "Country / Region",
        languageLabel: "Language",
        confirm: "Confirm",
        vipInfoTitle: "VIP INFORMATION",
        vipBannerTitle: "UNLOCK LUXURIOUS VIP BENEFITS!",
        vipBannerDesc: "Shop More at RexStore, Unlock More Exclusive Privileges!",
        vipLevelTitle: "VIP TIERS",
        vipLevelDesc: "RexStore's membership system consists of 9 tiers from VIP 1 to VIP 9, providing different privileges and benefits for members at each tier.",
        vipUpgradeTitle: "VIP LEVEL UPGRADE",
        vipUpgradeDesc: "VIP levels are linked to cumulative transaction amounts: players can upgrade their membership level by topping up or redeeming RexCoins as needed.",
        thTier: "Tier",
        thMinSpend: "Min Spending",
        thDiscount: "Discount"
    }
};

const vipThresholds = [
    { level: 0, name: 'VIP 0', min: 0, max: 1500000 },
    { level: 1, name: 'VIP 1', min: 1500000, max: 3500000 },
    { level: 2, name: 'VIP 2', min: 3500000, max: 7000000 },
    { level: 3, name: 'VIP 3', min: 7000000, max: 12000000 },
    { level: 4, name: 'VIP 4', min: 12000000, max: 20000000 },
    { level: 5, name: 'VIP 5', min: 20000000, max: 35000000 },
    { level: 6, name: 'VIP 6', min: 35000000, max: 55000000 },
    { level: 7, name: 'VIP 7', min: 55000000, max: 80000000 },
    { level: 8, name: 'VIP 8', min: 80000000, max: 120000000 },
    { level: 9, name: 'VIP 9', min: 120000000, max: Infinity }
];

const vipTiers = [
    { level: 0, minSpend: 0, discount: 0 },
    { level: 1, minSpend: 1500000, discount: 1 },
    { level: 2, minSpend: 3500000, discount: 2 },
    { level: 3, minSpend: 7000000, discount: 3 },
    { level: 4, minSpend: 12000000, discount: 4 },
    { level: 5, minSpend: 20000000, discount: 5 },
    { level: 6, minSpend: 35000000, discount: 6 },
    { level: 7, minSpend: 55000000, discount: 7 },
    { level: 8, minSpend: 80000000, discount: 8 },
    { level: 9, minSpend: 120000000, discount: 9 }
];

function calculateVipLevel(totalSpend) {
    let level = 0;
    for (let i = vipTiers.length - 1; i >= 0; i--) {
        if (totalSpend >= vipTiers[i].minSpend) {
            level = vipTiers[i].level;
            break;
        }
    }
    return level;
}

// Diskon VIP mengikuti tabel vipTiers (VIP 9 = 9%).
function getVipDiscount(level) {
    const tier = vipTiers.find(t => t.level === level);
    return tier ? tier.discount : 0;
}

function getCurrentVipLevel() {
    return currentUser ? (currentUser.vipLevel || 0) : 0;
}

function getDiscountedPrice(price) {
    return Math.round(price * (1 - getVipDiscount(getCurrentVipLevel()) / 100));
}

// Riwayat transaksi & saldo RexCoin disimpan per akun (kunci = email) supaya
// tidak hilang saat halaman dimuat ulang atau saat logout.
function userStorageKey(prefix) {
    return currentUser && currentUser.email ? prefix + currentUser.email.toLowerCase() : null;
}

function loadUserTransactions() {
    const key = userStorageKey('rex_trx_');
    try {
        userTransactions = key ? JSON.parse(localStorage.getItem(key) || '[]') : [];
    } catch (e) {
        userTransactions = [];
    }
}

function saveUserTransactions() {
    const key = userStorageKey('rex_trx_');
    if (key) localStorage.setItem(key, JSON.stringify(userTransactions));
}

function getTotalSpend() {
    return userTransactions.reduce((acc, t) => acc + (t.total || 0), 0);
}

function updateVipDisplay() {
    const text = `VIP ${getCurrentVipLevel()}`;
    ['desktop-vip-text', 'mobile-vip-text'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    });
}

function showLoader(message = 'Memproses...') {
    const loader = document.getElementById('global-loader');
    const textEl = document.getElementById('loader-text');
    if (textEl) textEl.innerText = message;
    if (loader) {
        loader.style.display = 'flex';
        loader.style.opacity = '1';
    }
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showLoader('Memuat RexStore...');
    setTimeout(() => {
        checkLoginState();
        filterGames('all');
        initBannerParallax();
        initSlider();
        initLiveTicker();
        processGoogleRedirectResult();
    }, 600);
});

let currentSlideIndex = 0;
let sliderInterval;

function initSlider() {
    sliderInterval = setInterval(() => {
        changeBannerSlide('next');
    }, 5000);
}

function resetSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        changeBannerSlide('next');
    }, 5000);
}

function updateBannerUI() {
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('.slider-dot');
    const bannerCard = document.getElementById('banner-card');
    
    if (!track) return;
    
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
            dot.className = 'slider-dot w-6 h-1.5 rounded-full bg-cyan-400 transition-all duration-300';
        } else {
            dot.className = 'slider-dot w-1.5 h-1.5 rounded-full bg-slate-600 hover:bg-slate-400 transition-all duration-300';
        }
    });
    
    if (bannerCard) {
        bannerCard.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.5)';
        setTimeout(() => {
            bannerCard.style.boxShadow = '';
        }, 400);
    }
}

function changeBannerSlide(direction) {
    const track = document.getElementById('slider-track');
    if (!track) return;
    
    const totalSlides = track.children.length;
    if (totalSlides === 0) return;
    
    if (direction === 'next') {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    } else {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    }
    
    updateBannerUI();
}

function goToSlide(index, event) {
    if (event) event.stopPropagation();
    currentSlideIndex = index;
    updateBannerUI();
    resetSliderInterval();
}

const liveSampleNames = ['Rizky**', 'Dimas_***', 'Ahmad**', 'Putri**', 'Vian**', 'Reza***', 'Sarah**', 'Andi**', 'Bayu**', 'Kevin***', 'Devi**', 'Fajar***'];
const liveSampleItems = [
    'Mobile Legends - 86 Diamonds',
    'Free Fire - 140 Diamonds',
    'Steam Wallet Rp 90.000',
    'Google Play Rp 100.000',
    'PUBG Mobile - 60 UC'
];

function initLiveTicker() {
    const tickerEl = document.getElementById('live-ticker-text');
    if (!tickerEl) return;
    
    function generateTicker() {
        let recentLiveTrx = JSON.parse(localStorage.getItem('rex_live_trx') || '[]');
        if (recentLiveTrx.length > 0) {
            let latest = recentLiveTrx[Math.floor(Math.random() * recentLiveTrx.length)];
            tickerEl.classList.remove('ticker-animate');
            void tickerEl.offsetWidth;
            tickerEl.innerHTML = `<span class="text-white font-semibold">${escapeHtml(String(latest.name))}</span> <span data-i18n-ticker="successTopup">baru saja sukses top-up</span> <span class="text-cyan-300 font-semibold">${escapeHtml(String(latest.item))}</span> <span class="text-slate-400 text-[10px]">(${latest.time})</span>`;
            tickerEl.classList.add('ticker-animate');
        } else {
            const randomName = liveSampleNames[Math.floor(Math.random() * liveSampleNames.length)];
            const randomItem = liveSampleItems[Math.floor(Math.random() * liveSampleItems.length)];
            const randomSec = Math.floor(Math.random() * 45) + 5;
            tickerEl.classList.remove('ticker-animate');
            void tickerEl.offsetWidth;
            tickerEl.innerHTML = `<span class="text-white font-semibold">${randomName}</span> <span data-i18n-ticker="successTopup">baru saja sukses top-up</span> <span class="text-cyan-300 font-semibold">${randomItem}</span> <span class="text-slate-400 text-[10px]">(${randomSec}s ago)</span>`;
            tickerEl.classList.add('ticker-animate');
        }
    }
    
    generateTicker();
    setInterval(generateTicker, 4000);
}

function initBannerParallax() {
    const banner = document.getElementById('banner-container');
    const card = document.getElementById('banner-card');
    if (!banner || !card) return;
    
    banner.addEventListener('mousemove', (e) => {
        const rect = banner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = (x - xc) / xc;
        const dy = (y - yc) / yc;
        card.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.01)`;
    });
    
    banner.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
}

function filterGames(category) {
    activeCategory = category;
    const t = translations[currentLang];
    
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.className = 'category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-bold border border-cyan-400 bg-cyan-500/10 text-cyan-400 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.25)]';
        } else {
            btn.className = 'category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-bold border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white transition-all flex items-center gap-1.5';
        }
    });
    
    const gridTitle = document.getElementById('grid-title');
    let filtered = [];
    
    if (category === 'all') {
        gridTitle.innerHTML = `<i class="fa-solid fa-gamepad text-cyan-400 mr-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${t.allGames}`;
        filtered = games;
    } else if (category === 'populer') {
        gridTitle.innerHTML = `<i class="fa-solid fa-fire text-cyan-400 mr-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${t.popular}`;
        filtered = games.filter(g => g.category.includes('populer'));
    } else if (category === 'voucher') {
        gridTitle.innerHTML = `<i class="fa-solid fa-ticket text-cyan-400 mr-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${t.voucher}`;
        filtered = games.filter(g => g.category.includes('voucher'));
    } else if (category === 'pc') {
        gridTitle.innerHTML = `<i class="fa-solid fa-computer text-cyan-400 mr-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${t.pcGame}`;
        filtered = games.filter(g => g.category.includes('pc'));
    } else {
        gridTitle.innerHTML = `<i class="fa-solid fa-gamepad text-cyan-400 mr-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${t.allGames}`;
        filtered = games.filter(g => g.category.includes(category));
    }
    
    renderGameGridCards('game-grid', filtered);
    
    const isUserAction = window.event && (window.event.type === 'click' || window.event.type === 'touchstart');
    
    if (isUserAction) {
        const categoryTabs = document.getElementById('category-tabs');
        if (categoryTabs) {
            const yOffset = -70;
            const y = categoryTabs.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

function renderGameGridCards(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (list.length === 0) {
        container.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400 text-sm">Tidak ada game dalam kategori ini</div>`;
        return;
    }
    
    container.innerHTML = list.map(g => `
        <div onclick="openTopUp('${g.id}')" class="group glass-panel rounded-xl p-3 hover:border-cyan-400/80 transition-all duration-300 cursor-pointer flex flex-col items-center text-center hover:-translate-y-1 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-2.5 shadow-inner border border-slate-700 group-hover:scale-105 transition-transform relative">
                <img src="${g.image}" alt="${g.name}" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-white text-xs md:text-sm line-clamp-2 group-hover:text-cyan-300 transition">${g.name}</h3>
            <p class="text-[10px] md:text-xs text-slate-400 mt-0.5">${g.publisher}</p>
        </div>
    `).join('');
}

function showHome() {
    showLoader('Memuat Beranda...');
    setTimeout(() => {
        hideAllViews();
        const homeView = document.getElementById('home-view');
        if (homeView) homeView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        hideLoader();
    }, 300);
}

function showAccountCenter() {
    if (!currentUser) {
        openModal('loginModal');
        return;
    }
    showLoader('Membuka Pusat Akun...');
    setTimeout(() => {
        hideAllViews();
        
        if (typeof updateCokeDisplay === 'function') {
            updateCokeDisplay();
        }
        
        const totalSpend = getTotalSpend();
        const vipLevel = calculateVipLevel(totalSpend);
        
        currentUser.vipLevel = vipLevel;
        currentUser.totalSpend = totalSpend;
        localStorage.setItem('rex_user', JSON.stringify(currentUser));
        updateVipDisplay();
        
        const discountPct = getVipDiscount(vipLevel);
        const userName = currentUser.name || 'Pengguna';
        const userEmail = currentUser.email || `${userName.toLowerCase().replace(/\s+/g,'')}@rexstore.id`;
        const userInitials = currentUser.initials || userName.charAt(0).toUpperCase() || 'U';
        
        const accNameEl = document.getElementById('acc-name');
        const accEmailEl = document.getElementById('acc-email');
        const accTrxCountEl = document.getElementById('acc-trx-count');
        const accVipBadgeEl = document.getElementById('acc-vip-badge');
        const accVipBenefitEl = document.getElementById('acc-vip-benefit');
        const accTotalSpendEl = document.getElementById('acc-total-spend');
        
        if (accNameEl) accNameEl.innerText = userName;
        if (accEmailEl) accEmailEl.innerText = userEmail;
        if (accTrxCountEl) accTrxCountEl.innerText = `${userTransactions.length} Pesanan`;
        if (accVipBadgeEl) accVipBadgeEl.innerText = `VIP ${vipLevel}`;
        if (accVipBenefitEl) accVipBenefitEl.innerText = `${discountPct}% Potongan Harga`;
        if (accTotalSpendEl) accTotalSpendEl.innerText = formatRupiah(totalSpend);
        
        const accAvatarEl = document.getElementById('acc-avatar');
        if (accAvatarEl) {
            accAvatarEl.innerHTML = currentUser.avatar ?
                `<img src="${currentUser.avatar}" class="w-full h-full object-cover rounded-full">` :
                userInitials;
        }
        
        const listEl = document.getElementById('acc-trx-list');
        if (listEl) {
            if (userTransactions.length === 0) {
                listEl.innerHTML = `<tr><td colspan="4" class="px-4 py-6 text-center text-slate-500">Belum ada riwayat transaksi</td></tr>`;
            } else {
                listEl.innerHTML = userTransactions.map(t => `
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-4 py-3 font-mono text-xs text-cyan-400">${t.id}</td>
                        <td class="px-4 py-3 font-medium text-white">${t.item}</td>
                        <td class="px-4 py-3">${formatRupiah(t.total)}</td>
                        <td class="px-4 py-3"><span class="bg-cyan-500/10 text-cyan-300 text-xs px-2.5 py-1 rounded-full border border-cyan-500/30 font-medium">Berhasil</span></td>
                    </tr>
                `).join('');
            }
        }
        
        const accViewEl = document.getElementById('account-view');
        if (accViewEl) accViewEl.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        hideLoader();
    }, 300);
}

function hideAllViews() {
    const views = ['home-view', 'account-view', 'topup-view', 'static-page-view', 'hubungi-kami-view'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
        }
    });
}

function showPage(pageKey) {
    showLoader('Memuat Halaman...');
    setTimeout(() => {
        hideAllViews();
        
        if (pageKey === 'hubungi-kami') {
            const customContactView = document.getElementById('hubungi-kami-view');
            if (customContactView) {
                customContactView.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                hideLoader();
                return;
            }
        }
        
        // Data konten halaman statis dengan desain yang dipercantik
        const t = translations[currentLang];
        let title = '';
        let iconClass = '';
        let contentHtml = '';
        
        // Definisikan cadangan data statis jika dipanggil dari luar
        const staticPagesData = {
            'bantuan': { title: 'Bantuan', content: '<p>Silakan hubungi layanan pelanggan kami melalui menu Hubungi Kami.</p>' }
        };
        const pageData = staticPagesData[pageKey] || {};
        
        if (pageKey === 'cara-pembelian') {
            title = t.howToBuy || 'Cara Pembelian';
            iconClass = 'fa-solid fa-circle-question';
            contentHtml = `
                <div class="space-y-4 text-xs md:text-sm text-slate-300">
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl flex items-start gap-3.5">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.2)]">1</div>
                        <div>
                            <strong class="text-white block mb-1">Pilih Produk Game</strong>
                            <p class="text-slate-400">Pilih game atau voucher digital favorit Anda dari halaman beranda utama.</p>
                        </div>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl flex items-start gap-3.5">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.2)]">2</div>
                        <div>
                            <strong class="text-white block mb-1">Masukkan Data Akun</strong>
                            <p class="text-slate-400">Isi User ID dan Zone ID (atau email akun) dengan benar dan periksa kembali.</p>
                        </div>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl flex items-start gap-3.5">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.2)]">3</div>
                        <div>
                            <strong class="text-white block mb-1">Pilih Nominal & Pembayaran</strong>
                            <p class="text-slate-400">Pilih jumlah nominal top-up dan tentukan metode pembayaran yang Anda inginkan (QRIS, E-Wallet, VA Bank, dll).</p>
                        </div>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl flex items-start gap-3.5">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.2)]">4</div>
                        <div>
                            <strong class="text-white block mb-1">Selesaikan Pembayaran</strong>
                            <p class="text-slate-400">Lakukan pembayaran sesuai instruksi. Sistem akan memproses top-up secara instan dan otomatis.</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (pageKey === 'syarat-ketentuan') {
            title = t.terms || 'Syarat & Ketentuan';
            iconClass = 'fa-solid fa-file-contract';
            contentHtml = `
                <div class="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-circle-check text-cyan-400 text-xs"></i> Ketentuan Umum</h3>
                        <p class="text-slate-400">Dengan mengakses dan menggunakan layanan RexStore, pengguna dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di platform ini.</p>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-circle-check text-cyan-400 text-xs"></i> Tanggung Jawab Akun</h3>
                        <p class="text-slate-400">Pengguna bertanggung jawab penuh atas keakuratan data ID akun game yang dimasukkan. RexStore tidak bertanggung jawab atas kesalahan pengiriman akibat kelalaian pengguna.</p>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-circle-check text-cyan-400 text-xs"></i> Perubahan Layanan</h3>
                        <p class="text-slate-400">RexStore berhak sewaktu-waktu mengubah, menambah, atau mengurangi ketentuan layanan tanpa pemberitahuan terlebih dahulu demi peningkatan kualitas sistem.</p>
                    </div>
                </div>
            `;
        } else if (pageKey === 'kebijakan-privasi') {
            title = t.privacy || 'Kebijakan Privasi';
            iconClass = 'fa-solid fa-shield-halved';
            contentHtml = `
                <div class="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-lock text-cyan-400 text-xs"></i> Perlindungan Data Pengguna</h3>
                        <p class="text-slate-400">Kami sangat menjaga kerahasiaan data pribadi, riwayat transaksi, dan informasi akun Anda menggunakan sistem enkripsi keamanan tingkat tinggi.</p>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-lock text-cyan-400 text-xs"></i> Penggunaan Informasi</h3>
                        <p class="text-slate-400">Informasi yang dikumpulkan hanya digunakan untuk keperluan pemrosesan transaksi top-up, verifikasi akun, dan peningkatan layanan Customer Support.</p>
                    </div>
                    <div class="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                        <h3 class="text-white font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-lock text-cyan-400 text-xs"></i> Pihak Ketiga</h3>
                        <p class="text-slate-400">RexStore tidak pernah memperjualbelikan atau menyebarkan data pribadi pengguna kepada pihak ketiga tanpa izin resmi dari yang bersangkutan.</p>
                    </div>
                </div>
            `;
        } else {
            title = pageData?.title || 'Informasi';
            iconClass = 'fa-solid fa-info-circle';
            contentHtml = pageData?.content || '<p class="text-slate-400">Konten tidak ditemukan.</p>';
        }
        
        // Render ke elemen static-page-view yang ada di index.html
        const staticView = document.getElementById('static-page-view');
        if (staticView) {
            staticView.innerHTML = `
                <div class="max-w-2xl mx-auto py-2">
                    <button onclick="showHome()" class="mb-5 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 rounded-xl text-xs font-medium transition flex items-center gap-2 backdrop-blur-md shadow-sm cursor-pointer">
                        <i class="fa-solid fa-arrow-left text-cyan-400"></i> Kembali ke Beranda
                    </button>
                    <div class="glass-panel rounded-2xl p-5 md:p-7 shadow-2xl relative overflow-hidden border border-slate-800">
                        <div class="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div class="mb-6 pb-4 border-b border-slate-800">
                            <h1 class="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2.5">
                                <i class="${iconClass} text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></i> ${title}
                            </h1>
                        </div>
                        <div>${contentHtml}</div>
                    </div>
                </div>
            `;
            staticView.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        hideLoader();
    }, 300);
}

// Pastikan fungsi submit form juga ada di script.js
function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) return;
    
    showLoader('Mengirim Pesan...');
    setTimeout(() => {
        hideLoader();
        alert('Pesan berhasil terkirim! Tim Support kami akan segera merespons via email.');
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    }, 600);
}

function openTopUp(gameId) {
    showLoader('Menyiapkan Formulir...');
    setTimeout(() => {
        selectedGame = games.find(g => g.id === gameId);
        if (!selectedGame) {
            hideLoader();
            return;
        }
        
        hideAllViews();
        document.getElementById('detail-game-img').src = selectedGame.image;
        document.getElementById('detail-game-title').innerText = selectedGame.name;
        document.getElementById('detail-game-pub').innerText = selectedGame.publisher;
        
        const inputsContainer = document.getElementById('account-inputs');
        let inputsHtml = selectedGame.inputs.map((inp, index) => `
            <div class="w-full mb-3">
                <label class="block text-xs font-medium text-slate-300 mb-1">${inp.label}</label>
                <input type="text" id="input-${inp.id}" placeholder="${inp.placeholder}" onblur="checkAndScrollToDenom()" class="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400">
            </div>
        `).join('');
        
        inputsHtml += `
            <div class="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                <div class="flex items-center space-x-2 text-amber-400 text-xs">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Periksa kembali ID Anda agar tidak salah kirim.</span>
                </div>
                <button onclick="openPetunjukModal()" class="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-circle-question"></i> Petunjuk
                </button>
            </div>
        `;
        
        inputsContainer.innerHTML = inputsHtml;
        
        const vipLevel = currentUser ? (currentUser.vipLevel || 0) : 0;
        const discountPct = getVipDiscount(vipLevel);
        const discountBanner = document.getElementById('vip-discount-banner');
        if (discountBanner) {
            discountBanner.innerText = 'VIP ' + vipLevel + ' Aktif (' + discountPct + '% Diskon)';
        }
        
        activeDenomCategory = 'all';
        selectedDenom = null;
        selectedPayment = null;
        renderTopUpForm();
        
        renderPaymentMethods('payment-ewallet', paymentMethods.ewallet);
        renderPaymentMethods('payment-va', paymentMethods.va);
        renderPaymentMethods('payment-retail', paymentMethods.retail);
        
        selectedDenom = null;
        selectedPayment = null;
        updateTotalPrice();
        
        document.getElementById('topup-view').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        hideLoader();
    }, 400);
}

function renderTopUpForm() {
    const denomGrid = document.getElementById('denomination-grid');
    if (!denomGrid || !selectedGame) return;
    
    const vipLevel = currentUser ? (currentUser.vipLevel || 0) : 0;
    const discountPct = getVipDiscount(vipLevel);
    
    let categories = selectedGame.categories || [];
    let tabsHTML = `
        <div class="col-span-full flex gap-2 overflow-x-auto pb-3 mb-2 no-scrollbar">
            <button onclick="switchCategory('all')" id="tab-all" class="tab-btn px-4 py-2 rounded-full text-xs font-bold border ${activeDenomCategory === 'all' ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400' : 'border-slate-800 text-slate-400'} whitespace-nowrap transition">Semua</button>
            ${categories.map(cat => `
                <button onclick="switchCategory('${cat.id}')" id="tab-${cat.id}" class="tab-btn px-4 py-2 rounded-full text-xs font-bold border ${activeDenomCategory === cat.id ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400' : 'border-slate-800 text-slate-400'} whitespace-nowrap transition">${cat.name}</button>
            `).join('')}
        </div>
    `;
    
    let items = selectedGame.denominations || [];
    if (activeDenomCategory !== 'all') {
        items = items.filter(d => d.cat === activeDenomCategory);
    }
    
    let cardsHTML = items.map(d => {
        const discountedPrice = Math.round(d.price * (1 - (discountPct / 100)));
        
        let badgeHTML = '';
        if (d.badge) {
            badgeHTML = `<span class="absolute -top-2.5 right-3 z-10 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(6,182,212,0.4)] capitalize border border-cyan-300/40 tracking-wider">${d.badge}</span>`;
        }
        
        let rawName = d.name;
        let displayName = rawName;
        let bonusText = '';
        if (rawName.includes('(')) {
            let parts = rawName.split('(');
            displayName = parts[0].trim();
            bonusText = '(' + parts[1].trim();
        }
        
        // Ambil nominal angka dari nama produk
        const amountMatch = d.name.match(/\d+/);
        const amount = amountMatch ? parseInt(amountMatch[0]) : 0;
        
        // Panggil gambar dinamis (jika fungsi getItemIcon ada) atau fallback gambar standar
        const imageSrc = typeof getItemIcon === 'function' ? getItemIcon(amount, d.cat, selectedGame.id) : '../public/images/logo-item-game/Mobile-Legends/diamond.png';
        
        return `
            <div onclick="selectDenomination('${d.id}')" id="denom-${d.id}" class="denom-card glass-panel rounded-xl p-3 md:p-4 border border-slate-800 cursor-pointer hover:border-cyan-400 hover:scale-[1.02] transition-all duration-200 text-left flex flex-col justify-between relative min-h-[110px] md:min-h-[120px] w-full group mt-2">
                
                ${badgeHTML}
                
                <div class="flex items-start gap-2.5 w-full pt-1">
                    <div class="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <img src="${imageSrc}" 
                             alt="Item" 
                             onerror="this.onerror=null; this.src='../public/images/logo-item-game/diamond.png';" 
                             class="w-full h-full object-contain">
                    </div>
                    <div class="flex-1 min-w-0">
                        <span class="text-white text-xs md:text-sm font-extrabold truncate block leading-tight">${displayName}</span>
                        ${bonusText ? `<span class="text-[10px] md:text-xs text-slate-400 block mt-0.5 leading-tight">${bonusText}</span>` : ''}
                    </div>
                </div>
                
                <div class="flex items-end justify-between mt-3 pt-2 border-t border-slate-800/60 w-full">
                    <div class="min-w-0">
                        ${discountPct > 0 ? `<span class="text-[9px] md:text-[10px] text-slate-400 line-through block whitespace-nowrap">${formatRupiah(d.price)}</span>` : ''}
                        <span class="text-xs md:text-sm font-extrabold text-cyan-400 whitespace-nowrap">${formatRupiah(discountedPrice)}</span>
                    </div>
                    <div class="w-4 h-4 md:w-5 md:h-5 rounded-full border border-slate-600 flex items-center justify-center radio-indicator transition shrink-0">
                        <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 hidden check-dot"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    denomGrid.className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full pt-2";
    denomGrid.innerHTML = tabsHTML + (cardsHTML || '<div class="col-span-full py-6 text-center text-slate-400 text-xs md:text-sm">Tidak ada paket dalam kategori ini</div>');
    
    if (selectedDenom) {
        const picked = document.getElementById('denom-' + selectedDenom.id);
        if (picked) picked.classList.add('item-selected', 'border-cyan-400');
    }
}

function switchCategory(catName) {
    activeDenomCategory = catName;
    renderTopUpForm();
}

function renderPaymentMethods(containerId, methods) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = methods.map(pm => {
        let feeText = pm.fee === 0 ? 'Bebas Biaya' : `Fee ${formatRupiah(pm.fee)}`;
        if (pm.id === 'qris') feeText = 'Otomatis (+0)';
        if (pm.id === 'gopay' || pm.id === 'dana') feeText = 'Instan';
        
        return `
            <div onclick="selectPaymentMethod('${pm.id}', '${pm.name}', ${pm.fee})" id="pm-${pm.id}" class="pm-card glass-panel rounded-2xl p-4 border border-slate-800 cursor-pointer hover:border-cyan-400 transition text-center flex flex-col justify-between relative min-h-[90px]">
                <div class="flex justify-between items-start w-full">
                    <div></div>
                    <div class="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center radio-indicator transition">
                        <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 hidden check-dot"></div>
                    </div>
                </div>
                <div class="my-auto flex flex-col items-center">
                    <i class="fa-solid ${pm.icon || 'fa-wallet'} text-cyan-400 text-xl mb-1"></i>
                    <h5 class="text-xs font-bold text-white mb-0.5">${pm.name}</h5>
                    <span class="text-[10px] text-slate-400">${feeText}</span>
                </div>
            </div>
        `;
    }).join('');
}

function checkAndScrollToDenom() {
    const inputUserId = document.getElementById('input-userId');
    if (inputUserId && inputUserId.value.trim().length > 3) {
        const denomSection = document.querySelector('[data-i18n="step2Title"]');
        if (denomSection) {
            const yOffset = -120; // Ubah dari -80 jadi -120 (atau -140 kalau kurang turun)
            const y = denomSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

function selectDenomination(denomId) {
    if (!selectedGame || !selectedGame.denominations) return;
    selectedDenom = selectedGame.denominations.find(d => d.id === denomId);
    
    document.querySelectorAll('.denom-card').forEach(el => {
        el.classList.remove('item-selected', 'border-cyan-400');
        el.classList.add('border-slate-800');
    });
    
    const targetCard = document.getElementById('denom-' + denomId);
    if (targetCard) {
        targetCard.classList.remove('border-slate-800');
        targetCard.classList.add('item-selected', 'border-cyan-400');
    }
    updateTotalPrice();
    
    // GANTI JADI INI: Scroll manual dengan memberi jarak (offset) sekitar 80px dari atas
    const paymentSection = document.querySelector('[data-i18n="step3Title"]');
    if (paymentSection) {
        const yOffset = -80; // Sesuaikan angka ini kalau kurang/kebanyakan jaraknya
        const y = paymentSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function selectPaymentMethod(id, name, fee) {
    selectedPayment = { id, name, fee };
    document.querySelectorAll('.pm-card').forEach(el => el.classList.remove('item-selected', 'border-cyan-400'));
    document.getElementById('pm-' + id).classList.add('item-selected', 'border-cyan-400');
    updateTotalPrice();
    
    // TAMBAHKAN INI: Otomatis geser layar ke tombol Beli Sekarang di bawah
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function updateTotalPrice() {
    let total = 0;
    if (selectedDenom) total += getDiscountedPrice(selectedDenom.price);
    if (selectedPayment) total += selectedPayment.fee; // Penambahan fee otomatis
    
    document.getElementById('total-price').innerText = formatRupiah(total);
}

let isCheckingOut = false;

// Server yang menghitung harga final. Browser hanya mengirim ID produk & metode bayar.
async function processCheckout() {
    if (isCheckingOut || !selectedGame) return;
    
    const accountError = validateGameAccount();
    if (accountError) {
        showToast(accountError, 'error');
        return;
    }
    if (!selectedDenom || !selectedPayment) {
        showToast('Pilih nominal dan metode pembayaran terlebih dahulu!', 'error');
        return;
    }
    if (!window.snap) {
        showToast('Modul pembayaran belum termuat. Muat ulang halaman lalu coba lagi.', 'error');
        return;
    }
    
    const userId = document.getElementById('input-userId').value.trim();
    const zoneInput = document.getElementById('input-zoneId');
    const zoneId = zoneInput ? zoneInput.value.trim() : '';
    const itemName = `${selectedGame.name} - ${selectedDenom.name}`;
    const checkoutBtn = document.getElementById('checkout-btn');
    
    isCheckingOut = true;
    if (checkoutBtn) checkoutBtn.disabled = true;
    showLoader('Memproses Pembayaran ke Midtrans...');
    
    try {
        const response = await fetch(`${API_BASE}/api/create-transaction`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameId: selectedGame.id,
                userId: userId,
                zoneId: zoneId,
                denomId: selectedDenom.id,
                paymentMethod: selectedPayment.id,
                vipLevel: getCurrentVipLevel()
            })
        });
        
        const resData = await response.json();
        hideLoader();
        
        if (resData.success && resData.token) {
            window.snap.pay(resData.token, {
                onSuccess: function() {
                    recordTransaction({ id: resData.orderId, item: itemName, total: resData.totalAmount });
                    showToast('Pembayaran berhasil!');
                    if (currentUser) showAccountCenter();
                    else showHome();
                },
                onPending: function() {
                    showToast('Menunggu pembayaran...', 'error');
                },
                onError: function() {
                    showToast('Pembayaran gagal!', 'error');
                },
                onClose: function() {
                    showToast('Halaman pembayaran ditutup.', 'error');
                }
            });
        } else {
            showToast(resData.message || 'Gagal membuat transaksi.', 'error');
        }
    } catch (error) {
        hideLoader();
        showToast('Terjadi gangguan jaringan ke server.', 'error');
    } finally {
        isCheckingOut = false;
        if (checkoutBtn) checkoutBtn.disabled = false;
    }
}

// Dipanggil saat Midtrans melaporkan pembayaran sukses: simpan riwayat, VIP, RexCoin.
function recordTransaction({ id, item, total }) {
    if (!id || userTransactions.some(t => t.id === id)) return; // jangan tercatat dobel
    
    userTransactions.unshift({ id, item, total, date: new Date().toLocaleDateString('id-ID') });
    saveUserTransactions();
    
    // Ticker "Live Transaksi" dengan nama disamarkan
    const rawName = currentUser && currentUser.name ? currentUser.name : 'Pelanggan';
    const maskedName = (rawName.length > 3 ? rawName.substring(0, 2) : rawName) + '***';
    let live = [];
    try { live = JSON.parse(localStorage.getItem('rex_live_trx') || '[]'); } catch (e) { live = []; }
    live.unshift({ name: maskedName, item: item, time: 'Baru saja' });
    if (live.length > 15) live.pop();
    localStorage.setItem('rex_live_trx', JSON.stringify(live));
    
    if (currentUser) {
        currentUser.totalSpend = getTotalSpend();
        currentUser.vipLevel = calculateVipLevel(currentUser.totalSpend);
        localStorage.setItem('rex_user', JSON.stringify(currentUser));
        addRexCoins(total);
    }
    updateVipDisplay();
}

// Tombol "Selesai" di invoiceModal (pencatatan transaksi sudah ditangani recordTransaction).
function finishCheckout() {
    closeAllModals();
    if (currentUser) showAccountCenter();
    else showHome();
}

function openModal(id) {
    closeAllModals();
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById(id);
    if (overlay) overlay.classList.add('active');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'block';
    }
}

function closeAllModals() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
    ['loginModal', 'registerModal', 'invoiceModal', 'editProfileModal', 'petunjukModal', 'languageModal'].forEach(id => {
        const m = document.getElementById(id);
        if (m) {
            m.classList.remove('active');
            m.style.display = 'none';
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    const flagEl = document.getElementById('nav-flag');
    const codeEl = document.getElementById('nav-lang-code');
    const mobFlagEl = document.getElementById('mob-flag');
    const mobCodeEl = document.getElementById('mob-lang-code');
    
    if (lang === 'en') {
        if (flagEl) flagEl.innerText = '🇬🇧';
        if (codeEl) codeEl.innerText = 'EN';
        if (mobFlagEl) mobFlagEl.innerText = '🇬🇧';
        if (mobCodeEl) mobCodeEl.innerText = 'EN';
    } else {
        if (flagEl) flagEl.innerText = '🇮🇩';
        if (codeEl) codeEl.innerText = 'ID';
        if (mobFlagEl) mobFlagEl.innerText = '🇮🇩';
        if (mobCodeEl) mobCodeEl.innerText = 'ID';
    }
    
    [
        ['id', 'lang-opt-id'],
        ['en', 'lang-opt-en']
    ].forEach(([code, elId]) => {
        const el = document.getElementById(elId);
        if (!el) return;
        const active = lang === code;
        el.classList.toggle('border-cyan-400', active);
        el.classList.toggle('text-cyan-400', active);
        el.classList.toggle('bg-cyan-500/10', active);
        el.classList.toggle('border-slate-700', !active);
        el.classList.toggle('text-slate-300', !active);
        const check = el.querySelector('.fa-circle-check');
        if (check) check.classList.toggle('hidden', !active);
    });
    
    applyTranslations();
    closeAllModals();
    showToast(lang === 'en' ? 'Language changed to English' : 'Bahasa diubah ke Indonesia');
}

function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;
    
    document.querySelectorAll('input[placeholder*="Cari"], input[placeholder*="Search"]').forEach(input => {
        input.placeholder = t.searchPlaceholder;
    });
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });
    
    filterGames(activeCategory);
}

function logout() {
    showLoader('Keluar akun...');
    setTimeout(() => {
        if (typeof firebase !== 'undefined' && firebase.auth) {
            firebase.auth().signOut().catch((error) => {
                console.error('Gagal keluar dari Firebase:', error);
            });
        }
        currentUser = null;
        localStorage.removeItem('rex_user');
        checkLoginState();
        showHome();
        hideLoader();
        showToast('Berhasil keluar akun.');
    }, 500);
}

function checkLoginState() {
    const saved = localStorage.getItem('rex_user');
    if (saved) {
        try {
            currentUser = JSON.parse(saved);
            loadUserTransactions();
            currentUser.vipLevel = calculateVipLevel(getTotalSpend());
        } catch (e) {
            currentUser = null;
        }
    } else {
        currentUser = null;
        userTransactions = [];
    }
    
    const guestView = document.getElementById('auth-guest');
    const userView = document.getElementById('auth-user');
    const mobileGuest = document.getElementById('mobile-auth-guest');
    const mobileUser = document.getElementById('mobile-auth-user');
    const mobileVipText = document.getElementById('mobile-vip-text');
    
    updateVipDisplay();
    
    if (currentUser && currentUser.name) {
        if (guestView) guestView.classList.add('hidden');
        if (userView) userView.classList.remove('hidden');
        if (mobileGuest) mobileGuest.classList.add('hidden');
        if (mobileUser) mobileUser.classList.remove('hidden');
        
        const nameEl = document.getElementById('user-name');
        const avatarEl = document.getElementById('user-avatar');
        const mobNameEl = document.getElementById('mobile-user-name');
        const mobAvatarEl = document.getElementById('mobile-user-avatar');
        
        if (nameEl) nameEl.innerText = currentUser.name;
        if (mobNameEl) mobNameEl.innerText = currentUser.name;
        
        const avatarHtml = currentUser.avatar ?
            `<img src="${currentUser.avatar}" class="w-full h-full object-cover">` :
            (currentUser.initials || 'U');
        
        if (avatarEl) avatarEl.innerHTML = avatarHtml;
        if (mobAvatarEl) mobAvatarEl.innerHTML = avatarHtml;
    } else {
        if (guestView) guestView.classList.remove('hidden');
        if (userView) userView.classList.add('hidden');
        if (mobileGuest) mobileGuest.classList.remove('hidden');
        if (mobileUser) mobileUser.classList.add('hidden');
    }
}

function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    
    if (!input || !icon) return;
    
    icon.style.transform = 'scale(0.7)';
    icon.style.opacity = '0.4';
    
    setTimeout(() => {
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
        icon.style.transform = 'scale(1)';
        icon.style.opacity = '1';
    }, 120);
}

function formatRupiah(number) {
    let formatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    return formatted.replace('Rp', 'Rp ');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `px-4 py-3 rounded-xl shadow-xl text-xs font-semibold text-white transition-all transform translate-y-2 opacity-0 flex items-center space-x-2 white-glow ${type === 'error' ? 'bg-red-600' : 'bg-cyan-600'}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'} text-sm"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.remove('translate-y-2', 'opacity-0'); }, 50);
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openPetunjukModal() {
    const contentEl = document.getElementById('petunjuk-content');
    const imgEl = document.getElementById('petunjuk-img');
    const imgBox = document.getElementById('petunjuk-img-container');
    const gameId = selectedGame ? selectedGame.id : '';
    
    // Gambar panduan: ../public/images/petunjuk-images/<id-game>.png. Kalau filenya belum ada, kotak gambar disembunyikan.
    if (imgBox) imgBox.style.display = 'none';
    if (imgEl && selectedGame) {
        imgEl.onload = () => { if (imgBox) imgBox.style.display = ''; };
        imgEl.onerror = () => { if (imgBox) imgBox.style.display = 'none'; };
        imgEl.src = `../public/images/petunjuk-images/${gameId}.png`;
    }
    
    if (gameId === 'mlbb') {
        contentEl.innerHTML = `
            <p class="font-bold text-white text-sm">Cara Menemukan User ID</p>
            <p>Buka app game, lalu klik menu <strong>Profile</strong> di pojok kiri atas.</p>
            <p><strong>User ID</strong> akan terlihat di bawah nama karakter Anda.</p>
            <p class="font-bold text-white mt-2">Contoh:</p>
            <p class="font-mono text-cyan-400 font-bold bg-slate-950/60 p-2 rounded border border-slate-800">12345678 (1234)</p>
            <p class="text-[11px] text-slate-400">Catatan: Angka di dalam tanda kurung <strong>(1234)</strong> adalah <strong>Zone ID</strong> dan wajib ikut dimasukkan.</p>
        `;
    } else if (gameId === 'ff') {
        contentEl.innerHTML = `
            <p class="font-bold text-white text-sm">Cara Menemukan Player ID</p>
            <p>Buka app game Free Fire, lalu klik menu profil di pojok kiri atas layar utama.</p>
            <p><strong>Player ID</strong> berupa deretan angka yang tertera di bawah nama akun Anda.</p>
            <p class="font-bold text-white mt-2">Contoh:</p>
            <p class="font-mono text-cyan-400 font-bold bg-slate-950/60 p-2 rounded border border-slate-800">123456789</p>
        `;
    } else if (gameId === 'pubgm') {
        contentEl.innerHTML = `
            <p class="font-bold text-white text-sm">Cara Menemukan Player ID</p>
            <p>Buka app PUBG Mobile, lalu ketuk foto profil di pojok kiri atas layar utama.</p>
            <p><strong>Player ID</strong> berupa deretan angka yang tertera pada profil akun Anda.</p>
        `;
    } else if (selectedGame) {
        contentEl.innerHTML = `
            <p class="font-bold text-white text-sm">Cara Pembelian ${selectedGame.name}</p>
            <p>Masukkan Email atau ID akun ${selectedGame.name} Anda dengan benar, lalu pilih nominal yang diinginkan.</p>
        `;
    } else {
        contentEl.innerHTML = `
            <p class="font-bold text-white text-sm">Cara Menemukan ID</p>
            <p>Masukkan ID akun game Anda dengan benar pada kolom yang tersedia untuk menyelesaikan transaksi.</p>
        `;
    }
    
    openModal('petunjukModal');
}

function handleSearch(keyword) {
    const query = keyword.toLowerCase().trim();
    if (query === '') {
        filterGames(activeCategory);
        return;
    }
    const filtered = games.filter(g =>
        g.name.toLowerCase().includes(query) ||
        g.publisher.toLowerCase().includes(query)
    );
    const gridTitle = document.getElementById('grid-title');
    if (gridTitle) {
        gridTitle.innerHTML = `<i class="fa-solid fa-search text-cyan-400 mr-2"></i> Hasil Pencarian: "${escapeHtml(keyword)}"`;
    }
    renderGameGridCards('game-grid', filtered);
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const icon = document.getElementById('hamburger-icon');
    if (!drawer) return;
    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
        if (icon) icon.className = 'fa-solid fa-xmark text-sm';
    } else {
        drawer.classList.add('hidden');
        if (icon) icon.className = 'fa-solid fa-bars text-sm';
    }
}

let uploadedAvatarBase64 = null;

function openEditProfileModal() {
    if (!currentUser) return;
    const nameInput = document.getElementById('editName');
    const emailInput = document.getElementById('editEmail');
    const fileInput = document.getElementById('editAvatarFile');
    if (nameInput) nameInput.value = currentUser.name || '';
    if (emailInput) emailInput.value = currentUser.email || '';
    if (fileInput) fileInput.value = '';
    uploadedAvatarBase64 = currentUser.avatar || null;
    openModal('editProfileModal');
}

document.addEventListener('change', function(e) {
    if (e.target && e.target.id === 'editAvatarFile') {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(uploadEvent) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 300;
                    const MAX_HEIGHT = 300;
                    let width = img.width;
                    let height = img.height;
                    
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    uploadedAvatarBase64 = canvas.toDataURL('image/jpeg', 0.7);
                };
                img.src = uploadEvent.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
});

function handleEditProfile(e) {
    e.preventDefault();
    const name = document.getElementById('editName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    if (!name || !email) return;
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.initials = name.charAt(0).toUpperCase();
    if (uploadedAvatarBase64) {
        currentUser.avatar = uploadedAvatarBase64;
    }
    
    localStorage.setItem('rex_user', JSON.stringify(currentUser));
    closeAllModals();
    checkLoginState();
    showAccountCenter();
    showToast('Profil berhasil diperbarui!');
}

function processGoogleRedirectResult() {
    if (typeof firebase === 'undefined' || !firebase.auth) {
        hideLoader();
        return;
    }
    firebase.auth().getRedirectResult()
        .then((result) => {
            if (!result || !result.user) {
                return;
            }
            
            const user = result.user;
            currentUser = {
                name: user.displayName || (user.email ? user.email.split('@')[0] : 'Pengguna Google'),
                email: user.email || '',
                initials: ((user.displayName || user.email || 'G').charAt(0)).toUpperCase(),
                avatar: user.photoURL || null,
                vipLevel: 0
            };
            
            localStorage.setItem('rex_user', JSON.stringify(currentUser));
            closeAllModals();
            checkLoginState();
            showToast(`Selamat datang, ${currentUser.name}!`);
            showAccountCenter();
        })
        .catch((error) => {
            if (error.code !== 'auth/redirect-cancelled-by-user' && error.code !== 'auth/null-user') {
                showToast('Gagal memproses login Google: ' + error.message, 'error');
            }
        })
        .finally(() => {
            hideLoader();
        });
}

function openVipModal() {
    var modal = document.getElementById('vipModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeVipModal() {
    var modal = document.getElementById('vipModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function handleGoogleLogin() {
    showLoader('Mengalihkan ke Google...');
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).catch(function(error) {
        hideLoader();
        showToast('Gagal mengalihkan: ' + error.message, 'error');
    });
}

function handleTwitterLogin() {
    showLoader('Menghubungkan ke Twitter...');
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider).catch(function(error) {
        hideLoader();
        showToast('Gagal terhubung ke Twitter: ' + error.message, 'error');
    });
}

function showEmailLoginForm() {
    var container = document.getElementById('email-login-form-container');
    if (container) {
        container.classList.toggle('hidden');
    }
}

function showEmailRegisterForm() {
    var container = document.getElementById('email-register-form-container');
    if (container) {
        container.classList.toggle('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    var email = document.getElementById('loginUsername').value;
    var pass = document.getElementById('loginPassword').value;
    
    showLoader('Masuk ke akun...');
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function(userCredential) {
            var user = userCredential.user;
            if (user) {
                currentUser = {
                    name: user.displayName || (user.email ? user.email.split('@')[0] : 'Pengguna'),
                    email: user.email || '',
                    initials: ((user.displayName || user.email || 'U').charAt(0)).toUpperCase(),
                    avatar: user.photoURL || null,
                    vipLevel: 0
                };
                localStorage.setItem('rex_user', JSON.stringify(currentUser));
                closeAllModals();
                checkLoginState();
                hideLoader();
                showToast('Selamat datang, ' + currentUser.name + '!');
                showAccountCenter();
            }
        })
        .catch(function(error) {
            hideLoader();
            let msg = error.message;
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                msg = 'Email atau password salah / belum terdaftar!';
            }
            showToast('Gagal Masuk: ' + msg, 'error');
        });
}

function handleRegister(event) {
    event.preventDefault();
    var name = document.getElementById('regName').value;
    var email = document.getElementById('regEmail').value;
    var pass = document.getElementById('regPassword').value;
    
    showLoader('Mendaftarkan akun...');
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(function(userCredential) {
            var user = userCredential.user;
            return user.updateProfile({ displayName: name }).then(function() {
                currentUser = {
                    name: name,
                    email: user.email,
                    initials: name.charAt(0).toUpperCase(),
                    avatar: null,
                    vipLevel: 0
                };
                localStorage.setItem('rex_user', JSON.stringify(currentUser));
                closeAllModals();
                checkLoginState();
                hideLoader();
                showToast('Akun berhasil dibuat, selamat datang ' + name + '!');
                showAccountCenter();
            });
        })
        .catch(function(error) {
            hideLoader();
            showToast('Gagal Daftar: ' + error.message, 'error');
        });
}

function getCoinBalance() {
    const key = userStorageKey('rex_coins_');
    return key ? Number(localStorage.getItem(key)) || 0 : 0;
}

function updateCokeDisplay() {
    const balance = getCoinBalance();
    document.querySelectorAll('.coke-balance-text').forEach(el => {
        el.innerText = 'Rp ' + balance.toLocaleString('id-ID');
    });
}

function addRexCoins(purchaseAmount) {
    const key = userStorageKey('rex_coins_');
    if (!key) return;
    const earnedCoins = Math.round(purchaseAmount * 0.05);
    localStorage.setItem(key, String(getCoinBalance() + earnedCoins));
    updateCokeDisplay();
}

// AI Chat Functions
if (typeof isEnglishAi === 'undefined') {
    var isEnglishAi = false;
}

// Fungsi untuk membuka Modal Chat AI
function openAiChatModal() {
    const modal = document.getElementById('aiChatModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    
    // Render otomatis isi chat awal beserta jam real-time saat modal dibuka
    if (typeof clearAiChat === 'function') {
        clearAiChat();
    }
}

function closeAiChatModal() {
    const modal = document.getElementById('aiChatModal');
    if (modal) modal.classList.add('hidden');
}

function handleAiChatKey(event) {
    if (event.key === 'Enter') {
        sendAiMessage();
    }
}

// Helper fungsi jam real-time (contoh hasil: 15.47)
function getCurrentTimeString() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}.${minutes}`;
}

function clearAiChat() {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    
    // Ambil jam real-time sistem saat ini
    const currentTime = getCurrentTimeString();
    
    const welcomeHtml = (typeof isEnglishAi !== 'undefined' && isEnglishAi) ? `
        <div class="flex flex-col space-y-3">
            <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
                    <img src="../public/images/logo-ai/RexAi-2.png" alt="AI Avatar" class="w-full h-full object-cover">
                </div>
                <div class="flex flex-col space-y-1 max-w-[85%]">
                    <span class="text-[10px] text-cyan-400 font-semibold leading-none">AI RexStore.gg</span>
                    <div class="bg-[#151b28] border border-slate-800/80 px-3.5 py-2.5 rounded-2xl rounded-tl-none leading-snug text-slate-200 whitespace-pre-wrap shadow-sm">Hey! I am AI RexStore.gg, your virtual shopping companion. I can help with promos, VIP info, and support. How can I help you today? 🎮</div>
                </div>
            </div>
            <div class="space-y-2 pt-1">
                <button onclick="sendQuickPrompt('Siapa AI RexStore.gg?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Who is AI RexStore.gg?
                </button>
                <button onclick="sendQuickPrompt('Bagaimana cara isi ulang di RexStore?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    How to top up on RexStore?
                </button>
                <button onclick="sendQuickPrompt('Apa itu poin VIP dan RexCoin?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    What are VIP points and RexCoin?
                </button>
                <button onclick="sendQuickPrompt('Silakan cek pesanan saya')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Please check my order
                </button>
                <button onclick="sendQuickPrompt('Hubungkan dengan CS')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 border-cyan-500/30 rounded-xl text-cyan-400 font-semibold transition cursor-pointer text-xs flex items-center justify-between">
                    <span>🎧 Connect to CS</span>
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
            </div>
            <div id="ai-welcome-time" class="text-[10px] text-slate-500 pt-1">${currentTime}</div>
        </div>
    ` : `
        <div class="flex flex-col space-y-3">
            <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
                    <img src="../public/images/logo-ai/RexAi-2.png" alt="AI Avatar" class="w-full h-full object-cover">
                </div>
                <div class="flex flex-col space-y-1 max-w-[85%]">
                    <span class="text-[10px] text-cyan-400 font-semibold leading-none">AI RexStore.gg</span>
                    <div class="bg-[#151b28] border border-slate-800/80 px-3.5 py-2.5 rounded-2xl rounded-tl-none leading-snug text-slate-200 whitespace-pre-wrap shadow-sm">Hei! Aku AI RexStore.gg, teman belanja virtual kamu. Aku di sini siap bantu promo, info VIP, dan dukungan. Aku masih tahap Beta, jadi yuk ngobrol denganku biar aku bisa 'naik level'! 🎮</div>
                </div>
            </div>
            <div class="space-y-2 pt-1">
                <button onclick="sendQuickPrompt('Siapa AI RexStore.gg?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Siapa AI RexStore.gg?
                </button>
                <button onclick="sendQuickPrompt('Bagaimana cara isi ulang di RexStore?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Bagaimana cara isi ulang di RexStore?
                </button>
                <button onclick="sendQuickPrompt('Apa itu poin VIP dan RexCoin?')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Apa itu poin VIP dan RexCoin?
                </button>
                <button onclick="sendQuickPrompt('Silakan cek pesanan saya')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 rounded-xl text-slate-200 transition font-medium cursor-pointer text-xs">
                    Silakan cek pesanan saya
                </button>
                <button onclick="sendQuickPrompt('Hubungkan dengan CS')" class="w-full text-left bg-[#151b28] hover:bg-[#1f283b] border border-slate-800/80 px-3.5 py-2.5 border-cyan-500/30 rounded-xl text-cyan-400 font-semibold transition cursor-pointer text-xs flex items-center justify-between">
                    <span>🎧 Hubungkan dengan CS</span>
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
            </div>
            <div id="ai-welcome-time" class="text-[10px] text-slate-500 pt-1">${currentTime}</div>
        </div>
    `;
    
    container.innerHTML = welcomeHtml;
    container.scrollTop = 0;
}

function sendQuickPrompt(promptText) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    
    const currentTime = getCurrentTimeString();
    
    // 1. Pesan Pengguna (Gelembung Hijau + Jam Real-Time)
    const userMsgHtml = `
        <div class="flex flex-col items-end space-y-1 pt-2 w-full">
            <div class="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed shadow-sm">
                ${escapeHtml(promptText)}
            </div>
            <span class="text-[10px] text-slate-500 pr-1">${currentTime}</span>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', userMsgHtml);
    container.scrollTop = container.scrollHeight;
    
    // 2. Indikator Loading (...)
    const loadingId = 'ai-typing-' + Date.now();
    const loadingHtml = `
        <div id="${loadingId}" class="flex items-start space-x-2 pt-2">
            <div class="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
                <img src="../public/images/logo-ai/RexAi-2.png" alt="AI Avatar" class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col space-y-1 max-w-[85%]">
                <span class="text-[10px] text-cyan-400 font-semibold leading-none">AI RexStore.gg</span>
                <div class="bg-[#151b28] border border-slate-800/80 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center space-x-1 shadow-sm w-fit">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0s"></span>
                    <span class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                    <span class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', loadingHtml);
    container.scrollTop = container.scrollHeight;
    
    // 3. Balasan AI
    setTimeout(() => {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();
        
        const lower = promptText.toLowerCase();
        let isCsForm = false;
        let reply = '';
        
        if (lower.includes('cs') || lower.includes('hubungkan') || lower.includes('admin') || lower.includes('bantuan')) {
            isCsForm = true;
        } else if (lower.includes('siapa')) {
            reply = typeof isEnglishAi !== 'undefined' && isEnglishAi ?
                "I am AI RexStore.gg, your virtual assistant ready to help with game top-ups, promos, and VIP rewards! 🎮" :
                "Halo! Aku AI RexStore.gg, asisten virtual kamu yang siap membantu info promo, panduan top-up game, info VIP, hingga bantuan transaksi! 🎮";
        } else if (lower.includes('isi ulang') || lower.includes('top up') || lower.includes('topup') || lower.includes('cara order')) {
            reply = typeof isEnglishAi !== 'undefined' && isEnglishAi ?
                "To top up at RexStore.gg:\n1. Select your favorite game on the homepage.\n2. Input your User ID & Zone ID.\n3. Choose item denomination & payment method.\n4. Click 'Buy Now' and complete payment. Item goes directly to your account! ⚡" :
                "Cara isi ulang di RexStore.gg:\n1. Pilih game favorit kamu di halaman utama.\n2. Masukkan User ID & Zone ID akun game kamu.\n3. Pilih nominal item & metode pembayaran.\n4. Klik 'Beli Sekarang' lalu selesaikan pembayaran. Item otomatis masuk! ⚡";
        } else if (lower.includes('vip') || lower.includes('rexcoin') || lower.includes('koin') || lower.includes('poin')) {
            reply = typeof isEnglishAi !== 'undefined' && isEnglishAi ?
                "• VIP Points: Earned from every order to upgrade your VIP level for special discounts!\n• RexCoin: Automatic cashback balance to get instant price cuts on your next top-up! 💎" :
                "Penjelasannya:\n• Poin VIP: Mengakumulasikan total transaksi kamu untuk menaikkan Level VIP dan membuka diskon khusus!\n• RexCoin: Saldo cashback otomatis setiap kali transaksi sukses untuk dipakai sebagai potongan harga belanja berikutnya! 💎";
        } else if (lower.includes('pesanan') || lower.includes('cek') || lower.includes('status')) {
            reply = typeof isEnglishAi !== 'undefined' && isEnglishAi ?
                "You can check your order status in the Account Center under Transaction History! 🔍" :
                "Untuk mengecek status pesanan kamu, silakan buka menu Pusat Akun lalu lihat pada bagian Tabel Riwayat Transaksi 😊";
        } else {
            reply = typeof isEnglishAi !== 'undefined' && isEnglishAi ?
                "Please select an option or ask a question." :
                "Halo 😊 Ada yang bisa kami bantu seputar pesanan, panduan isi ulang, atau info VIP di RexStore.gg?";
        }
        
        let contentHtml = '';
        
        if (isCsForm) {
            contentHtml = `
                <div class="space-y-3 w-full">
                    <p class="font-semibold text-slate-200 text-xs sm:text-sm leading-snug">Silakan isi data untuk terhubung dengan CS.📩</p>
                    
                    <form onsubmit="submitCsForm(event)" class="space-y-2.5 sm:space-y-3 pt-1 w-full">
                        <div>
                            <label class="block text-[11px] sm:text-xs font-bold text-slate-300 mb-1">Nama <span class="text-red-500">*</span></label>
                            <input type="text" id="csName" required placeholder="Masukkan nama Anda" class="w-full bg-[#0d111a] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition">
                        </div>
                        <div>
                            <label class="block text-[11px] sm:text-xs font-bold text-slate-300 mb-1">ID Pesanan <span class="text-red-500">*</span></label>
                            <input type="text" id="csOrderId" required placeholder="Contoh: REX-102938" class="w-full bg-[#0d111a] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition">
                        </div>
                        <div>
                            <label class="block text-[11px] sm:text-xs font-bold text-slate-300 mb-1">Alamat Email <span class="text-red-500">*</span></label>
                            <input type="email" id="csEmail" required placeholder="Isikan alamat email Anda" class="w-full bg-[#0d111a] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition">
                        </div>
                        
                        <button type="submit" class="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-2.5 sm:py-3 rounded-xl transition shadow-md text-xs sm:text-sm cursor-pointer active:scale-[0.98]">
                            Selesai
                        </button>
                    </form>
                </div>
            `;
        } else {
            contentHtml = reply.trim();
        }
        
        const replyTime = getCurrentTimeString();
        
        // Template balasan AI + Jam Real-Time
        const replyHtml = `
            <div class="flex flex-col items-start space-y-1 pt-2 w-full">
                <div class="flex items-start space-x-2 w-full">
                    <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
                        <img src="../public/images/logo-ai/RexAi-2.png" alt="AI Avatar" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col space-y-1 flex-1 min-w-0">
                        <span class="text-[10px] sm:text-xs text-cyan-400 font-semibold leading-none">AI RexStore.gg</span>
                        <div class="bg-[#151b28] border border-slate-800/80 p-3 sm:p-4 rounded-2xl rounded-tl-none leading-relaxed text-slate-200 shadow-sm w-full">${contentHtml}</div>
                    </div>
                </div>
                <span class="text-[10px] text-slate-500 pl-9 sm:pl-10">${replyTime}</span>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', replyHtml);
        container.scrollTop = container.scrollHeight;
    }, 900);
}

// 4. Fungsi Kirim Data CS ke WhatsApp/Admin
function submitCsForm(event) {
    event.preventDefault();
    const name = document.getElementById('csName')?.value.trim();
    const orderId = document.getElementById('csOrderId')?.value.trim();
    const email = document.getElementById('csEmail')?.value.trim();
    
    if (!name || !orderId || !email) return;
    
    // Simpan tiket (format yang dibaca admin.html)
    let tickets = [];
    try { tickets = JSON.parse(localStorage.getItem('rexstore_cs_tickets') || '[]'); } catch (e) { tickets = []; }
    tickets.unshift({ time: new Date().toLocaleString('id-ID'), name, orderId, email, status: 'Pending' });
    localStorage.setItem('rexstore_cs_tickets', JSON.stringify(tickets));
    showToast('Tiket CS dibuat, mengarahkan ke WhatsApp...');
    
    const adminPhone = "6281234567890"; // Ganti nomor WhatsApp CS RexStore
    const message = `Halo CS RexStore.gg, saya butuh bantuan terkait pesanan:%0A- *Nama*: ${encodeURIComponent(name)}%0A- *ID Pesanan*: ${encodeURIComponent(orderId)}%0A- *Email*: ${encodeURIComponent(email)}`;
    
    window.open(`https://wa.me/${adminPhone}?text=${message}`, '_blank');
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// 1. Toggle Buka / Tutup Dropdown Menu Pengaturan
function toggleAiSettings() {
    const dropdown = document.getElementById('aiSettingsDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// 2. Fungsi Ubah Bahasa (Switch to EN / Switch to ID)
function changeAiLanguage() {
    isEnglishAi = !isEnglishAi;
    
    // Update Teks Tombol di Dropdown
    const langBtnText = document.getElementById('aiLangBtnText');
    if (langBtnText) {
        langBtnText.textContent = isEnglishAi ? 'Switch to ID (Indonesia)' : 'Switch to EN (English)';
    }
    
    // Sembunyikan dropdown
    toggleAiSettings();
    
    // Reset dan tampilkan obrolan dengan bahasa baru
    clearAiChat();
}

// 3. Fungsi Hapus Percakapan
function handleClearAiChat() {
    toggleAiSettings();
    if (typeof clearAiChat === 'function') {
        clearAiChat();
    }
}

// 4. Tutup dropdown otomatis jika klik di luar menu
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('aiSettingsDropdown');
    const gearBtn = event.target.closest('button[onclick="toggleAiSettings()"]');
    
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(event.target) && !gearBtn) {
        dropdown.classList.add('hidden');
    }
});

/**
 * Helper Fungsi Ikon Produk Dinamis Sesuai Tingkatan Nominal
 */
function getItemIcon(amount = 0, itemType = 'diamonds', gameCode = 'mlbb') {
    const type = String(itemType).toLowerCase().trim();
    const game = String(gameCode).toLowerCase().trim();
    const count = parseInt(amount) || 0;
    
    // 1. MAPPING NAMA FOLDER GAME
    let gameFolder = 'Mobile-Legends';
    let prefix = 'mlbb';
    let defaultImg = 'diamond.png';
    
    if (game === 'ff' || game.includes('free')) {
        gameFolder = 'Free-Fire';
        prefix = 'ff';
        defaultImg = 'diamond.png';
    } else if (game === 'pubgm' || game.includes('pubg')) {
        gameFolder = 'Pubg-Mobile';
        prefix = 'pubgm';
        defaultImg = 'uc.png';
    }
    
    // BASE PATH FOLDER
    const basePath = `../public/images/logo-item-game/${gameFolder}`;
    
    // 2. KATEGORI PASS / MEMBERSHIP KHUSUS
    if (type.includes('weekly') || type === 'bonus') {
        return `${basePath}/${prefix}-weekly-pass.png`;
    }
    if (type.includes('starlight') || type === 'elite') {
        return `${basePath}/${prefix}-starlight.png`;
    }
    if (type.includes('twilight')) {
        return `${basePath}/${prefix}-twilight.png`;
    }
    if (type.includes('membership') || type.includes('pass') || type.includes('season')) {
        return `${basePath}/${prefix}-pass.png`;
    }
    
    // 3. TINGKATAN ICON DIAMOND BERDASARKAN JUMLAH NOMINAL (BERTARAP)
    if (count >= 2000) {
        return `${basePath}/${prefix}-chest.png`; // Peti besar untuk nominal 2000+ diamond
    } else if (count >= 1000) {
        return `${basePath}/${prefix}-pouch.png`; // Kantong / Pouch untuk 1000+ diamond
    } else if (count >= 500) {
        return `${basePath}/${prefix}-stack.png`; // Tumpukan diamond untuk 500+ diamond
    } else if (count >= 100) {
        return `${basePath}/${prefix}-medium.png`; // Kumpulan medium untuk 100+ diamond
    } else {
        return `${basePath}/${defaultImg}`; // Diamond satuan untuk nominal kecil (< 100)
    }
}
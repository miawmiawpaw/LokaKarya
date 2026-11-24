# Sitemap LokaKarya

## Status Proyek

LokaKarya saat ini merupakan project **frontend-only** untuk kebutuhan praktikum.

- Tidak menggunakan backend.
- Tidak menggunakan database.
- Tidak memproses checkout atau pembayaran.
- Tidak memiliki keranjang belanja atau sistem transaksi internal.
- Data produk, harga, lokasi, jam operasional, dan kontak bersifat simulasi.
- Form setor sampah hanya melakukan simulasi validasi dan konfirmasi frontend.

## Sitemap Aktual — Phase 1

```text
LokaKarya
└── Landing Page (`index.html`)
    ├── Header & Navigation
    │   ├── Logo LokaKarya → `#beranda`
    │   ├── Beranda → `#beranda`
    │   ├── Katalog Produk → `#katalog-produk`
    │   ├── Lokasi Bank Sampah → `#lokasi-bank-sampah`
    │   ├── Setor Sampah → `#form-setor`
    │   ├── Kontak → `#kontak`
    │   └── CTA Setor Sampah → `#form-setor`
    │
    ├── Beranda (`#beranda`)
    │   ├── Label ekonomi sirkular lokal
    │   ├── Headline utama
    │   ├── Deskripsi platform
    │   ├── CTA Jelajahi Produk → `#katalog-produk`
    │   ├── CTA Cari Bank Sampah → `#lokasi-bank-sampah`
    │   ├── Label data simulasi
    │   └── Ilustrasi tote bag, botol, tanaman, dan daun
    │
    ├── Manfaat LokaKarya (`#manfaat`)
    │   ├── Produk UMKM Penuh Cerita
    │   ├── Bank Sampah Lebih Dekat
    │   └── Dukung Usaha Lokal
    │
    ├── Katalog Produk (`#katalog-produk`)
    │   ├── Judul dan deskripsi katalog
    │   ├── Filter Semua
    │   ├── Filter Plastik
    │   ├── Filter Kertas/Kardus
    │   ├── Filter Tekstil/Kain
    │   ├── Grid 8 kartu produk simulasi
    │   │   ├── Gambar produk
    │   │   ├── Badge kategori
    │   │   ├── Nama produk
    │   │   ├── Bahan
    │   │   ├── Harga simulasi
    │   │   ├── Beli via WhatsApp → kanal eksternal simulasi
    │   │   └── Lihat di Marketplace → kanal eksternal simulasi
    │   └── Empty state saat filter tidak menemukan produk
    │
    ├── Lokasi Bank Sampah (`#lokasi-bank-sampah`)
    │   ├── Judul dan jumlah hasil
    │   ├── Pencarian nama atau alamat
    │   ├── Filter jenis sampah
    │   ├── Daftar 4 lokasi simulasi
    │   │   ├── Nama lokasi
    │   │   ├── Alamat simulasi
    │   │   ├── Jam operasional simulasi
    │   │   ├── Jenis sampah yang diterima
    │   │   └── Buka Google Maps → pencarian eksternal simulasi
    │   ├── Peta ilustratif
    │   ├── Marker lokasi aktif
    │   └── Empty state saat pencarian/filter tidak menemukan lokasi
    │
    ├── Form Setor Sampah (`#form-setor`)
    │   ├── Judul dan keterangan simulasi
    │   ├── Nama lengkap
    │   ├── Nomor WhatsApp
    │   ├── Jenis sampah
    │   ├── Tanggal penyetoran
    │   ├── Lokasi tujuan
    │   ├── Catatan opsional
    │   ├── Metode penyetoran
    │   │   ├── Antar sendiri
    │   │   └── Minta dijemput
    │   ├── Validasi frontend
    │   │   ├── Field wajib tidak boleh kosong
    │   │   ├── Nomor WhatsApp harus valid
    │   │   └── Tanggal tidak boleh lewat
    │   ├── Kirim Pendaftaran
    │   ├── Success state pengajuan simulasi
    │   └── Panel manfaat dan panduan sebelum setor
    │
    └── Footer (`#kontak`)
        ├── Tentang LokaKarya
        ├── Tautan Katalog Produk → `#katalog-produk`
        ├── Tautan Lokasi Bank Sampah → `#lokasi-bank-sampah`
        ├── Tautan Setor Sampah → `#form-setor`
        ├── Email simulasi
        ├── WhatsApp simulasi
        ├── Media sosial simulasi
        ├── Hak cipta
        └── Label data simulasi untuk praktikum
```

## Struktur Teknis

```text
LokaKarya
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js
│   │   └── main.js
│   └── img/
│       ├── hero/
│       ├── icons/
│       ├── logo/
│       └── products/
├── docs/
│   └── sitemap.md
└── README.md
```

### Alur Data Frontend

```text
assets/js/data.js
    ├── meta
    ├── categories
    ├── benefits
    ├── products
    └── dropPoints
            ↓
assets/js/main.js
    ├── render benefits
    ├── render products
    ├── filter products
    ├── search/filter locations
    ├── update active marker
    └── validate deposit form
            ↓
index.html
    ├── DOM sections
    └── user interaction
```

## Navigasi Eksternal

Landing page tidak memproses transaksi internal. Aksi berikut hanya membuka layanan eksternal atau simulasi:

| Aksi | Tujuan | Status |
|---|---|---|
| Beli via WhatsApp | Kanal WhatsApp UMKM simulasi | Eksternal |
| Lihat di Marketplace | Hasil pencarian marketplace simulasi | Eksternal |
| Buka Google Maps | Hasil pencarian lokasi simulasi | Eksternal |
| Email | Aplikasi email pengguna | Eksternal |

## Sitemap Rencana Fase Berikutnya

Bagian ini adalah rencana informasi, bukan halaman yang sudah tersedia.

```text
LokaKarya — Rencana Produk
├── Landing Page
├── Katalog Produk
│   ├── Daftar produk
│   ├── Filter dan pencarian
│   └── Detail Produk
├── Direktori Bank Sampah
│   ├── Daftar lokasi
│   ├── Filter material
│   ├── Detail lokasi
│   └── Peta interaktif
├── Form Setor Sampah
│   └── Status pengajuan
├── Autentikasi
│   ├── Login
│   └── Registrasi
├── Area Pengguna
│   ├── Profil
│   ├── Riwayat pengajuan
│   └── Status pengajuan
├── Area UMKM
│   └── Manajemen produk
└── Area Admin
    ├── Manajemen produk
    ├── Manajemen lokasi
    └── Manajemen pengajuan
```

Fase berikutnya **tidak otomatis berarti** checkout, pembayaran, atau transaksi internal akan dibuat. Fitur tersebut membutuhkan keputusan produk, backend, database, keamanan, dan aturan bisnis terpisah.

## Halaman dan Fitur yang Belum Tersedia

- Halaman katalog produk terpisah.
- Halaman detail produk.
- Halaman direktori bank sampah terpisah.
- Halaman login dan registrasi.
- Dashboard UMKM.
- Dashboard admin.
- Checkout dan pembayaran.
- Keranjang belanja.
- Riwayat transaksi.
- Backend dan database.
- Sistem reward atau poin.
- Pelacakan penjemputan real-time.

Dokumen ini diperbarui sebagai peta informasi project. Penambahan halaman atau fitur harus mengikuti scope yang disepakati terlebih dahulu.

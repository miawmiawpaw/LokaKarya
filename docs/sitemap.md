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
    │   ├── Label "Langkah kecil, dampak besar"
    │   ├── Headline utama
    │   ├── Deskripsi platform
    │   ├── CTA Jelajahi Produk → `#katalog-produk`
    │   ├── CTA Cari Bank Sampah → `#lokasi-bank-sampah`
    │   ├── Label data simulasi
    │   └── Carousel 4 produk pilihan (ganti otomatis tiap 4 detik)
    │       ├── Foto, kategori, nama, dan harga produk
    │       ├── Lihat di katalog → `#katalog-produk` (tersaring ke kategori produk)
    │       └── Kontrol: panah dan titik indikator
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
    │   ├── Grid kartu produk simulasi (8 produk, tampil 4 per muatan)
    │   │   ├── Gambar produk
    │   │   ├── Badge kategori
    │   │   ├── Nama produk
    │   │   ├── Bahan
    │   │   ├── Harga simulasi
    │   │   ├── Beli via WhatsApp → kanal eksternal simulasi
    │   │   └── Lihat di Marketplace → kanal eksternal simulasi
    │   ├── Muat Lebih Banyak
    │   └── Empty state + tombol tampilkan semua produk
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
    │   ├── Peta skematik dengan pin bernomor
    │   ├── Kartu ↔ pin aktif saling sinkron
    │   ├── Pesan cadangan bila peta gagal dimuat
    │   └── Empty state + tombol hapus pencarian & filter
    │
    ├── Form Setor Sampah (`#form-setor`)
    │   ├── Judul dan keterangan simulasi
    │   ├── Nama lengkap
    │   ├── Nomor WhatsApp
    │   ├── Jenis sampah
    │   ├── Tanggal penyetoran
    │   ├── Lokasi tujuan (hanya lokasi yang menerima jenis sampah terpilih)
    │   ├── Catatan opsional
    │   ├── Metode penyetoran (radio)
    │   │   ├── Antar sendiri
    │   │   └── Minta dijemput
    │   ├── Validasi frontend (pesan error di bawah tiap kolom)
    │   │   ├── Field wajib tidak boleh kosong
    │   │   ├── Nomor WhatsApp harus valid (spasi/tanda hubung dibersihkan otomatis)
    │   │   └── Tanggal tidak boleh lewat (zona waktu lokal)
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

LokaKarya
└── Detail Produk (`produk.html?id=<id produk>`, mis. `produk.html?id=prod-1`)
    ├── Dibuka dari: nama/foto kartu produk di katalog landing page
    ├── Header (menu Katalog Produk aktif, tautan → `index.html#...`)
    ├── Breadcrumb: Beranda / Katalog Produk / <nama produk>
    ├── Foto produk
    ├── Kategori, nama, harga, deskripsi
    ├── Bahan, asal material ("Informasi belum tersedia" bila kosong), penjual
    ├── Beli via WhatsApp → kanal eksternal simulasi
    ├── Lihat di Marketplace → kanal eksternal simulasi
    ├── Produk Lainnya (4 produk, kategori yang sama didahulukan)
    ├── Pesan "Produk tidak ditemukan" bila id salah/kosong
    └── Footer
```

## Struktur Teknis

```text
LokaKarya
├── index.html
├── produk.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js
│   │   ├── main.js
│   │   └── produk.js
│   └── img/
│       ├── hero/
│       ├── icons/
│       ├── logo/
│       └── products/
├── docs/
│   ├── sitemap.md
│   └── *.png (screenshot UI & design system)
└── README.md
```

### Alur Data Frontend

```text
assets/js/data.js
    ├── meta
    ├── heroProductIds
    ├── categories
    ├── benefits
    ├── products
    └── dropPoints
            ↓
assets/js/main.js
    ├── render hero carousel
    ├── render benefits
    ├── render & filter products (+ muat lebih banyak)
    ├── search/filter locations
    ├── sync active card ↔ map pin
    ├── filter destination by waste type
    ├── validate deposit form
    └── mark active nav section
            ↓
index.html
    ├── DOM sections
    └── user interaction

assets/js/data.js (products)
            ↓
assets/js/produk.js
    ├── baca ?id= dari alamat
    ├── cari produk di data.js
    ├── isi detail produk
    ├── pilih & tampilkan produk lainnya
    └── tampilkan "Produk tidak ditemukan" bila id salah
            ↓
produk.html
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

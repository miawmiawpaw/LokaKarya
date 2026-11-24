# LokaKarya

Landing page LokaKarya merupakan platform ekonomi sirkular yang memperkenalkan produk kerajinan hasil daur ulang dari UMKM lokal dan membantu pengguna menemukan bank sampah terdekat. Website ini dirancang untuk meningkatkan kesadaran masyarakat terhadap pengelolaan sampah sekaligus mendukung perkembangan UMKM melalui pemanfaatan bahan daur ulang.

## Tentang Proyek

LokaKarya menggabungkan dua kebutuhan dalam satu pengalaman:

- **E-Commerce Showroom:** Katalog produk daur ulang UMKM dengan informasi bahan, harga simulasi, dan tautan pembelian eksternal.
- **Direktori Bank Sampah:** Preview lokasi penyetoran dengan pencarian, filter jenis sampah, alamat, jam operasional, marker peta, dan tautan Google Maps simulasi.

Proyek ini mendukung tujuan Sustainable Development Goals (SDGs), yaitu:

- **SDG 8 – Decent Work and Economic Growth:** Mendukung perkembangan UMKM lokal melalui pengenalan dan promosi produk kerajinan daur ulang.
- **SDG 12 – Responsible Consumption and Production:** Mendorong konsumsi dan produksi yang bertanggung jawab melalui pemanfaatan kembali bahan bekas.

Landing page ini merupakan implementasi Phase 1. Semua produk, harga, alamat, jam operasional, kontak, dan tautan merupakan data simulasi untuk keperluan praktikum.

## Tujuan Proyek

1. Memperkenalkan produk kerajinan berbahan daur ulang dari UMKM lokal kepada masyarakat.
2. Membantu pengguna memperoleh informasi mengenai bank sampah dan lokasi penyetoran sampah.
3. Meningkatkan kesadaran masyarakat mengenai pentingnya pengelolaan dan pemanfaatan kembali sampah.
4. Mendukung ekonomi sirkular dengan menghubungkan kegiatan daur ulang dan peluang ekonomi UMKM lokal.

## Kelebihan Website

Beberapa kelebihan yang ditawarkan oleh LokaKarya antara lain:

1. **Menggabungkan Dua Layanan dalam Satu Platform**

   Pengguna dapat mengenal produk kerajinan hasil daur ulang sekaligus mencari informasi bank sampah tanpa harus mengakses website yang berbeda.

2. **Mempermudah Pencarian Bank Sampah**

   Fitur pencarian dan filter membantu pengguna menemukan lokasi bank sampah berdasarkan jenis material yang ingin disetorkan.

3. **Mendukung Promosi UMKM Lokal**

   Katalog produk memberikan ruang bagi UMKM untuk memperkenalkan hasil kerajinan daur ulang kepada calon konsumen.

4. **Tampilan Responsif dan Mudah Digunakan**

   Website dirancang dengan tata letak responsif sehingga dapat diakses melalui berbagai ukuran layar, baik desktop maupun perangkat mobile.

5. **Meningkatkan Kesadaran Lingkungan**

   Website memberikan informasi dan alternatif bagi masyarakat untuk menerapkan kebiasaan konsumsi yang lebih bertanggung jawab serta mengurangi limbah.

6. **Informasi yang Terorganisasi**

   Informasi produk, lokasi bank sampah, dan formulir penyetoran disajikan dalam satu landing page dengan navigasi yang terstruktur.

## Analisis 5W1H

### 1. What (Apa)

LokaKarya merupakan website berbasis landing page yang menggabungkan katalog produk kerajinan hasil daur ulang UMKM lokal dengan direktori bank sampah. Website ini menyediakan informasi produk, bahan yang digunakan, harga simulasi, lokasi bank sampah, serta formulir pengajuan penyetoran sampah.

### 2. Who (Siapa)

Website ini ditujukan untuk:

- Masyarakat yang ingin membeli atau mengenal produk kerajinan hasil daur ulang.
- Konsumen yang memiliki ketertarikan terhadap produk ramah lingkungan.
- UMKM lokal yang menghasilkan produk dari bahan daur ulang.
- Masyarakat yang ingin mencari informasi mengenai bank sampah dan tempat penyetoran sampah.

### 3. When (Kapan)

Website ini dapat digunakan ketika masyarakat ingin mencari produk kerajinan daur ulang, memperoleh informasi bank sampah, atau mengajukan penyetoran sampah. Pengembangan proyek dilakukan secara bertahap, dimulai dari perancangan hingga implementasi Phase 1.

### 4. Where (Di mana)

LokaKarya dirancang sebagai website yang dapat diakses melalui browser pada perangkat desktop maupun mobile. Informasi bank sampah ditampilkan berdasarkan data lokasi yang tersedia pada website. Pada tahap ini, lokasi yang ditampilkan masih menggunakan data simulasi.

### 5. Why (Mengapa)

Website ini dikembangkan karena informasi mengenai produk kerajinan daur ulang dan lokasi bank sampah perlu disajikan secara lebih terorganisasi dan mudah diakses. Selain itu, masih diperlukan upaya untuk memperkenalkan potensi produk daur ulang UMKM lokal serta meningkatkan kesadaran masyarakat mengenai pengelolaan sampah dan ekonomi sirkular.

### 6. How (Bagaimana)

LokaKarya dikembangkan menggunakan HTML5, CSS3, Bootstrap 5, dan Vanilla JavaScript. Website menggabungkan katalog produk, fitur pencarian dan filter bank sampah, tampilan lokasi melalui marker peta, serta formulir penyetoran sampah. Pengguna dapat menjelajahi informasi yang tersedia melalui navigasi landing page dan menggunakan fitur interaktif yang disediakan.

## Teknologi

- HTML5 Semantic
- CSS3 dengan custom properties dan responsive layout
- Bootstrap 5 CDN untuk grid dan navbar
- Vanilla JavaScript untuk rendering data dan interaksi
- Figma-exported SVG/JPG assets

## Fitur

- Header floating responsive dengan ikon menu, penanda section aktif, dan menu hamburger di mobile.
- Hero dengan carousel 4 produk daur ulang pilihan yang berganti otomatis (berhenti saat disorot kursor, bisa digeser, dan dikendalikan dengan panah/titik).
- Benefit cards.
- Katalog 8 produk simulasi dengan filter kategori dan tombol Muat Lebih Banyak.
- Direktori 4 bank sampah simulasi dengan pencarian, filter material, kartu dan pin peta yang saling sinkron, serta link Google Maps.
- Form setor sampah simulasi dengan validasi nama, WhatsApp, jenis sampah, tanggal, lokasi, dan metode setor; lokasi tujuan menyesuaikan jenis sampah.
- Success state form yang membedakan pengajuan simulasi dari konfirmasi jadwal.
- Footer kontak, media sosial, dan label data simulasi.

## Sitemap

Sitemap lengkap (termasuk struktur teknis, alur data, dan rencana fase berikutnya): [docs/sitemap.md](docs/sitemap.md)

Ringkasan halaman Phase 1 (satu halaman, navigasi via anchor):

```text
LokaKarya — index.html
├── Header & Navigasi
│   ├── Beranda → #beranda
│   ├── Katalog Produk → #katalog-produk
│   ├── Lokasi Bank Sampah → #lokasi-bank-sampah
│   ├── Setor Sampah → #form-setor
│   └── Kontak → #kontak
├── Beranda (#beranda)
│   ├── Headline, deskripsi, CTA Jelajahi Produk & Cari Bank Sampah
│   └── Carousel 4 produk pilihan
├── Manfaat LokaKarya (#manfaat)
├── Katalog Produk (#katalog-produk)
│   ├── Filter: Semua, Plastik, Kertas/Kardus, Tekstil/Kain
│   ├── Kartu produk → Beli via WhatsApp / Lihat di Marketplace
│   └── Muat Lebih Banyak
├── Lokasi Bank Sampah (#lokasi-bank-sampah)
│   ├── Pencarian & filter jenis sampah
│   ├── Daftar lokasi → Google Maps
│   └── Peta skematik dengan pin
├── Form Setor Sampah (#form-setor)
│   ├── Formulir pendaftaran (simulasi)
│   └── Panel Manfaat Setor Sampah
└── Footer / Kontak (#kontak)
```

## Design Reference

- [Figma Mockup](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-163)
- [Figma Wireframe](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-164)

## Menjalankan Proyek

1. Clone repository:

   ```bash
   git clone https://github.com/miawmiawpaw/LokaKarya.git
   cd LokaKarya
   ```

2. Buka folder project menggunakan Visual Studio Code.
3. Jalankan file `index.html` menggunakan ekstensi Live Server.

Bootstrap dan Google Fonts dimuat melalui CDN sehingga koneksi internet diperlukan untuk tampilan penuh.

## Struktur File

- `index.html` — markup landing page.
- `assets/css/style.css` — design tokens, layout, komponen, dan responsive rules.
- `assets/js/data.js` — data produk, manfaat, lokasi, dan konfigurasi kontak.
- `assets/js/main.js` — rendering dan interaksi Vanilla JavaScript.
- `assets/img/` — aset visual lokal hasil ekspor Figma.

## Batasan Phase 1

Belum tersedia backend, database, autentikasi, checkout, pembayaran, halaman katalog terpisah, halaman detail produk, atau direktori terpisah. Form setor sampah hanya merupakan simulasi frontend.

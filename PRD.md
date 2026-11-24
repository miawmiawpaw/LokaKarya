# Product Requirements Document (PRD)

## LokaKarya — Platform Produk Daur Ulang & Direktori Bank Sampah

| Informasi | Detail |
|---|---|
| Produk | LokaKarya / LokaKarya.id |
| Jenis produk | Website e-commerce showroom dan direktori pengelolaan daur ulang |
| Versi dokumen | 1.0 |
| Tanggal | 17 November 2026 |
| Status | Baseline kebutuhan untuk praktikum dan pengembangan MVP |
| Referensi desain | [Wireframe](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-164) · [Mockup](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-163) |

---

## 1. Ringkasan Produk

LokaKarya adalah platform digital yang menghubungkan konsumen dengan produk kerajinan hasil daur ulang dari UMKM lokal sekaligus membantu masyarakat menemukan lokasi bank sampah atau titik penyetoran material daur ulang.

Website menggabungkan dua fungsi utama:

1. **E-Commerce Showroom:** menampilkan katalog produk UMKM, informasi bahan daur ulang, harga, dan tautan pembelian langsung melalui WhatsApp atau marketplace milik pengrajin.
2. **Direktori Bank Sampah:** menyediakan daftar dan peta lokasi penyetoran sampah yang memuat alamat, jarak (bila tersedia), jam operasional, dan jenis sampah yang diterima.

LokaKarya mendukung tema **SDG 8 — Decent Work and Economic Growth** melalui peningkatan visibilitas produk UMKM lokal, serta **SDG 12 — Responsible Consumption and Production** melalui edukasi konsumsi bertanggung jawab dan pengelolaan material daur ulang.

> **Catatan data:** Seluruh katalog produk, harga, lokasi, jarak, statistik dampak, dan informasi operasional pada versi praktikum merupakan data simulasi. Data tersebut tidak boleh ditampilkan seolah-olah merupakan informasi operasional yang sudah diverifikasi.

## 2. Latar Belakang dan Masalah

### 2.1 Masalah yang ingin diselesaikan

- UMKM yang membuat produk dari bahan daur ulang memiliki keterbatasan akses terhadap etalase digital yang dapat menjangkau konsumen lebih luas.
- Masyarakat kesulitan menemukan informasi terpusat tentang lokasi bank sampah atau titik penyetoran material yang dapat didaur ulang.
- Konsumen membutuhkan informasi yang lebih jelas tentang bahan daur ulang yang digunakan pada suatu produk sebelum memutuskan untuk membeli.
- Warga membutuhkan cara sederhana untuk mencatat rencana penyetoran atau penjemputan sampah.

### 2.2 Peluang produk

LokaKarya menyatukan sisi hilir dan hulu ekonomi sirkular dalam satu pengalaman: masyarakat dapat membeli hasil olahan daur ulang, menemukan tempat menyetorkan material, dan memahami hubungan antara keduanya.

## 3. Visi, Tujuan, dan Indikator Keberhasilan

### 3.1 Visi

Menjadi ruang digital yang mempertemukan karya UMKM daur ulang dengan konsumen serta memudahkan masyarakat berpartisipasi dalam pengelolaan sampah.

### 3.2 Tujuan produk

- Mempermudah pengguna menemukan dan menjelajahi produk kerajinan daur ulang UMKM lokal.
- Menampilkan bahan daur ulang yang digunakan pada produk sebagai bentuk transparansi.
- Mempermudah pengguna mencari bank sampah berdasarkan nama, jenis material, atau lokasi.
- Menyediakan formulir untuk mendaftarkan rencana penyetoran atau penjemputan sampah.
- Mengedukasi pengguna mengenai pemilahan dan penanganan sampah sebelum disetorkan.

### 3.3 Indikator keberhasilan MVP

Indikator berikut merupakan target evaluasi praktikum, bukan klaim performa produk yang sudah berjalan.

- Pengguna dapat mencapai katalog produk dari navigasi utama atau CTA beranda.
- Filter kategori menampilkan produk sesuai kategori yang dipilih.
- Pengguna dapat membuka tautan WhatsApp atau marketplace pada produk yang memiliki tautan.
- Pengguna dapat mencari dan memfilter lokasi, membaca detail ringkas lokasi, serta membuka petunjuk arah.
- Pengguna dapat melengkapi formulir setor sampah dan memperoleh status bahwa pengajuan simulasi berhasil diterima.
- Seluruh halaman inti dapat digunakan pada lebar layar 360–390 px dan desktop 1366 px.
- Tidak ada kontrol utama yang hanya dapat digunakan dengan mouse; navigasi keyboard dan focus state tersedia.

## 4. Target Pengguna dan Peran

### 4.1 Segmen pengguna

| Segmen | Kebutuhan utama | Nilai yang diberikan LokaKarya |
|---|---|---|
| Konsumen ramah lingkungan | Menemukan produk yang menarik dan mengetahui materialnya | Katalog produk, informasi bahan, dan tautan pembelian |
| Warga perkotaan | Menemukan tempat setor sampah yang mudah dijangkau | Direktori, pencarian, filter, peta, dan tautan Google Maps |
| Komunitas lingkungan | Membagikan rujukan lokasi dan mengedukasi anggota | Informasi lokasi dan panduan pemilahan |
| UMKM daur ulang | Memperoleh eksposur produk | Etalase digital dan tautan ke kanal penjualan UMKM |

### 4.2 Peran di dalam sistem

- **Pengunjung (Guest):** dapat melihat beranda, katalog, detail produk, dan direktori lokasi. Harus masuk sebelum menggunakan fitur setor sampah apabila aturan autentikasi diterapkan.
- **Pengguna terdaftar:** dapat mengisi dan mengirim formulir setor sampah. Dalam MVP praktikum, akun dapat menggunakan autentikasi simulasi apabila backend autentikasi belum tersedia.
- **UMKM/Penjual:** menjadi pihak yang direpresentasikan melalui data produk dan tautan eksternal. Dashboard pengelolaan produk untuk penjual tidak termasuk MVP.
- **Admin/Pengelola:** mengelola data produk dan lokasi melalui sumber data proyek atau proses seed/manual. Dashboard admin belum termasuk cakupan MVP.

## 5. Ruang Lingkup Produk

### 5.1 Cakupan MVP

1. Landing page dengan hero, pengenalan manfaat LokaKarya, CTA katalog dan direktori, serta informasi dampak yang diberi label simulasi bila memakai angka contoh.
2. Login dan registrasi sesuai mockup.
3. Katalog produk dengan filter kategori, kartu produk, tombol WhatsApp/marketplace, dan aksi muat lebih banyak atau pagination sederhana.
4. Tampilan detail produk yang mengikuti struktur wireframe.
5. Direktori bank sampah dengan pencarian, filter jenis sampah, daftar lokasi, peta, dan tautan Google Maps.
6. Form setor sampah dengan validasi input dan status pengiriman simulasi.
7. Footer berisi informasi platform, tautan navigasi, kontak, media sosial, hak cipta, dan pemberitahuan data simulasi.
8. Layout responsif dan aksesibilitas dasar.

### 5.2 Di luar cakupan MVP

- Pembayaran online, keranjang belanja, checkout, dan pengiriman produk.
- Sistem transaksi atau komisi antara konsumen dan UMKM.
- Dashboard penjual untuk menambah, mengubah, atau menghapus produk.
- Dashboard admin untuk mengelola bank sampah, pengguna, atau pengajuan.
- Pelacakan penjemputan secara real-time dan penugasan kurir.
- Verifikasi identitas bank sampah atau sertifikasi produk.
- Perhitungan dampak lingkungan secara otomatis dan berbasis data aktual.
- Integrasi reward/poin yang dapat ditukar dengan manfaat nyata.

### 5.3 Fitur yang perlu keputusan lanjutan

Brief awal menyebut tiket setoran dan poin, tetapi mockup formulir saat ini hanya menyampaikan bahwa pengelola akan menghubungi pengguna melalui WhatsApp untuk konfirmasi jadwal dan ketersediaan penjemputan. Karena aturan poin, format tiket, dan tampilan pasca-pengajuan belum ditentukan, fitur reward/tiket ditempatkan sebagai **pengembangan lanjutan** dan tidak menjadi syarat MVP.

## 6. Struktur Informasi dan Halaman

| Halaman/area | Isi utama | Aksi pengguna |
|---|---|---|
| Beranda | Header, hero, CTA ganda, ringkasan manfaat/dampak, cuplikan produk/lokasi, footer | Jelajahi produk, cari bank sampah, daftar/masuk |
| Login | Email, kata sandi, ingat saya, lupa kata sandi, opsi Google (bila diintegrasikan) | Masuk atau berpindah ke registrasi |
| Registrasi | Nama, email, nomor WhatsApp, kata sandi, konfirmasi, persetujuan syarat | Membuat akun atau berpindah ke login |
| Katalog Produk | Judul, deskripsi, filter kategori, grid produk, CTA WhatsApp/marketplace | Filter, buka detail, hubungi penjual |
| Detail Produk | Galeri/foto, nama, kategori, harga, bahan, cerita/asal material, tautan pembelian, rekomendasi produk | Baca detail dan lanjut ke kanal penjual |
| Lokasi Bank Sampah | Pencarian, filter material, daftar lokasi, peta dan marker, jumlah hasil | Cari, filter, pilih lokasi, buka Google Maps |
| Setor Sampah | Formulir identitas, jenis, tanggal, lokasi, catatan, metode setor, informasi manfaat | Isi dan kirim pendaftaran |
| Kontak/Tentang | Ringkasan misi, alamat kontak, media sosial, navigasi | Menghubungi pengelola |

**Catatan kesesuaian desain:** wireframe memuat landing page dan detail produk. Mockup high-fidelity yang dibagikan memperlihatkan halaman login/registrasi, katalog, direktori bank sampah, dan formulir setor sampah. Landing page dan detail produk tetap menjadi bagian struktur produk, tetapi implementasi visualnya perlu mengikuti design system mockup karena tidak seluruhnya memiliki mockup high-fidelity tersendiri.

## 7. Alur Pengguna Utama

### 7.1 Menjelajahi dan membeli produk

1. Pengguna membuka beranda atau langsung membuka katalog.
2. Pengguna memilih kategori: Semua, Plastik, Kertas/Kardus, atau Tekstil/Kain.
3. Sistem menampilkan produk yang sesuai.
4. Pengguna membaca nama, bahan, harga, dan detail produk.
5. Pengguna memilih **Beli via WhatsApp** atau **Lihat di Marketplace**.
6. Sistem membuka kanal penjualan eksternal milik UMKM. LokaKarya tidak memproses pembayaran pada MVP.

### 7.2 Menemukan bank sampah

1. Pengguna membuka halaman Lokasi Bank Sampah.
2. Pengguna mencari nama lokasi atau memilih filter jenis sampah.
3. Sistem memperbarui daftar kartu dan marker peta sesuai hasil pencarian/filter.
4. Pengguna memilih salah satu lokasi untuk membaca alamat, jam operasional, jarak (jika tersedia), dan jenis sampah yang diterima.
5. Pengguna memilih tombol petunjuk arah untuk membuka Google Maps.

### 7.3 Mengirim pendaftaran setor sampah

1. Pengguna memilih menu Setor Sampah.
2. Jika autentikasi diwajibkan dan pengguna belum masuk, sistem mengarahkan pengguna ke halaman login. Setelah berhasil masuk, pengguna dapat kembali ke formulir.
3. Pengguna mengisi nama, nomor WhatsApp, jenis sampah, tanggal, lokasi tujuan, catatan (opsional), dan metode penyetoran.
4. Sistem memvalidasi seluruh kolom wajib.
5. Pengguna menekan **Kirim Pendaftaran**.
6. Sistem menampilkan konfirmasi bahwa pendaftaran simulasi diterima. Informasi bahwa pengelola akan menghubungi pengguna melalui WhatsApp ditampilkan secara jelas.

### 7.4 Membuat akun dan masuk

1. Pengguna membuka halaman login atau registrasi.
2. Pengguna berpindah di antara tab Masuk dan Daftar.
3. Pada registrasi, pengguna melengkapi identitas, kontak, kata sandi, konfirmasi kata sandi, dan persetujuan ketentuan.
4. Sistem memvalidasi format dan kecocokan kata sandi.
5. Pada login, sistem memvalidasi email dan kata sandi.
6. Setelah berhasil, pengguna diarahkan kembali ke halaman tujuan sebelumnya atau ke beranda.

## 8. Kebutuhan Fungsional

Prioritas: **P0** = wajib untuk MVP; **P1** = penting tetapi dapat menyusul; **P2** = pengembangan berikutnya.

### FR-01 — Navigasi utama (P0)

- Website menampilkan identitas LokaKarya dan menu Beranda, Katalog Produk, Lokasi Bank Sampah, Setor Sampah, serta Kontak.
- CTA Setor Sampah harus terlihat pada desktop dan tetap mudah dijangkau pada mobile.
- Tautan navigasi mengarah ke halaman atau section yang benar.
- Halaman aktif memiliki penanda visual yang konsisten.

**Kriteria penerimaan:** semua item navigasi dapat diakses dengan mouse dan keyboard; tidak ada tautan internal yang mengarah ke halaman kosong.

### FR-02 — Landing page (P0)

- Menampilkan headline utama: **“Ubah Limbah Jadi Karya, Dukung Ekonomi Lokal.”**
- Menampilkan deskripsi singkat tentang katalog produk daur ulang dan direktori lokasi setor sampah.
- Menyediakan dua CTA utama: **Jelajahi Produk** dan **Cari Bank Sampah**.
- Menampilkan manfaat atau statistik dampak hanya jika sumber/label simulasi tersedia.

**Kriteria penerimaan:** kedua CTA mengarahkan pengguna ke bagian/halaman yang sesuai; angka simulasi selalu diberi keterangan.

### FR-03 — Registrasi akun (P0 bila autentikasi dipakai)

- Field wajib: nama lengkap, email, nomor WhatsApp, kata sandi, konfirmasi kata sandi, persetujuan syarat dan kebijakan privasi.
- Kata sandi minimal 8 karakter sesuai petunjuk mockup.
- Sistem menampilkan pesan kesalahan yang spesifik ketika field kosong, format email salah, atau kata sandi tidak cocok.
- Tombol Google hanya boleh berfungsi sebagai autentikasi sungguhan jika OAuth sudah dikonfigurasi; selain itu tampilkan sebagai elemen nonaktif/demonstrasi yang diberi penjelasan.

**Kriteria penerimaan:** registrasi tidak dapat dikirim jika field wajib tidak valid; kata sandi dan konfirmasi harus sama.

### FR-04 — Login (P0 bila autentikasi dipakai)

- Field wajib: email dan kata sandi.
- Menyediakan opsi ingat saya dan tautan lupa kata sandi.
- Menyediakan perpindahan ke halaman registrasi.
- Pesan kesalahan login tidak membocorkan apakah email atau kata sandi yang salah.

**Kriteria penerimaan:** pengguna dengan kredensial valid dapat masuk; kredensial salah menghasilkan pesan yang aman dan mudah dipahami.

### FR-05 — Katalog dan filter produk (P0)

- Menampilkan kartu dengan gambar, kategori/bahan, nama, harga, tombol WhatsApp, dan tautan marketplace jika tersedia.
- Menyediakan filter Semua, Plastik, Kertas/Kardus, dan Tekstil/Kain.
- Filter dapat digunakan tanpa reload penuh apabila teknologi aplikasi mendukungnya.
- Menyediakan aksi Muat Lebih Banyak atau pagination jika jumlah item melebihi kapasitas awal.
- Menyediakan empty state ketika tidak ada produk yang cocok.

**Kriteria penerimaan:** produk yang tampil sesuai dengan filter aktif; filter Semua mengembalikan seluruh produk; CTA eksternal membuka tujuan yang benar.

### FR-06 — Detail produk (P0)

- Menampilkan gambar utama, nama, kategori, harga, bahan daur ulang, dan deskripsi.
- Menampilkan asal/cerita material (*traceability*) berdasarkan data yang tersedia.
- Menampilkan tautan WhatsApp dan/atau marketplace.
- Menampilkan rekomendasi produk terkait bila tersedia.

**Kriteria penerimaan:** informasi bahan tidak boleh dibuat-buat; jika asal material tidak tersedia, tampilkan keterangan “Informasi belum tersedia”.

### FR-07 — Pencarian dan filter direktori (P0)

- Menyediakan pencarian berdasarkan nama lokasi atau teks alamat.
- Menyediakan filter jenis sampah yang diterima.
- Menampilkan jumlah hasil yang sesuai dengan data simulasi.
- Menyediakan empty state ketika tidak ada lokasi yang cocok.

**Kriteria penerimaan:** daftar hasil berubah sesuai kata kunci/filter; membersihkan pencarian dan memilih Semua mengembalikan daftar awal.

### FR-08 — Daftar lokasi dan peta (P0)

- Menampilkan nama lokasi, alamat, jam operasional, material yang diterima, dan jarak bila tersedia.
- Menampilkan marker peta yang berkorespondensi dengan kartu lokasi.
- Memilih kartu dapat menyorot marker atau menampilkan ringkasan lokasi pada peta.
- Tombol petunjuk arah membuka Google Maps menggunakan koordinat atau alamat yang tersedia.
- Jika peta tidak dapat dimuat, daftar lokasi tetap dapat digunakan.

**Kriteria penerimaan:** pengguna tetap dapat menemukan alamat dan jenis material tanpa bergantung pada peta; lokasi dan jarak simulasi diberi label yang sesuai.

### FR-09 — Form setor sampah (P0)

Field sesuai mockup:

| Field | Wajib | Aturan |
|---|---:|---|
| Nama lengkap | Ya | Tidak boleh kosong |
| Nomor WhatsApp | Ya | Format nomor telepon yang dapat dihubungi; normalisasi awalan negara bila diperlukan |
| Jenis sampah | Ya | Plastik, Kertas/Kardus, atau Tekstil/Kain |
| Tanggal | Ya | Tanggal valid dan tidak berada di masa lalu untuk pendaftaran baru |
| Lokasi tujuan | Ya | Dipilih dari daftar lokasi yang tersedia |
| Catatan | Tidak | Teks bebas dengan batas panjang yang wajar |
| Metode penyetoran | Ya | Antar sendiri atau Minta dijemput |

- Kolom wajib ditandai dengan asterisk dan memiliki label yang terlihat.
- Sistem menampilkan pesan validasi di dekat field yang bermasalah.
- Setelah submit berhasil, pengguna menerima konfirmasi yang jelas.
- Konfirmasi menjelaskan bahwa pengelola akan menghubungi pengguna melalui WhatsApp untuk validasi jadwal dan ketersediaan penjemputan.
- Pengajuan simulasi tidak boleh diklaim sebagai jadwal yang sudah terkonfirmasi.

**Kriteria penerimaan:** formulir tidak dapat dikirim sebelum field wajib valid; status hasil submit dibedakan dari konfirmasi jadwal oleh pengelola.

### FR-10 — Autentikasi untuk setor sampah (P0, keputusan produk)

- Jika akses setor sampah dibatasi untuk pengguna terdaftar, pengguna guest diarahkan ke login.
- Setelah login, pengguna dikembalikan ke halaman setor sampah.
- Bila autentikasi belum dibuat pada versi demo, perilaku simulasi harus konsisten dan tidak boleh memberi kesan bahwa akun sungguhan telah dibuat.

### FR-11 — Kontak dan footer (P0)

- Footer memuat ringkasan platform, tautan navigasi, alamat email, nomor WhatsApp, tautan media sosial, hak cipta, dan catatan data simulasi.
- Kontak contoh pada mockup adalah `halo@lokakarya.id` dan `+62 812 0000 2026`; keduanya harus dikonfirmasi sebelum publikasi.

### FR-12 — Tiket setoran dan poin (P1)

- Konsep ini disebut dalam alur sistem awal, tetapi belum memiliki aturan bisnis maupun tampilan high-fidelity.
- Rekomendasi untuk iterasi berikutnya: menghasilkan nomor referensi setelah pengajuan diterima dan menampilkan riwayat setoran.
- Sistem poin baru boleh diterapkan setelah nilai poin per jenis/berat sampah, batas penukaran, dan validasi penerimaan ditetapkan.

## 9. Data dan Konten Awal

### 9.1 Kategori produk

- Plastik
- Kertas/Kardus
- Tekstil/Kain

### 9.2 Contoh katalog produk pada mockup

Semua nama dan harga berikut merupakan data demonstrasi.

| Produk | Kategori/material | Harga simulasi |
|---|---|---:|
| Tas Anyam Kemasan | Plastik / kemasan kopi | Rp85.000 |
| Pot Botol Gantung | Plastik / botol plastik | Rp25.000 |
| Buku Catatan Daur | Kertas/Kardus / kertas bekas | Rp35.000 |
| Organizer Meja | Kertas/Kardus / kardus bekas | Rp45.000 |
| Dompet Perca | Tekstil/Kain / kain perca | Rp40.000 |
| Keset Kain Rajut | Tekstil/Kain / sisa kain kaos | Rp55.000 |
| Keranjang Serbaguna | Plastik / tali plastik bekas | Rp65.000 |
| Sarung Bantal Perca | Tekstil/Kain / perca katun | Rp60.000 |

Setiap produk sebaiknya memiliki field `id`, `name`, `category`, `materials`, `description`, `price`, `image`, `whatsappUrl`, `marketplaceUrl`, dan `sellerName` (bila tersedia).

### 9.3 Contoh lokasi

Pilihan lokasi pada formulir mockup mencakup Bank Sampah Melati, Bank Sampah Berkah, Bank Sampah Lestari, dan Bank Sampah Harapan. Halaman direktori menampilkan contoh Bank Sampah Melati dengan alamat **Jl. Kartini No.12, Kec. Sukmajaya** dan jarak **800 m**. Angka jarak dan alamat tersebut adalah data simulasi dan tidak boleh diperlakukan sebagai data geospasial terverifikasi.

Setiap lokasi sebaiknya memiliki field `id`, `name`, `address`, `latitude`, `longitude`, `operatingHours`, `acceptedWasteTypes`, `contact`, `distanceLabel`, dan `mapsUrl`. Koordinat harus berasal dari data yang disediakan/ditetapkan untuk simulasi.

### 9.4 Model data konseptual

- **User:** `id`, `fullName`, `email`, `phone`, `passwordHash`, `createdAt`.
- **Product:** `id`, `name`, `categoryId`, `materials`, `description`, `price`, `imageUrl`, `sellerName`, `whatsappUrl`, `marketplaceUrl`, `isActive`.
- **ProductCategory:** `id`, `name`, `slug`.
- **DropPoint:** `id`, `name`, `address`, `latitude`, `longitude`, `operatingHours`, `acceptedWasteTypes`, `phone`, `mapsUrl`, `isActive`.
- **WasteRegistration:** `id`, `userId` (opsional bila mode demo mengizinkan guest), `fullName`, `phone`, `wasteType`, `date`, `dropPointId`, `notes`, `submissionMethod`, `status`, `createdAt`.

Status awal pengajuan dapat berupa `submitted`, lalu diubah oleh pengelola menjadi `contacted`, `confirmed`, `rejected`, atau `completed` jika alur pengelolaan ditambahkan. Status ini bukan bukti bahwa penjemputan otomatis tersedia.

## 10. Aturan Bisnis

- Katalog tidak memproses pembayaran. Pembelian berlangsung di kanal eksternal milik penjual.
- Harga, foto, jumlah produk, detail material, jam buka, dan lokasi pada MVP adalah data simulasi.
- Jenis sampah yang dapat dipilih pada formulir harus sesuai dengan pilihan yang didukung lokasi tujuan. Bila lokasi tidak menerima jenis tersebut, lokasi tidak boleh ditawarkan sebagai tujuan untuk jenis tersebut.
- Jarak hanya ditampilkan jika sumber data jarak tersedia. Jangan menghitung jarak dari koordinat palsu atau menampilkan “terdekat” tanpa dasar.
- Tanggal setoran tidak boleh lebih awal dari tanggal hari ini. Validasi jam operasional dapat ditambahkan jika jadwal sudah tersedia secara lengkap.
- Metode “Minta dijemput” adalah permintaan, bukan pemesanan penjemputan yang sudah terkonfirmasi.
- Pengguna harus diberi tahu jika data yang mereka lihat adalah simulasi.

## 11. Kebutuhan Non-Fungsional

### 11.1 Responsivitas

- Target pengujian ponsel: lebar 360 px dan 390 px.
- Target desktop: lebar 1366 px; desain Figma juga menggunakan frame 1440 px untuk halaman konten.
- Layout menggunakan CSS Grid/Flexbox dan tidak mengandalkan lebar tetap yang menyebabkan horizontal overflow.
- Formulir dua kolom pada desktop berubah menjadi satu kolom pada layar kecil.
- Direktori pada mobile menggunakan pola daftar terlebih dahulu dan peta setelahnya atau kontrol pergantian Daftar/Peta.

### 11.2 Performa

- Target waktu muat awal di bawah 3 detik pada kondisi pengujian yang ditentukan.
- Gambar menggunakan ukuran yang sesuai, format modern bila didukung, kompresi, dan lazy loading untuk konten di bawah fold.
- Hindari memuat peta pihak ketiga sebelum diperlukan bila ukuran bundle/performa menjadi masalah.

### 11.3 Aksesibilitas

- Gunakan elemen HTML semantik: `header`, `nav`, `main`, `section`, `article`, `form`, dan `footer`.
- Semua field memiliki label; placeholder bukan pengganti label.
- Semua aksi penting dapat dijangkau melalui keyboard.
- Focus state terlihat jelas dan tidak hanya mengandalkan perubahan warna.
- Gambar informatif memiliki teks alternatif; gambar dekoratif menggunakan alt kosong.
- Kontras teks dan kontrol diperiksa sebelum rilis.
- Pesan error terhubung dengan field yang bermasalah dan dapat dibaca screen reader.

### 11.4 Keamanan dan privasi

- Jangan pernah menyimpan kata sandi dalam bentuk teks biasa; gunakan hashing pada backend apabila autentikasi sungguhan dibuat.
- Validasi input dilakukan di sisi klien dan sisi server.
- Data nama, email, dan nomor WhatsApp hanya digunakan untuk tujuan yang dijelaskan kepada pengguna.
- Sediakan tautan Syarat & Ketentuan dan Kebijakan Privasi sebelum mengumpulkan data personal.
- Jangan mengirim informasi pribadi ke URL analitik atau parameter tautan eksternal.

### 11.5 Kompatibilitas dan pemeliharaan

- Mendukung browser modern berbasis Chromium, Firefox, dan Safari versi yang masih didukung.
- Komponen UI dibuat reusable agar header, footer, card, filter, tombol, dan field konsisten.
- Konten produk dan lokasi sebaiknya dipisahkan dari markup agar mudah diganti dari data simulasi menjadi backend.

## 12. Validasi, Status, dan Penanganan Kondisi

| Kondisi | Perilaku yang diharapkan |
|---|---|
| Katalog belum memiliki data | Empty state dengan penjelasan dan aksi kembali ke Semua kategori |
| Filter tidak menemukan produk | Tampilkan pesan tidak ada produk yang cocok dan tombol reset filter |
| Direktori tidak menemukan lokasi | Tampilkan pesan tidak ada lokasi dan sarankan menghapus filter |
| Peta gagal dimuat | Daftar lokasi tetap tersedia; tampilkan pesan bahwa peta tidak dapat dimuat |
| Form belum lengkap | Tandai field yang salah dan tampilkan pesan validasi |
| Form berhasil dikirim | Tampilkan konfirmasi pengajuan diterima, bukan konfirmasi jadwal |
| Tautan WhatsApp/marketplace tidak tersedia | Sembunyikan atau nonaktifkan CTA terkait; jangan membuat URL palsu |
| Pengguna belum login | Arahkan ke login jika pembatasan autentikasi diterapkan |

## 13. Asumsi dan Keputusan yang Masih Terbuka

1. **Metode autentikasi:** apakah MVP menggunakan backend autentikasi sungguhan atau alur simulasi untuk demonstrasi?
2. **Akses setor sampah:** apakah login wajib untuk semua pendaftaran atau formulir juga dapat digunakan oleh guest?
3. **Poin dan tiket:** apakah sistem poin/tiket wajib masuk penilaian praktikum? Jika ya, tetapkan aturan poin, format nomor referensi, dan desain halaman sukses.
4. **Sumber peta:** apakah menggunakan Google Maps embed, peta statis, atau peta interaktif pihak ketiga? Tautan petunjuk arah tetap dapat menggunakan Google Maps.
5. **Data bank sampah:** perlu ditetapkan apakah direktori memiliki 4 lokasi atau 8 lokasi unik. Mockup menampilkan “8 lokasi ditemukan”, sementara pilihan lokasi pada formulir menyebut 4 nama.
6. **Data kontak:** pastikan email, nomor WhatsApp, tautan media sosial, dan tautan penjual merupakan placeholder atau kontak yang akan dipakai.
7. **Detail produk:** wireframe memuat detail produk, tetapi mockup high-fidelity yang tersedia belum memperlihatkan desain final detail produk.
8. **Statistik dampak:** tentukan angka simulasi dan labelnya; jangan mengklaim dampak lingkungan terukur jika tidak ada perhitungan/sumber.

## 14. Definition of Done MVP

MVP dapat dianggap selesai apabila:

- [ ] Semua halaman dalam struktur informasi tersedia dan dapat dinavigasi.
- [ ] Landing page konsisten dengan identitas visual mockup.
- [ ] Katalog menampilkan data simulasi dan filter kategori berfungsi.
- [ ] CTA WhatsApp/marketplace memakai URL yang valid dan terkonfigurasi.
- [ ] Detail produk menampilkan informasi bahan dan harga secara benar.
- [ ] Direktori memiliki pencarian, filter, daftar lokasi, dan peta atau fallback peta.
- [ ] Tombol Google Maps membuka alamat/koordinat lokasi yang tepat untuk dataset simulasi.
- [ ] Form setor sampah memvalidasi field wajib dan menampilkan konfirmasi pengajuan.
- [ ] Batas antara pengajuan dan konfirmasi jadwal dijelaskan dengan benar.
- [ ] Login/registrasi konsisten dengan keputusan autentikasi yang dipilih.
- [ ] Layout diuji pada 360 px, 390 px, dan 1366 px tanpa overflow horizontal.
- [ ] Keyboard focus, label form, alt text, dan pesan validasi tersedia.
- [ ] Semua data simulasi diberi penanda yang jelas.
- [ ] Tidak ada tautan, kontak, lokasi, atau klaim dampak yang dibuat seolah-olah nyata tanpa verifikasi.

---

## 15. Referensi

- Brief produk LokaKarya yang diberikan dalam percakapan.
- [Figma — Wireframe LokaKarya](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-164).
- [Figma — Mockup LokaKarya](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-163).

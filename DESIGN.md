# Design Document

## LokaKarya — Visual System, UI Patterns, dan Responsive Guidelines

| Informasi | Detail |
|---|---|
| Produk | LokaKarya / LokaKarya.id |
| Versi dokumen | 1.0 |
| Tanggal | 17 November 2026 |
| Status | Baseline visual untuk implementasi UI |
| Referensi utama | [Wireframe](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-164) · [Mockup](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-163) |

---

## 1. Tujuan Dokumen

Dokumen ini mendefinisikan bahasa visual dan aturan implementasi antarmuka LokaKarya. Tujuannya adalah menjaga agar seluruh halaman dan komponen memiliki tampilan yang konsisten, mudah digunakan, responsif, serta mendukung identitas platform ekonomi sirkular.

**Prinsip penggunaan referensi:**

- Wireframe menjadi acuan struktur informasi, urutan section, dan hubungan antarfitur.
- Mockup menjadi acuan visual final: warna, tipografi, treatment kartu, tombol, navigasi, ilustrasi, dan komposisi halaman.
- Jika suatu halaman hanya tersedia dalam wireframe, gunakan komponen dan visual language dari mockup agar halaman tersebut tetap satu sistem.

## 2. Arah Visual Brand

### 2.1 Brand positioning

LokaKarya adalah platform yang mempertemukan karya daur ulang UMKM dengan konsumen dan memudahkan masyarakat menemukan tempat penyetoran sampah.

### 2.2 Karakter visual

- **Natural:** warna hijau, mint, dan aksen lime menggambarkan alam dan keberlanjutan.
- **Friendly:** radius lembut, ilustrasi sederhana, dan bahasa yang mudah dipahami.
- **Trustworthy:** layout rapi, informasi lokasi/produk jelas, dan status simulasi transparan.
- **Modern:** tipografi sans-serif, navigasi ringkas, dan komponen dengan hierarki visual yang konsisten.
- **Local & human:** produk kerajinan dan foto material menjadi fokus, bukan ornamen teknologi yang berlebihan.

### 2.3 Prinsip desain

1. **Clarity over decoration:** informasi produk, material, alamat, jam operasional, dan CTA lebih penting daripada dekorasi.
2. **One primary action per context:** setiap kartu atau section memiliki aksi utama yang mudah dikenali.
3. **Consistent components:** gunakan komponen yang sama untuk pola yang sama di setiap halaman.
4. **Honest information:** data simulasi, jarak perkiraan, dan status pengajuan harus diberi label yang jujur.
5. **Accessible by default:** kontras, ukuran target sentuh, label, dan focus state menjadi bagian desain sejak awal.

## 3. Design Tokens

Nilai warna berikut dibaca dari warna solid yang berulang pada file mockup Figma. Peran token ditetapkan untuk memudahkan implementasi.

### 3.1 Color palette

| Token | Hex | Peran |
|---|---|---|
| `color-primary-forest` | `#1F4B2C` | Warna utama brand, header/footer gelap, tombol primer |
| `color-primary-deep` | `#1A4026` | Variasi hijau gelap untuk footer, hover, atau gradient |
| `color-primary-olive` | `#4D7109` | Aksen hijau zaitun dan elemen aktif tertentu |
| `color-accent-lime` | `#C3E956` | Aksen, indikator, highlight, elemen dekoratif |
| `color-accent-mint` | `#91EAAF` | Ilustrasi dan aksen mint |
| `color-background` | `#F4FFFC` | Background utama bernuansa mint sangat muda |
| `color-surface` | `#FFFFFF` | Kartu, form, dan permukaan utama |
| `color-text-primary` | `#222222` | Teks utama |
| `color-text-secondary` | `#606060` | Teks sekunder dan deskripsi |
| `color-border` | `#E2E2E2` | Border input, divider, dan pemisah |
| `color-sage` | `#B2C09A` | Aksen sage dan warna pendukung |
| `color-soft-green` | `#CFE8DA` | Permukaan hijau lembut dan elemen sekunder |

**Panduan pemakaian:**

- Gunakan forest green untuk CTA primer dan elemen identitas utama.
- Gunakan lime sebagai aksen, bukan warna untuk paragraf panjang.
- Gunakan background mint muda pada area luas dengan surface putih untuk kartu dan formulir.
- Gunakan warna teks gelap di atas background terang; jangan memakai lime sebagai warna teks berukuran kecil.
- Teks di atas tombol hijau harus memiliki kontras yang memadai. Periksa kombinasi final dengan contrast checker sebelum rilis.
- Jangan menyampaikan status hanya melalui warna; sertakan label atau ikon.

### 3.2 Typography

Font yang ditemukan pada mockup:

- **Poppins Bold:** wordmark/brand dan headline display tertentu.
- **Inter:** seluruh UI, body text, label, heading halaman, tombol, navigasi, dan informasi produk.

| Peran | Font/style | Ukuran acuan desktop |
|---|---|---:|
| Hero headline | Poppins Bold | 44 px |
| Judul panel auth | Poppins Bold | 28 px |
| Wordmark LokaKarya | Poppins Bold | 22 px |
| Judul halaman/section | Inter Semi Bold | 26 px |
| Judul kartu produk | Inter Semi Bold | 16 px |
| Harga produk | Inter Semi Bold | 16 px |
| Body / deskripsi | Inter Regular | 14 px |
| Label field | Inter Semi Bold | 13–14 px |
| Navigasi | Inter Semi Bold | 13 px |
| Tombol | Inter Semi Bold | 13–15 px |
| Chip kategori | Inter Regular/Medium | 12 px |
| Helper text | Inter Regular | 12 px |
| Metadata kecil | Inter Regular | 10–12 px |

**Aturan tipografi:**

- Gunakan Poppins Bold secara terbatas untuk headline display dan wordmark agar hirarki brand terasa kuat.
- Gunakan Inter untuk menjaga keterbacaan UI dan konsistensi antarhalaman.
- Body text idealnya memiliki line-height sekitar 1.5–1.6; heading sekitar 1.15–1.3.
- Hindari paragraf panjang dengan ukuran di bawah 14 px.
- Pada mobile, hero headline dapat diturunkan ke kisaran 32–36 px dan judul halaman ke 22–24 px, dengan line-height yang tetap nyaman.

### 3.3 Spacing scale

Gunakan basis kelipatan 4 px:

| Token | Nilai |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |
| `space-16` | 64 px |
| `space-20` | 80 px |

Pola umum:

- Jarak label ke input: 8 px.
- Padding input: 12–16 px.
- Jarak antar-field: 16–20 px.
- Padding kartu: 16–24 px.
- Jarak antar-kartu: 16–24 px pada mobile dan 24–32 px pada desktop.
- Jarak vertikal antar-section: 64–96 px pada desktop; 40–64 px pada mobile.

### 3.4 Radius, border, dan elevation

Nilai berikut merupakan token implementasi yang disarankan untuk menyelaraskan gaya rounded pada mockup.

| Token | Nilai | Penggunaan |
|---|---:|---|
| `radius-sm` | 8 px | Input, badge kecil, kontrol |
| `radius-md` | 12 px | Kartu produk dan kartu lokasi |
| `radius-lg` | 16 px | Panel auth, panel manfaat, kartu besar |
| `radius-xl` | 20–24 px | Hero visual atau panel dekoratif besar |
| `radius-pill` | 999 px | Chip, tab, dan tombol pill |
| `border-default` | 1 px solid `#E2E2E2` | Input, kartu terang, divider |

Gunakan shadow tipis dan lembut untuk navigasi melayang, kartu auth, serta kartu yang memang perlu terangkat dari background. Hindari shadow gelap atau tebal yang membuat UI terasa berat.

## 4. Layout System

### 4.1 Breakpoints

Breakpoint ini merupakan aturan implementasi yang disarankan agar desain bekerja pada target perangkat dalam brief.

| Breakpoint | Rentang | Perilaku |
|---|---|---|
| Mobile | 360–767 px | Satu kolom untuk form dan section; navigasi ringkas; kartu katalog dua kolom bila lebar kartu tetap memadai |
| Tablet | 768–1023 px | Grid 2 kolom; panel dapat ditumpuk; direktori memakai daftar dan peta yang proporsional |
| Desktop | 1024 px ke atas | Navigasi penuh; konten terpusat; grid katalog 3–4 kolom; form dan panel manfaat dapat berdampingan |

### 4.2 Container dan grid

- Lebar kerja konten desktop umumnya sekitar 1200 px dan dipusatkan.
- Pada frame 1440 px, wireframe/mockup menggunakan margin konten sekitar 80 px untuk section utama.
- Footer menggunakan margin yang lebih lebar dan susunan kolom horizontal.
- Gunakan CSS `max-width` dan margin auto; jangan mengunci content width dengan nilai yang menyebabkan overflow pada 1366 px.
- Grid produk desktop: 4 kolom ketika ruang mencukupi; tablet 2 kolom; mobile 2 kolom dengan gap 12–16 px atau 1 kolom bila kartu tidak lagi terbaca.

### 4.3 Header dan navigasi

Acuan mockup desktop:

- Tinggi area header sekitar 121 px.
- Navigasi tampil sebagai panel putih melayang dengan radius besar, berada di dalam margin halaman.
- Wordmark berada di sisi kiri; menu di tengah; CTA Setor Sampah di sisi kanan.
- Menu: Beranda, Katalog Produk, Lokasi Bank Sampah, Setor Sampah, Kontak.
- Gunakan ikon sederhana yang konsisten: home, bag/shopping, pin, recycle, dan mail.
- Menu aktif memiliki underline atau indikator yang jelas.

Perilaku mobile:

- Ganti menu desktop dengan menu hamburger/drawer atau menu expand yang dapat diakses keyboard.
- Wordmark dan CTA utama tetap mudah terlihat.
- Pastikan menu tidak menutupi konten tanpa cara menutup yang jelas.

### 4.4 Footer

Footer mockup menggunakan permukaan hijau gelap dan teks terang/aksen lime. Struktur dasar:

1. Kolom identitas: logo, tagline singkat, deskripsi platform.
2. Kolom Jelajahi: tautan Katalog Produk, Lokasi Bank Sampah, Setor Sampah.
3. Kolom Hubungi Kami: email, nomor WhatsApp, ikon media sosial.
4. Baris legal: hak cipta dan label “Data simulasi untuk praktikum”.

Pada mobile, susun kolom secara vertikal dan jaga jarak antar-kelompok informasi.

## 5. Screen Specifications

### 5.1 Beranda / Landing Page

**Sumber struktur:** wireframe. Mockup high-fidelity yang tersedia lebih menonjolkan halaman autentikasi daripada landing page lengkap.

Struktur:

1. Header utama.
2. Hero dengan headline “Ubah Limbah Jadi Karya, Dukung Ekonomi Lokal.”
3. Deskripsi yang menjelaskan dua manfaat platform.
4. Dua CTA sejajar pada desktop: Jelajahi Produk dan Cari Bank Sampah.
5. Ilustrasi atau visual produk daur ulang.
6. Ringkasan manfaat: produk UMKM penuh cerita, bank sampah lebih dekat, dukung usaha lokal.
7. Cuplikan katalog atau lokasi bila diperlukan.
8. Footer.

Arah visual:

- Gunakan hero bernuansa mint/green dengan ilustrasi tote bag, botol, tanaman, atau karya daur ulang.
- Headline menjadi fokus utama; teks pendamping tidak lebih dominan.
- CTA produk dan CTA direktori harus memiliki perbedaan hierarki yang jelas namun sama-sama mudah ditemukan.
- Statistik dampak, bila ditampilkan, harus memiliki label data simulasi.

### 5.2 Login dan Registrasi

Acuan frame desktop Figma: **Desktop Masuk 1366 × 1360 px** dan **Desktop Daftar 1366 × 1456 px**.

Komposisi:

- Dua area utama: panel cerita/manfaat di kiri dan kartu autentikasi di kanan.
- Panel kiri memakai headline “Ubah Limbah Jadi Karya”, ilustrasi ekonomi sirkular, dan tiga kartu manfaat.
- Kartu auth memakai surface putih, radius lembut, dan padding yang lega.
- Login menggunakan tab Masuk/Daftar, field email dan kata sandi, opsi ingat saya, lupa kata sandi, CTA Masuk, pemisah “atau”, tombol Google, dan tautan berpindah halaman.
- Registrasi menggunakan nama lengkap, email, nomor WhatsApp, kata sandi, konfirmasi kata sandi, persetujuan syarat dan kebijakan privasi, CTA Daftar, dan tautan menuju login.

States yang perlu disediakan:

- Default, hover, focus, disabled, error, dan success.
- Kata sandi tidak cocok harus menampilkan pesan di dekat field konfirmasi.
- Tombol Google hanya ditampilkan sebagai pilihan yang berfungsi jika provider OAuth telah dikonfigurasi.

### 5.3 Katalog Produk

Acuan frame: **Katalog Produk 1440 × 1803 px**.

Struktur:

1. Header.
2. Judul “Katalog Produk” dan deskripsi singkat.
3. Chip filter: Semua, Plastik, Kertas/Kardus, Tekstil/Kain.
4. Grid kartu produk.
5. Aksi Muat Lebih Banyak atau pagination.
6. Footer.

Kartu produk harus memuat:

- Foto produk dengan rasio konsisten, idealnya 1:1.
- Chip kategori/material.
- Nama produk.
- Informasi bahan, misalnya “Bahan: Kain perca”.
- Harga.
- Tombol primer “Beli via WhatsApp”.
- Tautan sekunder “Lihat di Marketplace” bila URL tersedia.

Panduan:

- Pertahankan foto sebagai elemen visual paling dominan dalam kartu.
- Samakan tinggi area informasi produk agar baris kartu terlihat rapi.
- Nama produk boleh memiliki maksimal dua baris; jangan membuat harga dan CTA bergeser tidak beraturan.
- Filter aktif memakai warna primer/aksen yang kontras; filter tidak aktif menggunakan permukaan netral.
- Tampilkan label data simulasi pada konteks halaman, bukan mengulang label pada setiap elemen jika sudah jelas.

### 5.4 Detail Produk

Sumber: struktur wireframe; detail visual high-fidelity belum tersedia.

Struktur yang disarankan:

- Breadcrumb atau tombol kembali ke katalog.
- Galeri foto produk.
- Nama, kategori, harga, dan bahan utama.
- Deskripsi/cerita produk dan asal material (*traceability*).
- Informasi penjual/UMKM jika tersedia.
- CTA Beli via WhatsApp dan tautan marketplace.
- Rekomendasi produk terkait.

Gunakan gaya kartu, tipografi, warna, dan tombol yang sama seperti katalog. Jangan menambah fitur checkout internal karena alur pembelian diarahkan ke kanal UMKM.

### 5.5 Lokasi Bank Sampah

Acuan frame: **Lokasi Bank Sampah 1440 × 1113 px**.

Struktur:

1. Header.
2. Judul “Daftar Bank Sampah” dan jumlah lokasi yang ditemukan.
3. Search input “Cari nama lokasi...”.
4. Filter jenis sampah.
5. Layout dua kolom: daftar kartu di satu sisi dan peta di sisi lain.
6. Footer.

Kartu lokasi memuat:

- Nama bank sampah.
- Alamat.
- Jarak bila tersedia.
- Chip jenis sampah yang diterima.
- Tombol untuk membuka petunjuk arah/Google Maps.

Peta:

- Marker menggunakan ikon pin yang jelas.
- Marker harus berkorespondensi dengan kartu lokasi.
- Lokasi aktif dapat diberi highlight atau menampilkan popover informasi singkat.
- Peta harus memiliki fallback: daftar lokasi tetap tersedia apabila peta gagal dimuat.

Contoh informasi pada mockup: Bank Sampah Melati, Jl. Kartini No.12, Kec. Sukmajaya, 800 m. Seluruh data ini adalah simulasi.

### 5.6 Form Setor Sampah

Acuan frame: **Menu Setor Sampah 1440 × 1265 px**.

Struktur:

1. Header.
2. Judul “Form Setor Sampah” dan keterangan bahwa formulir merupakan simulasi.
3. Panel formulir di kiri.
4. Panel “Manfaat Setor Sampah” dan petunjuk “Sebelum menyetor” di kanan.
5. Footer.

Form:

- Nama Lengkap.
- Nomor WhatsApp.
- Jenis Sampah.
- Tanggal.
- Lokasi Tujuan.
- Catatan.
- Metode Penyetoran: Antar sendiri atau Minta dijemput.
- Tombol Kirim Pendaftaran.

Panduan:

- Gunakan dua kolom untuk kelompok field yang seimbang pada desktop.
- Field Lokasi Tujuan dan Catatan dapat menggunakan lebar penuh.
- Field wajib memiliki asterisk.
- Helper text diletakkan dekat field terkait.
- Pilihan metode harus berupa radio group dengan label yang dapat diklik.
- Panel manfaat menggunakan latar hijau lembut agar terlihat terpisah dari formulir.
- Pada mobile, formulir dan panel manfaat ditumpuk vertikal.

## 6. Component Guidelines

### 6.1 Button

| Varian | Penggunaan | Gaya |
|---|---|---|
| Primary | Aksi utama, misalnya Setor Sampah, Masuk, Kirim Pendaftaran | Background forest green, teks terang, rounded pill/medium |
| Secondary | Aksi pendamping, misalnya Cari Bank Sampah | Background putih/soft green, border atau fill sekunder |
| Tertiary/Text | Tautan marketplace, Lupa kata sandi, link navigasi | Tanpa fill dominan, underline/hover/focus yang jelas |
| Disabled | Aksi yang belum dapat digunakan | Kontras diturunkan tetapi label tetap terbaca; nonaktif secara semantik |

- Tinggi kontrol utama desktop sekitar 44–52 px.
- Target sentuh mobile minimal sekitar 44 × 44 px.
- Selalu sediakan hover, focus-visible, active, dan disabled states.
- Label tombol harus menjelaskan hasil aksi; hindari “Klik di sini”.

### 6.2 Input dan Form Field

- Label ditempatkan di atas input.
- Tinggi input desktop sekitar 46–51 px sesuai mockup.
- Border default `#E2E2E2`; focus menggunakan outline/border forest green yang jelas.
- Error state menggunakan pesan teks dan indikator visual, bukan warna saja.
- Select, date picker, dan textarea harus konsisten dengan tinggi, radius, dan padding field lain.
- Placeholder menjelaskan contoh format, bukan menggantikan label.

### 6.3 Category Chip / Filter

- Bentuk pill dengan radius penuh.
- Ukuran teks sekitar 12 px.
- Padding horizontal sekitar 10 px dan tinggi sekitar 27–32 px.
- State: default, active, hover, focus, disabled.
- Kategori menggunakan label yang konsisten: Semua, Plastik, Kertas/Kardus, Tekstil/Kain.

### 6.4 Product Card

- Gambar rasio 1:1 dan `object-fit: cover`.
- Informasi produk ditata vertikal dengan jarak konsisten.
- Harga memiliki penekanan lebih kuat daripada deskripsi bahan.
- Tombol WhatsApp menjadi aksi utama; marketplace menjadi aksi sekunder.
- Seluruh kartu tidak harus clickable; gunakan tombol/link khusus untuk menghindari nested interactive elements.

### 6.5 Location Card

- Nama lokasi sebagai heading kartu.
- Alamat dan jam buka sebagai informasi sekunder.
- Jenis sampah yang diterima ditampilkan sebagai chip.
- Jarak hanya muncul bila datanya tersedia.
- Tombol petunjuk arah menjadi aksi yang paling mudah dikenali.
- Saat lokasi dipilih, kartu dan marker peta harus memiliki state aktif yang sinkron.

### 6.6 Navigation Bar

- Gunakan satu komponen header lintas halaman.
- Penanda halaman aktif harus konsisten.
- CTA Setor Sampah tetap terlihat pada desktop.
- Pada mobile, hindari menyusutkan semua link desktop menjadi teks yang terlalu kecil; gunakan menu ringkas.

### 6.7 Auth Card

- Surface putih dengan padding lega.
- Tab Masuk/Daftar terlihat sebagai satu kontrol segmented.
- Form field memiliki ikon opsional di sisi kiri; ikon tidak boleh mengurangi ruang input secara berlebihan.
- Pesan error ditempatkan tepat di bawah field terkait.
- Tombol utama memenuhi lebar kartu.

### 6.8 Map Marker

- Gunakan bentuk pin dan warna primer/aksen untuk membedakan lokasi.
- Marker yang dipilih harus mempunyai state aktif yang jelas.
- Jangan menggunakan nomor marker sebagai satu-satunya pembeda bila tidak ada legenda/kartu yang sesuai.
- Marker harus memiliki label aksesibel jika peta interaktif mendukungnya.

## 7. Iconography and Imagery

### 7.1 Ikon

Gunakan gaya ikon outline yang sederhana dan konsisten. Kategori ikon utama:

- Beranda: home.
- Katalog: shopping bag.
- Lokasi: map pin.
- Setor sampah: recycle.
- Kontak: mail/chat.
- Manfaat: leaf, heart, atau ikon material.

Jangan mencampur ikon outline tipis dengan ikon filled yang sangat berbeda dalam satu kelompok navigasi.

### 7.2 Foto produk

- Gunakan foto produk asli/simulasi dengan pencahayaan dan framing yang konsisten.
- Foto harus memperlihatkan bentuk produk secara jelas.
- Jangan memakai gambar dekoratif yang membuat konsumen salah memahami produk.
- Kompres gambar dan sediakan ukuran thumbnail yang sesuai.
- Setiap gambar produk memiliki alt text deskriptif.

### 7.3 Ilustrasi

Ilustrasi mockup menampilkan tote bag, botol, daun, dan tanaman. Pertahankan gaya ilustrasi yang ringan, natural, dan sederhana. Ilustrasi menjadi pendukung identitas, bukan pengganti foto produk pada katalog.

## 8. Responsive Behavior

### 8.1 Mobile 360–390 px

- Header menggunakan menu compact/hamburger; wordmark tidak terpotong.
- Hero disusun vertikal; headline, deskripsi, dan CTA memiliki jarak yang nyaman.
- CTA dapat ditumpuk jika dua tombol berdampingan membuat label terlalu sempit.
- Katalog menggunakan dua kolom hanya jika nama, harga, dan tombol tetap terbaca; jika tidak, gunakan satu kolom.
- Product image tetap konsisten dan tidak terdistorsi.
- Direktori menampilkan daftar dan peta secara bertahap. Alternatif terbaik adalah tab/segmented control “Daftar” dan “Peta” untuk menghemat ruang.
- Form setor sampah menjadi satu kolom; radio group dapat ditumpuk.
- Panel manfaat berada setelah formulir atau sebelum footer.
- Footer menjadi satu kolom.
- Tidak boleh ada horizontal scrolling pada halaman.

### 8.2 Tablet 768–1023 px

- Grid produk 2 kolom.
- Header dapat menggunakan menu yang lebih ringkas bila ruang tidak cukup.
- Form dapat menjadi satu kolom atau dua kolom hanya untuk field yang pendek.
- Direktori tetap mempertahankan daftar dan peta berdampingan jika lebar cukup; jika tidak, gunakan layout bertumpuk.

### 8.3 Desktop 1366–1440 px

- Header menampilkan seluruh navigasi.
- Konten utama menggunakan container terpusat.
- Katalog menggunakan empat kolom bila card tetap memiliki lebar yang memadai.
- Direktori memakai dua kolom daftar/peta.
- Form memiliki area input dan panel manfaat berdampingan.
- Footer menampilkan beberapa kolom horizontal.

## 9. Interaction and UI States

Setiap komponen interaktif perlu memiliki state berikut jika relevan:

| State | Perilaku visual |
|---|---|
| Default | Tampilan normal sesuai token komponen |
| Hover | Perubahan fill/border/shadow ringan pada pointer device |
| Focus-visible | Outline jelas ketika navigasi menggunakan keyboard |
| Active/Selected | Menandai filter, tab, menu, kartu, atau marker terpilih |
| Disabled | Terlihat nonaktif tetapi tetap terbaca |
| Loading | Menunjukkan proses berlangsung dan mencegah submit berulang |
| Error | Pesan kesalahan dekat elemen terkait |
| Success | Konfirmasi hasil tindakan dengan bahasa yang jelas |
| Empty | Penjelasan bahwa data tidak ditemukan dan aksi pemulihan |

Interaksi utama:

- Filter katalog mengubah kartu yang terlihat.
- Filter direktori memperbarui daftar dan marker peta.
- Klik lokasi menyorot kartu/marker yang berpasangan.
- CTA WhatsApp/marketplace membuka kanal eksternal.
- Submit formulir menampilkan konfirmasi pengajuan, bukan konfirmasi jadwal penjemputan.
- Tab autentikasi berpindah antara form login dan registrasi.

## 10. Accessibility Checklist

- [ ] Kontras teks dan komponen diperiksa; teks kecil tidak menggunakan lime sebagai warna foreground di atas putih.
- [ ] Semua kontrol dapat diakses dengan keyboard.
- [ ] Focus-visible tidak dihilangkan.
- [ ] Label form terlihat dan terhubung secara programatik ke input.
- [ ] Error message terhubung ke input yang relevan.
- [ ] Target sentuh cukup besar pada perangkat mobile.
- [ ] Ikon dekoratif disembunyikan dari screen reader jika label teks sudah tersedia.
- [ ] Ikon yang berfungsi sebagai tombol memiliki accessible name.
- [ ] Foto produk memiliki alt text; ilustrasi dekoratif memiliki alt kosong.
- [ ] Status aktif/terpilih tidak dibedakan melalui warna saja.
- [ ] Peta memiliki alternatif berupa daftar lokasi yang dapat diakses.

## 11. Content and Microcopy

Gunakan bahasa Indonesia yang ringkas, jelas, dan bersahabat. Hindari istilah teknis yang tidak diperlukan.

Contoh copy yang menjadi acuan:

- Hero: **Ubah Limbah Jadi Karya, Dukung Ekonomi Lokal.**
- Deskripsi: Platform belanja produk daur ulang ramah lingkungan dan direktori penyetoran sampah terdekat.
- Katalog: “Pilihan karya UMKM dari bahan daur ulang. Seluruh produk dan harga merupakan simulasi.”
- Form: “Daftarkan rencana penyetoran Anda ke bank sampah pilihan. Formulir ini adalah simulasi.”
- Petunjuk setelah submit: “Pengelola akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal dan ketersediaan penjemputan.”
- Footer tagline: “Karya lokal, dampak berarti. Temukan produk daur ulang UMKM dan bank sampah di sekitarmu.”

Microcopy status:

- Loading: “Memuat data…”
- Empty product: “Belum ada produk pada kategori ini.”
- Empty location: “Lokasi tidak ditemukan. Coba ubah kata kunci atau filter.”
- Form success: “Pendaftaran berhasil dikirim. Pengelola akan menghubungi Anda untuk konfirmasi.”
- Map fallback: “Peta belum dapat ditampilkan. Anda tetap dapat melihat alamat pada daftar lokasi.”

## 12. Design-to-Implementation Rules

- Simpan warna, font, spacing, radius, dan shadow sebagai CSS variables/design tokens.
- Bangun komponen reusable untuk header, footer, button, chip, card, input, form field, dan status message.
- Pisahkan data produk dan lokasi dari komponen presentasi.
- Gunakan CSS Grid/Flexbox; hindari positioning absolut untuk layout konten utama.
- Gunakan gambar dengan dimensi dan rasio yang konsisten.
- Pertahankan urutan heading semantik (`h1`, `h2`, `h3`) dan satu `h1` utama per halaman.
- Jangan membuat link palsu untuk tombol yang belum memiliki tujuan.
- Untuk tautan eksternal, gunakan target dan atribut keamanan yang sesuai.
- Jangan menyimpan data form personal lebih lama dari yang diperlukan untuk simulasi.
- Pastikan seluruh halaman diuji pada 360 px, 390 px, dan 1366 px.

## 13. Hal yang Perlu Dilengkapi

1. Mockup high-fidelity untuk landing page lengkap dan detail produk.
2. Detail breakpoint mobile dari Figma, khususnya navigasi, kartu produk, direktori, dan formulir.
3. Keputusan apakah halaman setor sampah wajib login.
4. Tampilan konfirmasi pendaftaran dan apakah tiket/nomor referensi akan dibuat.
5. Aturan reward/poin apabila fitur tersebut diwajibkan.
6. Data final jumlah lokasi dan konsistensi antara daftar direktori dengan opsi tujuan di formulir.
7. Verifikasi kontras kombinasi warna yang digunakan pada tombol, chip, dan teks kecil.
8. Konfirmasi nomor WhatsApp, email, akun media sosial, dan tautan marketplace.

---

## 14. Referensi

- [Figma — Wireframe LokaKarya](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-164).
- [Figma — Mockup LokaKarya](https://www.figma.com/design/PoGctK8bkFvyKu710ViZau/Desain-Web?node-id=125-163).
- Brief produk LokaKarya yang diberikan dalam percakapan.

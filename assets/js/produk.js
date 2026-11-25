/**
 * LokaKarya — Halaman Detail Produk (produk.html)
 *
 * Satu halaman ini dipakai untuk SEMUA produk.
 * Produk yang ditampilkan ditentukan dari alamat halaman, contohnya:
 *   produk.html?id=prod-1   → menampilkan Tas Anyam Kemasan
 *   produk.html?id=prod-5   → menampilkan Dompet Perca
 *
 * Data produk diambil dari assets/js/data.js (variabel LOKAKARYA_DATA),
 * jadi data.js harus dimuat SEBELUM file ini di produk.html.
 */

// Jumlah produk yang ditampilkan di bagian "Produk Lainnya".
const JUMLAH_REKOMENDASI = 4;

// Jalankan kode setelah seluruh HTML selesai dibaca browser.
document.addEventListener('DOMContentLoaded', function () {
  const idProduk = ambilIdDariAlamat();
  const produk = cariProdukById(idProduk);

  if (produk === null) {
    tampilkanTidakDitemukan();
    return;
  }

  tampilkanDetail(produk);
  tampilkanRekomendasi(produk);
});

/**
 * Mengambil nilai "id" dari alamat halaman.
 * Contoh: alamat "produk.html?id=prod-3" → hasilnya "prod-3".
 * Kalau tidak ada ?id= di alamat, hasilnya null.
 */
function ambilIdDariAlamat() {
  // window.location.search berisi bagian alamat setelah tanda "?", misalnya "?id=prod-3".
  // URLSearchParams membantu membaca bagian itu.
  const parameter = new URLSearchParams(window.location.search);
  return parameter.get('id');
}

/**
 * Mencari produk di data.js berdasarkan id-nya.
 * Mengembalikan objek produk, atau null kalau tidak ada yang cocok.
 */
function cariProdukById(id) {
  const daftarProduk = LOKAKARYA_DATA.products;

  for (let i = 0; i < daftarProduk.length; i++) {
    if (daftarProduk[i].id === id) {
      return daftarProduk[i];
    }
  }

  return null;
}

/**
 * Membuat tautan WhatsApp yang sudah berisi pesan otomatis.
 * encodeURIComponent mengubah spasi dan simbol agar aman dipakai di alamat.
 */
function buatLinkWhatsApp(pesan) {
  const nomor = LOKAKARYA_DATA.meta.contact.whatsappNumber;
  return 'https://wa.me/' + nomor + '?text=' + encodeURIComponent(pesan);
}

/**
 * Mengubah "Rp85.000" menjadi "Rp 85.000" supaya sama dengan tampilan katalog.
 */
function formatHarga(produk) {
  return produk.priceFormatted.replace('Rp', 'Rp ');
}

/**
 * Mengisi bagian detail produk di produk.html.
 */
function tampilkanDetail(produk) {
  // Judul tab browser
  document.title = produk.name + ' — LokaKarya';

  // Breadcrumb paling kanan diganti nama produk
  document.getElementById('crumbName').textContent = produk.name;

  // Foto produk
  const gambar = document.getElementById('detailImage');
  gambar.src = produk.image;
  gambar.alt = produk.name + ' dari ' + produk.materials.toLowerCase();

  // Teks utama
  document.getElementById('detailCategory').textContent = produk.category;
  document.getElementById('detailName').textContent = produk.name;
  document.getElementById('detailPrice').textContent = formatHarga(produk);
  document.getElementById('detailDescription').textContent = produk.description;
  document.getElementById('detailMaterial').textContent = produk.materials;
  document.getElementById('detailSeller').textContent = produk.sellerName;

  // Asal material: sesuai PRD, jangan dikarang.
  // Kalau datanya kosong, tulis "Informasi belum tersedia".
  const asalMaterial = document.getElementById('detailOrigin');
  if (produk.materialOrigin) {
    asalMaterial.textContent = produk.materialOrigin;
  } else {
    asalMaterial.textContent = 'Informasi belum tersedia';
    asalMaterial.classList.add('is-empty');
  }

  // Tombol beli via WhatsApp
  document.getElementById('detailWa').href = buatLinkWhatsApp(produk.whatsappText);

  // Tombol marketplace: disembunyikan kalau produk tidak punya tautan marketplace
  const tombolMarketplace = document.getElementById('detailMarket');
  if (produk.marketplaceUrl) {
    tombolMarketplace.href = produk.marketplaceUrl;
  } else {
    tombolMarketplace.hidden = true;
  }

  // Semua sudah terisi, sekarang bagian detail boleh ditampilkan
  document.getElementById('productDetail').hidden = false;
}

/**
 * Memilih produk untuk bagian "Produk Lainnya".
 * Urutan: produk lain dengan kategori yang sama dulu, lalu produk kategori lain,
 * sampai jumlahnya mencapai JUMLAH_REKOMENDASI.
 */
function pilihRekomendasi(produk) {
  const daftarProduk = LOKAKARYA_DATA.products;
  const hasil = [];

  // 1) Produk dengan kategori yang sama (selain produk yang sedang dibuka)
  for (let i = 0; i < daftarProduk.length; i++) {
    const p = daftarProduk[i];
    if (p.id !== produk.id && p.category === produk.category) {
      hasil.push(p);
    }
  }

  // 2) Kalau masih kurang, tambahkan produk dari kategori lain
  for (let i = 0; i < daftarProduk.length; i++) {
    const p = daftarProduk[i];
    if (hasil.length >= JUMLAH_REKOMENDASI) {
      break;
    }
    if (p.id !== produk.id && p.category !== produk.category) {
      hasil.push(p);
    }
  }

  // Ambil maksimal JUMLAH_REKOMENDASI produk
  return hasil.slice(0, JUMLAH_REKOMENDASI);
}

/**
 * Membuat HTML satu kartu produk. Bentuknya sama dengan kartu di katalog (index.html).
 */
function buatKartuProduk(p) {
  const linkDetail = 'produk.html?id=' + p.id;

  let html = '<div class="col-6 col-lg-3">';
  html += '<article class="product-card">';
  // Foto juga bisa diklik, tapi dilewati keyboard (tabindex -1) karena nama produk sudah jadi tautan
  html += '<a class="product-media" href="' + linkDetail + '" tabindex="-1" aria-hidden="true">';
  html += '<img src="' + p.image + '" alt="" loading="lazy" width="564" height="564">';
  html += '</a>';
  html += '<div class="product-info">';
  html += '<span class="tag">' + p.category + '</span>';
  html += '<h3><a href="' + linkDetail + '">' + p.name + '</a></h3>';
  html += '<p class="material">Bahan: ' + p.materials + '</p>';
  html += '<strong class="price">' + formatHarga(p) + '</strong>';
  html += '<a class="btn btn-wa" href="' + linkDetail + '">Lihat Detail</a>';
  html += '</div>';
  html += '</article>';
  html += '</div>';

  return html;
}

/**
 * Mengisi bagian "Produk Lainnya".
 */
function tampilkanRekomendasi(produk) {
  const rekomendasi = pilihRekomendasi(produk);
  if (rekomendasi.length === 0) {
    return;
  }

  let html = '';
  for (let i = 0; i < rekomendasi.length; i++) {
    html += buatKartuProduk(rekomendasi[i]);
  }

  document.getElementById('recommendations').innerHTML = html;
  document.getElementById('recommendSection').hidden = false;
}

/**
 * Ditampilkan kalau id di alamat salah atau kosong.
 */
function tampilkanTidakDitemukan() {
  document.title = 'Produk tidak ditemukan — LokaKarya';
  document.getElementById('crumbName').textContent = 'Produk tidak ditemukan';
  document.getElementById('notFound').hidden = false;
}

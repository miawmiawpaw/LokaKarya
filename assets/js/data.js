/**
 * LokaKarya — Centralized Simulation Dataset (Phase 1: Landing Page)
 * Seluruh produk, harga, lokasi, dan kontak merupakan data simulasi praktikum.
 */

const LOKAKARYA_DATA = {
  meta: {
    brandName: "LokaKarya",
    domain: "LokaKarya.id",
    isSimulation: true,
    simulationNotice: "Data simulasi untuk praktikum",
    contact: {
      email: "halo@lokakarya.id",
      whatsappDisplay: "+62 812 0000 2026",
      whatsappNumber: "6281200002026",
      address: "Jl. Daur Ulang No. 10, Depok (Simulasi)"
    },
    authConfig: {
      requireAuthForDeposit: false,
      isAuthenticated: false,
      loginUrl: "#form-setor"
    }
  },

  // Produk yang tampil di carousel hero (urutan = urutan slide).
  heroProductIds: ["prod-2", "prod-4", "prod-5", "prod-7"],

  categories: [
    { id: "all", name: "Semua", slug: "Semua" },
    { id: "plastik", name: "Plastik", slug: "Plastik" },
    { id: "kertas-kardus", name: "Kertas/Kardus", slug: "Kertas/Kardus" },
    { id: "tekstil-kain", name: "Tekstil/Kain", slug: "Tekstil/Kain" }
  ],

  benefits: [
    {
      id: "benefit-1",
      title: "Produk UMKM Penuh Cerita",
      description: "Temukan karya daur ulang yang bermakna.",
      icon: "assets/img/icons/benefit-bag.svg"
    },
    {
      id: "benefit-2",
      title: "Bank Sampah Lebih Dekat",
      description: "Cari lokasi dan mulai pilah sampahmu.",
      icon: "assets/img/icons/benefit-pin.svg"
    },
    {
      id: "benefit-3",
      title: "Dukung Usaha Lokal",
      description: "Belanja bijak, tumbuh bersama komunitas.",
      icon: "assets/img/icons/benefit-heart.svg"
    }
  ],

  // Catatan field produk:
  // - description    : deskripsi singkat untuk halaman detail (simulasi).
  // - materialOrigin : asal material. Biarkan "" kalau datanya belum ada,
  //                    halaman detail akan menulis "Informasi belum tersedia".
  products: [
    {
      id: "prod-1",
      name: "Tas Anyam Kemasan",
      category: "Plastik",
      materials: "Kemasan kopi",
      description: "Tas belanja yang dianyam tangan dari kemasan kopi bekas yang sudah dibersihkan. Kuat untuk belanja harian dan mudah dilap jika kotor.",
      materialOrigin: "",
      price: 85000,
      priceFormatted: "Rp85.000",
      sellerName: "Karya Siklus Nusantara (Simulasi)",
      image: "assets/img/products/tas-anyam-kemasan.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Tas Anyam Kemasan (Rp85.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/tas-anyam-kemasan-kopi"
    },
    {
      id: "prod-2",
      name: "Pot Botol Gantung",
      category: "Plastik",
      materials: "Botol plastik",
      description: "Pot tanaman gantung dari botol plastik bekas yang dipotong dan dicat ulang. Cocok untuk tanaman kecil di teras atau dekat jendela.",
      materialOrigin: "",
      price: 25000,
      priceFormatted: "Rp25.000",
      sellerName: "Hijau Lestari Craft (Simulasi)",
      image: "assets/img/products/pot-botol-gantung.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Pot Botol Gantung (Rp25.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/pot-botol-gantung-daur-ulang"
    },
    {
      id: "prod-3",
      name: "Buku Catatan Daur",
      category: "Kertas/Kardus",
      materials: "Kertas bekas",
      description: "Buku catatan dengan sampul dari kertas bekas yang diolah kembali. Halaman polos, pas untuk jurnal atau catatan harian.",
      materialOrigin: "",
      price: 35000,
      priceFormatted: "Rp35.000",
      sellerName: "Kertas Baru Studio (Simulasi)",
      image: "assets/img/products/buku-catatan-daur.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Buku Catatan Daur (Rp35.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/buku-catatan-kertas-daur-ulang"
    },
    {
      id: "prod-4",
      name: "Organizer Meja",
      category: "Kertas/Kardus",
      materials: "Kardus bekas",
      description: "Rak meja kecil dari kardus bekas yang dirakit dan dilapisi ulang. Untuk menyimpan alat tulis, buku, dan perlengkapan meja.",
      materialOrigin: "",
      price: 45000,
      priceFormatted: "Rp45.000",
      sellerName: "Kardus Kreatif UMKM (Simulasi)",
      image: "assets/img/products/organizer-meja.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Organizer Meja (Rp45.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/organizer-meja-kardus"
    },
    {
      id: "prod-5",
      name: "Dompet Perca",
      category: "Tekstil/Kain",
      materials: "Kain perca",
      description: "Dompet ritsleting dari potongan kain perca yang dijahit menjadi motif tambal-sulam. Muat untuk uang, kartu, dan barang kecil.",
      materialOrigin: "",
      price: 40000,
      priceFormatted: "Rp40.000",
      sellerName: "Perca Harapan Bunda (Simulasi)",
      image: "assets/img/products/dompet-perca.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Dompet Perca (Rp40.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/dompet-kain-perca"
    },
    {
      id: "prod-6",
      name: "Keset Kain Rajut",
      category: "Tekstil/Kain",
      materials: "Sisa kain kaos",
      description: "Keset yang dirajut dari sisa kain kaos. Teksturnya tebal, menyerap air, dan bisa dicuci.",
      materialOrigin: "",
      price: 55000,
      priceFormatted: "Rp55.000",
      sellerName: "Rajut Mandiri (Simulasi)",
      image: "assets/img/products/keset-kain-rajut.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Keset Kain Rajut (Rp55.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/keset-kain-rajut"
    },
    {
      id: "prod-7",
      name: "Keranjang Serbaguna",
      category: "Plastik",
      materials: "Tali plastik bekas",
      description: "Keranjang dari tali plastik bekas yang dianyam rapat. Bisa dipakai untuk wadah pakaian, mainan, atau belanjaan.",
      materialOrigin: "",
      price: 65000,
      priceFormatted: "Rp65.000",
      sellerName: "Anyam Sejahtera (Simulasi)",
      image: "assets/img/products/keranjang-serbaguna.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Keranjang Serbaguna (Rp65.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/keranjang-anyam-plastik"
    },
    {
      id: "prod-8",
      name: "Sarung Bantal Perca",
      category: "Tekstil/Kain",
      materials: "Perca katun",
      description: "Sarung bantal dari perca katun yang disusun menjadi pola geometris. Cocok untuk bantal sofa atau kursi.",
      materialOrigin: "",
      price: 60000,
      priceFormatted: "Rp60.000",
      sellerName: "Tenun & Perca Lokal (Simulasi)",
      image: "assets/img/products/sarung-bantal-perca.jpg",
      whatsappText: "Halo UMKM LokaKarya (Simulasi), saya tertarik membeli Sarung Bantal Perca (Rp60.000).",
      marketplaceUrl: "https://www.tokopedia.com/find/sarung-bantal-perca"
    }
  ],

  dropPoints: [
    {
      id: "loc-1",
      number: 1,
      name: "Bank Sampah Melati",
      address: "Jl. Kartini No. 12, Kec. Sukmajaya (Simulasi)",
      operatingHours: "Senin–Sabtu, 08.00–15.00 WIB",
      acceptedWasteTypes: ["Plastik", "Kertas/Kardus"],
      pinPosition: { top: "28%", left: "30%" },
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bank+Sampah+Melati+Sukmajaya"
    },
    {
      id: "loc-2",
      number: 2,
      name: "Bank Sampah Berkah",
      address: "Jl. Kenanga No. 8, Sukamaju (Simulasi)",
      operatingHours: "Senin–Jumat, 09.00–16.00 WIB",
      acceptedWasteTypes: ["Plastik", "Tekstil/Kain"],
      pinPosition: { top: "52%", left: "58%" },
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bank+Sampah+Berkah+Sukamaju"
    },
    {
      id: "loc-3",
      number: 3,
      name: "Bank Sampah Lestari",
      address: "Jl. Anggrek No. 21, Sukamaju (Simulasi)",
      operatingHours: "Selasa–Minggu, 08.00–14.00 WIB",
      acceptedWasteTypes: ["Kertas/Kardus", "Tekstil/Kain"],
      pinPosition: { top: "36%", left: "74%" },
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bank+Sampah+Lestari+Sukamaju"
    },
    {
      id: "loc-4",
      number: 4,
      name: "Bank Sampah Harapan",
      address: "Jl. Mawar No. 5, Sukamaju (Simulasi)",
      operatingHours: "Senin–Sabtu, 08.00–16.00 WIB",
      acceptedWasteTypes: ["Plastik", "Kertas/Kardus", "Tekstil/Kain"],
      pinPosition: { top: "68%", left: "38%" },
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bank+Sampah+Harapan+Sukamaju"
    }
  ]
};

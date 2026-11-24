/**
 * LokaKarya — interaksi landing page (Vanilla JS).
 * Data berasal dari assets/js/data.js (LOKAKARYA_DATA).
 */
document.addEventListener('DOMContentLoaded', () => {
  const data = LOKAKARYA_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const ICON_PIN = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>';
  const ICON_CLOCK = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const ICON_ARROW = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Manfaat ---------- */
  $('#benefits').innerHTML = data.benefits.map(b => `
    <div class="col-md-4">
      <article class="benefit-card">
        <span class="benefit-icon"><img src="${b.icon}" alt="" width="20" height="20"></span>
        <div><h3>${b.title}</h3><p>${b.description}</p></div>
      </article>
    </div>`).join('');

  /* ---------- Carousel produk di hero ---------- */
  const heroEl = $('#heroCarousel');
  const heroSlides = $('#heroSlides');
  const heroDots = $('#heroDots');
  const heroPauseBtn = $('#heroPause');
  const heroProducts = data.heroProductIds
    .map(id => data.products.find(p => p.id === id))
    .filter(Boolean);

  heroSlides.innerHTML = heroProducts.map((p, i) => `
    <div class="carousel-item${i === 0 ? ' active' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} dari ${heroProducts.length}">
      <div class="hero-slide">
        <img src="${p.image}" alt="${p.name} dari ${p.materials.toLowerCase()}" width="564" height="564"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>
        <div class="hero-caption">
          <div>
            <span class="tag">${p.category}</span>
            <h3>${p.name}</h3>
            <span class="hero-price">${p.priceFormatted.replace('Rp', 'Rp ')}</span>
          </div>
          <a href="#katalog-produk" data-category="${p.category}">Lihat di katalog</a>
        </div>
      </div>
    </div>`).join('');

  heroDots.innerHTML = heroProducts.map((p, i) => `
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}" aria-label="Tampilkan ${p.name}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('');

  if (window.bootstrap && heroProducts.length > 1) {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // pause:false → jeda saat hover/fokus diatur manual agar tombol jeda pengguna tidak tertimpa.
    const heroCarousel = new bootstrap.Carousel(heroEl, { interval: 4000, ride: false, pause: false, touch: true, wrap: true });
    let pausedByUser = reduceMotion; // Bila pengguna mengurangi animasi, jangan berganti otomatis.

    const updatePauseButton = () => {
      heroPauseBtn.setAttribute('aria-pressed', pausedByUser);
      heroPauseBtn.setAttribute('aria-label', pausedByUser ? 'Lanjutkan pergantian otomatis' : 'Jeda pergantian otomatis');
      heroSlides.setAttribute('aria-live', pausedByUser ? 'polite' : 'off');
    };
    const resume = () => { if (!pausedByUser) heroCarousel.cycle(); };

    heroPauseBtn.addEventListener('click', () => {
      pausedByUser = !pausedByUser;
      updatePauseButton();
      if (pausedByUser) heroCarousel.pause(); else heroCarousel.cycle();
    });
    heroEl.addEventListener('mouseenter', () => heroCarousel.pause());
    heroEl.addEventListener('mouseleave', resume);
    heroEl.addEventListener('focusin', () => heroCarousel.pause());
    heroEl.addEventListener('focusout', e => { if (!heroEl.contains(e.relatedTarget)) resume(); });

    heroEl.addEventListener('slide.bs.carousel', e => {
      $$('button', heroDots).forEach((dot, i) => {
        if (i === e.to) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    });

    updatePauseButton();
    resume();
  } else {
    // Tanpa Bootstrap JS (mis. CDN gagal): tampilkan slide pertama saja, sembunyikan kontrol.
    $$('.hero-nav, .hero-carousel-bar', heroEl).forEach(el => { el.hidden = true; });
  }

  /* ---------- Katalog produk ---------- */
  const PAGE_SIZE = 4;
  const productGrid = $('#products');
  const filterGroup = $('#productFilters');
  const loadMoreBtn = $('#loadMore');
  let activeCategory = 'Semua';
  let visibleCount = PAGE_SIZE;

  const waLink = text => `https://wa.me/${data.meta.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

  filterGroup.innerHTML = data.categories.map(c => `
    <button type="button" class="chip" data-category="${c.name}" aria-pressed="${c.name === activeCategory}">${c.name}</button>`).join('');

  function setCategory(name) {
    activeCategory = name;
    visibleCount = PAGE_SIZE;
    $$('.chip', filterGroup).forEach(chip => chip.setAttribute('aria-pressed', chip.dataset.category === name));
    renderProducts();
  }

  // Screen reader cukup mendengar ringkasan hasil, bukan seluruh isi grid dibacakan ulang.
  const productStatus = $('#productStatus');
  const announce = text => { productStatus.textContent = text; };

  function renderProducts({ silent = false } = {}) {
    const list = activeCategory === 'Semua'
      ? data.products
      : data.products.filter(p => p.category === activeCategory);
    const shown = Math.min(visibleCount, list.length);
    if (!silent) {
      announce(list.length
        ? `Menampilkan ${shown} dari ${list.length} produk kategori ${activeCategory}.`
        : `Belum ada produk pada kategori ${activeCategory}.`);
    }

    if (!list.length) {
      productGrid.innerHTML = `
        <div class="col-12"><div class="empty-state">
          <p>Belum ada produk pada kategori ini.</p>
          <button type="button" class="btn btn-outline-primary" data-reset-products>Tampilkan semua produk</button>
        </div></div>`;
      loadMoreBtn.hidden = true;
      return;
    }

    productGrid.innerHTML = list.slice(0, visibleCount).map(p => `
      <div class="col-6 col-lg-3">
        <article class="product-card">
          <div class="product-media">
            <img src="${p.image}" alt="${p.name} dari ${p.materials.toLowerCase()}" loading="lazy" width="564" height="564">
          </div>
          <div class="product-info">
            <span class="tag">${p.category}</span>
            <h3>${p.name}</h3>
            <p class="material">Bahan: ${p.materials}</p>
            <strong class="price">${p.priceFormatted.replace('Rp', 'Rp ')}</strong>
            <a class="btn btn-wa" href="${waLink(p.whatsappText)}" target="_blank" rel="noopener">Beli via WhatsApp</a>
            ${p.marketplaceUrl ? `<a class="link-market" href="${p.marketplaceUrl}" target="_blank" rel="noopener">Lihat di Marketplace</a>` : ''}
          </div>
        </article>
      </div>`).join('');

    loadMoreBtn.hidden = visibleCount >= list.length;
  }

  filterGroup.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) setCategory(chip.dataset.category);
  });
  productGrid.addEventListener('click', e => {
    if (e.target.closest('[data-reset-products]')) setCategory('Semua');
  });
  loadMoreBtn.addEventListener('click', () => {
    const firstNew = visibleCount;
    visibleCount += PAGE_SIZE;
    renderProducts();
    // Pindahkan fokus ke produk pertama yang baru dimuat (aksesibilitas keyboard).
    const newCard = productGrid.children[firstNew];
    if (newCard) $('a', newCard)?.focus({ preventScroll: true });
  });
  renderProducts({ silent: true });

  // Tombol "Lihat di katalog" di carousel ikut menyaring katalog ke kategori produk itu.
  heroSlides.addEventListener('click', e => {
    const link = e.target.closest('a[data-category]');
    if (link) setCategory(link.dataset.category);
  });

  /* ---------- Direktori bank sampah ---------- */
  const locationList = $('#locations');
  const pinLayer = $('#mapPins');
  const searchInput = $('#locationSearch');
  const typeFilter = $('#locationFilter');
  let activeLocationId = null;

  function setActiveLocation(id) {
    activeLocationId = id;
    $$('.location-card', locationList).forEach(card => card.classList.toggle('active', card.dataset.id === id));
    $$('.map-pin', pinLayer).forEach(pin => {
      const on = pin.dataset.id === id;
      pin.classList.toggle('active', on);
      pin.setAttribute('aria-pressed', on);
    });
  }

  function renderLocations() {
    const query = searchInput.value.trim().toLowerCase();
    const type = typeFilter.value;
    const list = data.dropPoints.filter(x =>
      (!query || `${x.name} ${x.address}`.toLowerCase().includes(query)) &&
      (!type || x.acceptedWasteTypes.includes(type)));

    $('#locationCount').textContent = `${list.length} lokasi ditemukan`;

    locationList.innerHTML = list.length ? list.map(x => `
      <article class="location-card" tabindex="0" data-id="${x.id}">
        <span class="loc-num" aria-hidden="true">${x.number}</span>
        <div>
          <h4><span class="visually-hidden">Lokasi ${x.number}: </span>${x.name}</h4>
          <div class="loc-tags">${x.acceptedWasteTypes.map(t => `<span>${t}</span>`).join('')}</div>
          <p class="loc-meta">${ICON_PIN}<span>${x.address}</span></p>
          <p class="loc-meta">${ICON_CLOCK}<span>${x.operatingHours}</span></p>
        </div>
        <a class="loc-go" href="${x.mapsUrl}" target="_blank" rel="noopener" aria-label="Buka ${x.name} di Google Maps">${ICON_ARROW}</a>
      </article>`).join('') : `
      <div class="empty-state">
        <p>Lokasi tidak ditemukan. Coba ubah kata kunci atau filter.</p>
        <button type="button" class="btn btn-outline-primary" data-reset-locations>Hapus pencarian &amp; filter</button>
      </div>`;

    pinLayer.innerHTML = list.map(x => `
      <button type="button" class="map-pin" data-id="${x.id}" style="top:${x.pinPosition.top};left:${x.pinPosition.left}"
        aria-label="Pilih ${x.name}" aria-pressed="false"><span>${x.number}</span></button>`).join('');

    setActiveLocation(activeLocationId);
  }

  searchInput.addEventListener('input', renderLocations);
  typeFilter.addEventListener('change', renderLocations);

  locationList.addEventListener('click', e => {
    if (e.target.closest('[data-reset-locations]')) {
      searchInput.value = '';
      typeFilter.value = '';
      renderLocations();
      searchInput.focus();
      return;
    }
    if (e.target.closest('a')) return;
    const card = e.target.closest('.location-card');
    if (card) setActiveLocation(card.dataset.id);
  });
  locationList.addEventListener('keydown', e => {
    const card = e.target.closest('.location-card');
    if (card && e.target === card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setActiveLocation(card.dataset.id);
    }
  });
  pinLayer.addEventListener('click', e => {
    const pin = e.target.closest('.map-pin');
    if (!pin) return;
    setActiveLocation(pin.dataset.id);
    $(`.location-card[data-id="${pin.dataset.id}"]`, locationList)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  // Fallback peta: daftar tetap bisa dipakai bila gambar peta gagal dimuat.
  const mapImg = $('.map-box > img');
  const markMapBroken = () => $('.map-box').classList.add('is-broken');
  mapImg.addEventListener('error', markMapBroken);
  if (mapImg.complete && mapImg.naturalWidth === 0) markMapBroken();

  renderLocations();

  /* ---------- Form setor sampah ---------- */
  const form = $('#depositForm');
  const status = $('#formStatus');
  const dateInput = $('#depositDate');
  const wasteSelect = $('#wasteType');
  const destSelect = $('#destination');

  // Tanggal minimum = hari ini menurut zona waktu lokal (bukan UTC).
  const now = new Date();
  dateInput.min = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');

  // Lokasi tujuan hanya yang menerima jenis sampah terpilih (PRD §10).
  function renderDestinations() {
    const type = wasteSelect.value;
    const previous = destSelect.value;
    const list = type ? data.dropPoints.filter(x => x.acceptedWasteTypes.includes(type)) : data.dropPoints;
    destSelect.innerHTML = '<option value="">Pilih lokasi tujuan</option>' +
      list.map(x => `<option value="${x.id}">${x.name}</option>`).join('');
    if (list.some(x => x.id === previous)) destSelect.value = previous;
  }
  wasteSelect.addEventListener('change', renderDestinations);
  renderDestinations();

  // Nomor WhatsApp boleh diketik dengan spasi, tanda hubung, titik, atau kurung (mis. "0812 3456 7890");
  // dibersihkan dulu sebelum dicocokkan dengan pola di atribut pattern.
  const phoneInput = $('#whatsapp');
  const normalizePhone = () => { phoneInput.value = phoneInput.value.replace(/[\s.()-]/g, ''); };
  phoneInput.addEventListener('blur', normalizePhone);

  form.addEventListener('submit', e => {
    e.preventDefault();
    normalizePhone();
    status.className = 'status';
    status.textContent = '';

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      status.classList.add('error');
      status.textContent = 'Periksa kembali kolom yang ditandai.';
      $(':invalid', form)?.focus();
      return;
    }

    status.classList.add('success');
    status.textContent = 'Pendaftaran simulasi diterima. Pengelola akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal dan ketersediaan penjemputan.';
    form.reset();
    form.classList.remove('was-validated');
    renderDestinations();
  });

  /* ---------- Navigasi: tanda section aktif ---------- */
  const navLinks = $$('.nav-links .nav-link');
  const sections = navLinks.map(link => $(link.getAttribute('href'))).filter(Boolean);

  function markActive(id) {
    navLinks.forEach(link => {
      const on = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', on);
      if (on) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) markActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => sectionObserver.observe(s));
  }
  markActive('beranda');

  // Tutup menu mobile setelah memilih tautan.
  const navMenu = $('#navmenu');
  navMenu.addEventListener('click', e => {
    if (e.target.closest('a') && navMenu.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });

  /* ---------- Animasi masuk ringan ---------- */
  const revealTargets = $$('.benefit-card, .section-heading, .map-box, .benefit-panel');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });
  }
});

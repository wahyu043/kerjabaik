# KerjaBaik Website Changelog

## v5.0.0 – 2025-09-07

### Diperbarui – Homepage Refactor Layout & Animation

- Integrasi **AOS (Animate On Scroll)** di homepage.
- Hero section: animasi fade-up pada heading & subtext, zoom-in pada tombol CTA.
- Services section: update pakai **Lucide icons**, garis accent di subjudul, animasi fade-up staggered pada tiap card.
- Clients section: logo dengan efek grayscale → full color saat hover, animasi zoom-in staggered.
- Why Choose KerjaBaik: layout zig-zag (gambar kiri, teks kanan), efek hover overlay abu-abu + zoom tipis, 4 value props dengan icon (`award`, `users`, `lightbulb`, `handshake`).
- About Snapshot: layout zig-zag (gambar kanan, teks kiri), efek hover overlay abu-abu + zoom tipis, tombol _Learn more_.
- Blog Snapshot: heading kiri, grid 3 card, hover fade + zoom, CTA “View all insights”.
- CTA Section: senada dengan halaman About (background gradient gelap, accent line, tombol gradient).
- Konsistensi heading h2: ditambahkan garis accent bawah (opsional kiri/tengah) untuk section utama (Services, Why, About, Blog).

### Catatan

- Seluruh section homepage sekarang konsisten dengan halaman lain dari segi animasi & gaya visual.
- Next target: refactor halaman **Services**.

## v4.0.0 – 2025-09-06

### Ditambahkan - Halaman Contact

- File baru `contact.html` dengan struktur lengkap:
  - Navbar konsisten (3 menu utama: Services, About Us, Blog).
  - Hero section dengan background image + overlay + animasi AOS.
  - Contact Info section (alamat, email, WhatsApp) + Google Maps embed.
  - Contact Form modern (input rounded, focus glow, tombol gradient).
  - CTA WhatsApp section dengan tombol direct chat.
  - Footer konsisten dengan halaman lain.

### Diperbarui

- Konsistensi layout & animasi di semua halaman (Services, About, Contact).
- Penyesuaian warna aksen agar seragam antar halaman.

### Catatan

- Semua halaman utama (Home, Services, About, Contact) sudah selesai.
- Target berikutnya: `blog.html`.

## v3.0.0 – 2025-09-06

### Ditambahkan - Halaman About

- File baru `about.html` dengan struktur lengkap:
  - Navbar konsisten dengan homepage & services.
  - Hero section dengan background image + overlay.
  - Company Story section dengan layout 2 kolom (image + narasi sejarah).
  - Founder Highlight section (profil Cahya Maulana) dengan layout berganti arah.
  - Vision & Mission section dengan background dark elegan + icon list.
  - Our Team section dengan grid interaktif (hover + animasi).
  - CTA section yang lebih menonjol dengan gradient accent & efek hover.
  - Footer konsisten dengan halaman lain.

### Diperbarui

- Penambahan animasi scroll (AOS) di seluruh section.
- Variasi warna antar section untuk menghindari monoton (white → neutral → dark → white).
- Penambahan efek hover interaktif pada gambar & team cards.

### Catatan

- Halaman About sudah selesai dan siap digunakan.
- Target berikutnya: `contact.html` (form, maps, dan detail kontak).

## v2.0.0 – 2025-09-06

### Ditambahkan - Halaman Services

- File baru `services.html` dengan struktur lengkap:
  - Navbar (konsisten dengan homepage).
  - Hero section dengan background image.
  - Intro section berisi overview layanan.
  - Core Services grid (Training, Consulting, Coaching, Digital Learning).
  - Key Training Topics dengan gaya divider + gambar sticky di kanan.
  - Delivery Models dalam bentuk box interaktif (hover menampilkan gambar + deskripsi) dengan ikon Lucide.
  - CTA section dengan tombol solid yang lebih menonjol.
  - Footer dengan tahun otomatis update.

### Diperbarui

- Penggunaan ikon konsisten dengan **Lucide** (di-set global).
- Tombol CTA didesain ulang agar lebih kuat secara visual.
- Copywriting di beberapa section disesuaikan untuk nada bahasa yang lebih profesional/enterprise.

### Catatan

- Halaman Services sudah selesai dan siap digunakan.
- Target berikutnya: `about.html` (cerita perusahaan, founder, visi & misi, serta tim).

## [v1.0.0] – 2025-09-03

### 🚀 Homepage KerjaBaik (Eleks Vibes, Tailwind)

#### Navbar & Hero

- Implemented sticky/glassy **Navbar** dengan menu utama (Services, Clients, About, Blog) + CTA Contact.
- Added **Hero Section**: fullscreen background dengan overlay gradient, headline besar, deskripsi singkat, dan 2 tombol CTA (Explore services, Contact us).

#### Services & Clients

- Built **Services Section**: grid 4 card layanan utama (Training, Consulting, Coaching, Digital Learning) dengan efek hover interaktif.
- Added **Clients Section**: judul _Trusted by leading organizations_ + deretan logo klien dengan efek grayscale → full color saat hover. Ukuran logo ditingkatkan (`max-h-24`).

#### Why Choose Us & About Snapshot

- Implemented **Why Choose Us Section**: grid 4 value proposition (Human-Centered, Data-Informed, Practical, Scalable).
- Added **About Snapshot Section**: layout 2 kolom (gambar tim + teks), tombol _Learn more_ menuju halaman About. Narasi disesuaikan (tanpa eksplisit menyebut Gen Z).

#### Blog/Insights

- Built **Blog/Insights Section**: grid 3 card artikel dengan gambar, kategori, judul, snippet, dan link _Read more_.
- Judul section: _Insights & Resources_.

#### CTA & Footer

- Added **CTA Section**: background gelap (`bg-neutral-900`), headline ajakan + deskripsi singkat, tombol besar _Get in Touch_.
- Completed **Footer**: logo + tagline, kolom Navigation, kolom Contact (alamat, email, WhatsApp), dan kolom Social (LinkedIn, Instagram, Twitter) dengan **icon SVG rounded** + hover modern. Tambahan copyright.

---

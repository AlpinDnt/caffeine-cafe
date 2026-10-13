# SPEC — Caffeine Landing Page

## Tujuan
Landing page satu halaman untuk memperkenalkan caffe "Caffeine": kenalkan cafe, tampilkan menu makanan & minuman, dan arahkan pengunjung ke lokasi (Google Maps).

## Halaman
Hanya `/` (single-page scroll).

## Urutan section
1. Navbar — Logo "Caffeine" (badge hitam), pill navigasi hitam melayang (Beranda/Tentang/Menu/Lokasi) + CTA pill "Lihat Menu"; transparan di atas hero, blur saat scroll
2. Hero — Light terpusat (bukan full-bleed): badge pill hitam, eyebrow uppercase, headline besar 2 baris, subcopy, CTA putih border hitam hard-shadow + garis jaminan jam buka; 4 kartu polaroid foto menu miring mengambang di sisi (desktop saja)
3. Tentang — Eyebrow + headline filosofi ("Kafein Membangunkan, Suasana Menenangkan."), 3 paragraf (makna nama, biji & seduhan, ruang sebagai jeda) + 3 kartu nilai (Biji Arabika, Diseduh Manual, Ruang Nyaman)
4. Menu — Carousel horizontal (geser kiri-kanan, tombol panah, drag/swipe) berisi card menu (makanan & minuman)
5. Lokasi — Alamat, jam buka, kontak, tombol "Petunjuk Arah" (link Google Maps), iframe Google Maps embed
6. Footer — Logo, info singkat, link, copyright

## Data yang dipakai (dummy dulu)
### Menu (6–8 item)
- Espresso — Minuman — Rp 28.000 — "Shot espresso klasik"
- Caffè Latte — Minuman — Rp 32.000 — "Espresso + susu steamed"
- Cappuccino — Minuman — Rp 32.000 — "Espresso + foam tebal"
- Matcha Latte — Minuman — Rp 35.000 — "Matcha premium + susu"
- Croissant — Makanan — Rp 25.000 — "Buttery flaky croissant"
- Banana Bread — Makanan — Rp 28.000 — "Moist banana bread"
- Chicken Sandwich — Makanan — Rp 38.000 — "Grain bread, ayam, sayur"
- Classic Tiramisu — Makanan — Rp 35.000 — "Klasik Italia"

### Lokasi
- Alamat: Jl. Senopati No. 42, Jakarta Selatan
- Jam buka: Senin–Jumat 07.00–22.00 | Sabtu–Minggu 08.00–23.00
- Kontak: +62 812-3456-7890 | hello@caffeine.id
- Google Maps (embed dummy): https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan&output=embed

## Fitur
- Smooth scroll via nav link
- Menu carousel (horizontal scroll-snap) + prev/next button + drag/swipe (shadcn/ui carousel)
- Hero full-bleed (cover, centered)
- Maps embed (iframe, lazy-load)
- "Petunjuk Arah" buka Google Maps di tab baru
- CTA "Lihat Menu" scroll ke #menu
- Responsive (desktop + mobile)
- Aksesibilitas dasar (alt text, aria-label tombol)

## Out of scope
- Multi-halaman (/menu terpisah)
- Filter kategori / search
- Online order / payment / cart
- Dark-mode full (hanya section Lokasi yang dark)

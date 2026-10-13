# DESIGN — Caffeine Landing Page

## Font
- family: 'commuters-sans', sans-serif (sesuai permintaan)

## Warna (light + abu + hitam)
- background-primary: `#F5F1EB` (terang lembut)
- background-alt: `#EDE8DF` (abu sangat muda)
- surface: `#FFFFFF`
- foreground: `#111111` (hitam)
- muted: `#6B7280` (abu)
- border: `#E5E0D8` (abu krem)
- accent/cta: `#111111`
- location-bg: `#111111` (section Lokasi — dark seperti Image 3)
- location-foreground: `#FFFFFF`

## Layout
- max-width: container 7xl/1280px
- section padding: py-16 (desktop), py-12 (mobile)
- spacing: gap-6, gap-8, gap-10, gap-12

## Hero
- full viewport `min-h-[100vh]`
- foto kopi latte-art full-bleed, object-cover, center
- overlay: black `30–40%` (bg-black/40)
- heading h1: 5xl–6xl (desktop), 3xl–4xl (mobile), bold
- sub: text-lg, muted
- CTA: black bg-white/white? pakai primary black (#111111) bg-foreground text-white + outline white untuk kontras
- scroll indicator: panah bawah, subtle fade-in

## Card Menu (carousel)
- border radius: `rounded-2xl` (sesuai referensi Image 2)
- aspect ratio: 4:3 (foto)
- shadow: `shadow-sm`
- padding: p-4
- nama: text-lg font-medium
- deskripsi: text-sm text-muted
- harga: font-semibold
- gap antar card: gap-6
- snap: scroll-snap-type x mandatory, snap-center/item
- tombol panah: outline/ghost, rounded-full

## Lokasi & Maps
- background location-bg (#111111), teks putih
- grid 2 kolom (kiri info, kanan maps) desktop, stack mobile
- maps: iframe full width/height, rounded-xl, border 0
- tombol "Petunjuk Arah": outline putih / solid putih sesuai kontras

## Tipografi (usulan)
- H1: text-5xl/6xl md:text-6xl font-bold tracking-tight
- H2: text-3xl md:text-4xl font-semibold
- H3: text-xl md:text-2xl font-medium
- Body: text-base leading-relaxed
- Small: text-sm text-muted-foreground

## Aksesibilitas
- alt gambar descriptif
- aria-label tombol panah carousel
- focus-visible ring
- kontras heading/CTA cukup

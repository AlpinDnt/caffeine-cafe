# DESIGN — Caffeine Landing Page

## Font
- stack: 'commuters-sans', 'Inter' (Google Fonts di index.html), sans-serif (sesuai permintaan; commuters-sans komersial — aktif otomatis kalau terinstal/lisensi tersedia, fallback Inter)

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

## Navbar
- fixed, transparan di atas hero; saat scroll >24px jadi bg light blur + border bawah
- logo: bold "Caffe" + badge hitam "ine" (putih)
- link: pill hitam rounded-full, teks putih uppercase text-xs tracking-wider (hidden di mobile)
- CTA: pill hitam "LIHAT MENU" + lingkaran panah putih

## Hero
- background light `#F5F1EB` + lingkaran radial `#EDE8DF` besar di tengah (bukan foto full-bleed)
- terpusat, max-w-3xl: badge pill hitam (ikon + teks) → eyebrow uppercase tracking lebar → H1 5xl/7xl bold tracking-tight 2 baris → subcopy abu max-w-xl → CTA putih border-2 hitam + hard shadow + kotak panah hitam → garis kecil jaminan (ikon + teks)
- kartu polaroid: foto menu 1:1, frame putih, border-2 hitam, hard shadow, caption nama, rotate bervariasi, absolute di 4 sisi — tampil hanya di desktop (`hidden lg:block`)
- catatan italic miring + ikon panah (desktop saja)

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
- tema terang `#EDE8DF` selaras section lain (tidak lagi dark)
- header terpusat (eyebrow + headline + subcopy), grid info + peta
- kartu info putih border-2 hitam hard-shadow + ikon; tombol CTA hitam
- maps: iframe border-2 hitam rounded-2xl hard-shadow, tinggi penuh kolom

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

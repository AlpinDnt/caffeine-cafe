# AGENTS.md — Aturan Proyek Caffeine Landing Page

## Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS v4
- UI: shadcn/ui (button, carousel)
- Font: commuters-sans (CDN/Google Fonts atau local), sans-serif

## Lokasi file
- Halaman: `src/app/page.tsx`
- Komponen: `src/components/{navbar,hero,about,menu-carousel,location,footer}.tsx`
- Data: `src/data/menu.ts`
- UI primitives: `src/components/ui/*` (shadcn generated)
- Styles: `src/app/globals.css`
- Docs: `SPEC.md`, `DESIGN.md`, `AGENTS.md`

## Acuan
- Selalu baca `SPEC.md` dan `DESIGN.md` sebelum menulis/mengedit kode.
- Patuhi urutan section, data dummy, fitur, warna, font, spacing, radius, shadow sesuai DESIGN.md.

## Aturan kerja per sesi
- Kerjakan **1 section atau 1 fitur per sesi**. Contoh: sesi 1 = Navbar + Hero.
- Setelah implementasi → buka halaman & screenshot via **Playwright MCP**.
- Beri **kritik spesifik** (kontras heading kurang, jarak antar section terlalu rapat, typo, padding, dll).
- Perbaiki hanya yang relevan. Hanya commit ke git kalau hasil sudah **benar** (sesuai SPEC/DESIGN + kritik teratasi).
- Commit atomic: satu pesan commit menjelaskan section/fitur + ringkas.

## Git
- Sudah `git init`. Gunakan commit teratur (setelah tiap sesi lolos cek).
- Jangan langsung push. Fokus lokal dulu.

## Kualitas
- TypeScript strict, import alias `@/*`.
- Responsive mobile-first.
- Aksesibilitas dasar (alt, aria-label).
- Minimal code: YAGNI, stdlib/native first.
- Hindari abstraksi berlebihan.

## Playwright MCP
- Pasang (sudah diminta) untuk screenshot + quick check (console error, visibilitas section, CTA klik).
- Gunakan untuk validasi visual sebelum commit.

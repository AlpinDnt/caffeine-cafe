# AGENTS.md — Aturan Proyek Caffeine Landing Page

## Stack
- Build tool: Vite 7 + React 19 + TypeScript (bukan Next.js — dimigrasi karena dev server Next exit sendiri di mesin ini)
- Styling: Tailwind CSS v4 (via @tailwindcss/vite)
- UI: komponen gaya shadcn/ui (button, carousel; tanpa Next)
- Font: "commuters-sans" pertama di stack, fallback Inter (Google Fonts), sans-serif

## Lokasi file
- Entry HTML: `index.html`
- Entry React: `src/main.tsx`
- Komposisi halaman: `src/App.tsx`
- Komponen: `src/components/{navbar,hero,about,menu-carousel,best-sellers,location,footer}.tsx`
- Data: `src/data/menu.ts`
- UI primitives: `src/components/ui/*`
- Styles: `src/index.css`
- Config: `vite.config.ts` (alias `@/*` → `src/*`, dev port 3000)
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

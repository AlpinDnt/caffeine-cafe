export default function Footer() {
  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F5F1EB] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Caffeine
        </a>
        <div className="flex gap-6 text-sm text-[#6B7280]">
          <a href="#hero" className="hover:text-[#111111]">Hero</a>
          <a href="#tentang" className="hover:text-[#111111]">Tentang</a>
          <a href="#menu" className="hover:text-[#111111]">Menu</a>
          <a href="#lokasi" className="hover:text-[#111111]">Lokasi</a>
        </div>
        <p className="text-xs text-[#6B7280]">
          © {new Date().getFullYear()} Caffeine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

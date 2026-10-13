export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F5F1EB]/90 backdrop-blur border-b border-[#E5E0D8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-semibold tracking-tight">
          Caffeine
        </a>
        <div className="hidden gap-8 text-sm md:flex">
          <a href="#hero" className="hover:opacity-70">Hero</a>
          <a href="#tentang" className="hover:opacity-70">Tentang</a>
          <a href="#menu" className="hover:opacity-70">Menu</a>
          <a href="#lokasi" className="hover:opacity-70">Lokasi</a>
        </div>
        <a href="#menu" className="md:hidden text-sm font-medium">Menu</a>
      </nav>
    </header>
  );
}

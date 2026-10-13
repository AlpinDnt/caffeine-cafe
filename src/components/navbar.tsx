import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#hero", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-[#E5E0D8] bg-[#F5F1EB]/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-[#111111]"
        >
          Caffe
          <span className="ml-1 rounded-md bg-[#111111] px-2 py-0.5 text-white">
            ine
          </span>
        </a>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full bg-[#111111] p-1.5 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-xs font-semibold tracking-wider text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
          </div>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] py-1.5 pl-5 pr-1.5 text-xs font-semibold tracking-wider text-white transition hover:opacity-90"
          >
            LIHAT MENU
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111111]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

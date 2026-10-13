import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#hero", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F5F1EB] px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-[#111111]"
        >
          Caffe
          <span className="ml-1 rounded-md bg-[#111111] px-2 py-0.5 text-white">
            ine
          </span>
        </a>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <div className="flex items-center gap-1 rounded-full bg-[#111111] p-1.5">
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
        <p className="text-sm text-[#6B7280]">
          Kafein Membangunkan, Suasana Menenangkan.
        </p>
        <div className="w-full border-t border-[#E5E0D8] pt-6 text-xs text-[#6B7280]">
          © {new Date().getFullYear()} Caffeine • Jl. Senopati No. 42, Jakarta
          Selatan
        </div>
      </div>
    </footer>
  );
}

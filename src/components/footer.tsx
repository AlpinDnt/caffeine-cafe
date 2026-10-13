import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const explore = [
  { href: "#hero", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#terlaris", label: "Terlaris" },
  { href: "#lokasi", label: "Lokasi" },
];

const hours = [
  "Senin – Jumat",
  "07.00 – 22.00 WIB",
  "Sabtu – Minggu",
  "08.00 – 23.00 WIB",
];

const socials = [
  { href: "mailto:hello@caffeine.id", label: "Email Caffeine", Icon: Mail },
  { href: "https://wa.me/6281234567890", label: "WhatsApp Caffeine", Icon: MessageCircle },
  { href: "tel:+6281234567890", label: "Telepon Caffeine", Icon: Phone },
  { href: "https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan", label: "Lokasi Caffeine", Icon: MapPin },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div
        aria-hidden
        className="absolute -top-32 left-[8%] h-96 w-96 rounded-full bg-[#EDE8DF]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-white"
            >
              Caffe
              <span className="ml-1 rounded-md bg-white px-2 py-0.5 text-[#111111]">
                ine
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Kafein Membangunkan, Suasana Menenangkan. Kopi spesialti dan
              ruang nyaman di jantung Jakarta Selatan.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white">
              JELAJAHI
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white">
              JAM BUKA
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white">
              HUBUNGI KAMI
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a
                  href="mailto:hello@caffeine.id"
                  className="transition hover:text-white"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>Senopati, Jakarta</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 py-6">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Caffeine
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/60 transition hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="h-[12vw] overflow-hidden">
        <p className="whitespace-nowrap text-center text-[17vw] font-bold leading-none tracking-tight text-white">
          CAFFEINE
        </p>
      </div>
    </footer>
  );
}

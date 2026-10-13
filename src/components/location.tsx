import { Clock, MapPin, Navigation, Phone } from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Alamat Outlet",
    desc: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, 12190",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    desc: "Senin – Jumat: 07.00 – 22.00 WIB, Sabtu – Minggu: 08.00 – 23.00 WIB",
  },
  {
    icon: Phone,
    title: "Reservasi & Kontak",
    desc: "+62 812-3456-7890 • hello@caffeine.id",
  },
];

export default function Location() {
  return (
    <section
      id="lokasi"
      className="flex min-h-screen scroll-mt-16 items-center bg-[#EDE8DF] px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#111111]">
            LOKASI & JAM BUKA
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Mampir, Yuk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            Gampang ditemukan, gampang dijangkau. Klik peta untuk membuka
            petunjuk arah ke outlet kami.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {info.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border-2 border-[#111111] bg-white p-5 shadow-[4px_4px_0_0_#111111]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <span>
                  <h3 className="font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                    {item.desc}
                  </p>
                </span>
              </div>
            ))}
            <a
              href="https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#111111] bg-[#111111] px-6 py-3 text-sm font-bold tracking-wide text-white shadow-[4px_4px_0_0_rgba(17,17,17,0.25)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(17,17,17,0.25)]"
            >
              <Navigation className="h-4 w-4" />
              Petunjuk Arah (Google Maps)
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-[#111111] bg-white shadow-[4px_4px_0_0_#111111] lg:col-span-3">
            <iframe
              src="https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan&output=embed"
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi Caffeine"
              className="h-[320px] w-full border-0 lg:h-full lg:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

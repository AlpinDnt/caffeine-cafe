import { Armchair, Clock, Coffee } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Biji Arabika Pilihan",
    desc: "Dari petani lokal, disangrai medium agar manis alaminya keluar.",
  },
  {
    icon: Clock,
    title: "Diseduh Manual",
    desc: "Cangkir demi cangkir, tanpa terburu-buru, tanpa jalan pintas.",
  },
  {
    icon: Armchair,
    title: "Ruang yang Nyaman",
    desc: "Untuk kerja fokus, ngobrol lama, atau duduk sendiri menikmati sore.",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      className="flex min-h-screen scroll-mt-16 items-center bg-[#F5F1EB] px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-left">
          <p className="text-base font-bold tracking-[0.2em] text-[#111111] md:text-lg">
            TENTANG CAFFEINE
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
            Kafein Membangunkan,
            <br />
            Suasana Menenangkan.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-[#6B7280]">
            <p>
              Caffeine lahir dari keyakinan sederhana: secangkir kopi yang baik
              bisa mengubah ritme harimu. Nama kami diambil dari kafein —
              senyawa yang membangunkan — karena kami ingin setiap kunjungan
              memberimu energi baru, bukan sekadar minuman.
            </p>
            <p>
              Kami memakai 100% biji arabika pilihan dari petani lokal,
              disangrai medium, dan diseduh manual cangkir demi cangkir.
              Filosofi kami: tidak ada yang perlu diburu-burukan dari hal yang
              dibuat dengan teliti.
            </p>
            <p>
              Ruang kami dirancang sebagai jeda di tengah hari yang padat.
              Datang sebagai tamu, pulang sebagai teman.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex items-start gap-4 rounded-2xl border-2 border-[#111111] bg-white p-6 text-left shadow-[4px_4px_0_0_#111111]"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                <v.icon className="h-5 w-5" />
              </span>
              <span>
                <h3 className="text-lg font-semibold text-[#111111]">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                  {v.desc}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

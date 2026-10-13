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
      className="scroll-mt-16 bg-[#F5F1EB] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#111111]">
          TENTANG CAFFEINE
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
          Kafein Membangunkan,
          <br />
          Suasana Menenangkan.
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 leading-relaxed text-[#6B7280]">
          <p>
            Caffeine lahir dari keyakinan sederhana: secangkir kopi yang baik
            bisa mengubah ritme harimu. Nama kami diambil dari kafein — senyawa
            yang membangunkan — karena kami ingin setiap kunjungan memberimu
            energi baru, bukan sekadar minuman.
          </p>
          <p>
            Kami memakai 100% biji arabika pilihan dari petani lokal, disangrai
            medium, dan diseduh manual cangkir demi cangkir. Filosofi kami:
            tidak ada yang perlu diburu-burukan dari hal yang dibuat dengan
            teliti.
          </p>
          <p>
            Ruang kami dirancang sebagai jeda di tengah hari yang padat.
            Datang sebagai tamu, pulang sebagai teman.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border-2 border-[#111111] bg-white p-6 text-left shadow-[4px_4px_0_0_#111111]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-white">
              <v.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-[#111111]">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

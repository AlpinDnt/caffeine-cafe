import { ArrowRight, BadgeCheck, Coffee, CornerUpRight } from "lucide-react";
import { menuItems } from "@/data/menu";

type FloatCard = {
  id: string;
  className: string;
};

const floatCards: FloatCard[] = [
  { id: "2", className: "left-[5%] top-[15%] -rotate-[8deg]" },
  { id: "5", className: "left-[9%] bottom-[13%] rotate-[6deg]" },
  { id: "3", className: "right-[5%] top-[21%] rotate-[10deg]" },
  { id: "8", className: "right-[8%] bottom-[11%] -rotate-[6deg]" },
];

export default function Hero() {
  const cards = floatCards.map((f) => ({
    ...f,
    item: menuItems.find((m) => m.id === f.id)!,
  }));

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F5F1EB] px-6 pb-24 pt-32 text-center md:pt-40"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDE8DF]"
      />

      {cards.map((c) => (
        <figure
          key={c.id}
          className={`absolute z-0 hidden w-48 rounded-xl border-2 border-[#111111] bg-white p-2 pb-3 text-left shadow-[6px_6px_0_0_#111111] lg:block ${c.className}`}
        >
          <img
            src={c.item.image}
            alt={c.item.name}
            className="aspect-square w-full rounded-lg object-cover"
            loading="eager"
          />
          <figcaption className="px-1 pt-2 text-xs font-semibold text-[#111111]">
            {c.item.name}
          </figcaption>
        </figure>
      ))}

      <div className="absolute bottom-[16%] right-[22%] z-0 hidden items-start gap-1 lg:flex">
        <p className="-rotate-6 text-sm italic text-[#6B7280]">
          Siapa yang bisa
          <br />
          nolak latte art ini?!
        </p>
        <CornerUpRight className="h-8 w-8 -scale-x-100 text-[#6B7280]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white">
          <Coffee className="h-3.5 w-3.5" />
          Diseduh dari Biji Pilihan
        </span>
        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[#111111]">
          SATU CANGKIR. SATU MOMEN. DINIKMATI.
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-[#111111] md:text-7xl">
          Kopi Enak,
          <br />
          Suasana Hangat.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6B7280] md:text-lg">
          Espresso, latte art, dan camilan fresh setiap hari. Tempat santai
          untuk kerja, ngobrol, atau sekadar menikmati sore.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-[#111111] bg-white px-6 py-3 text-sm font-bold tracking-wide text-[#111111] shadow-[4px_4px_0_0_#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#111111]"
          >
            LIHAT MENU
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#111111] text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#6B7280]">
          <BadgeCheck className="h-4 w-4 text-[#111111]" />
          Buka Setiap Hari • 07.00–22.00
        </p>
      </div>
    </section>
  );
}

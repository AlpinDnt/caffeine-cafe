import { Crown } from "lucide-react";
import { menuItems } from "@/data/menu";

function formatRp(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function BestSellers() {
  const items = menuItems
    .filter((m) => m.bestSellerRank !== undefined)
    .sort((a, b) => (a.bestSellerRank ?? 0) - (b.bestSellerRank ?? 0));

  return (
    <section
      id="terlaris"
      className="flex min-h-screen scroll-mt-16 items-center bg-[#F5F1EB] px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#111111]">
            MENU TERLARIS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Paling Sering Dipesan.
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-8">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="grid items-center gap-5 md:grid-cols-2 md:gap-10"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`h-44 w-full rounded-2xl border-2 border-[#111111] object-cover shadow-[4px_4px_0_0_#111111] md:h-52 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div
                className={`text-left ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                  <Crown className="h-3 w-3" />
                  Terlaris #{item.bestSellerRank}
                </span>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold text-[#111111] md:text-2xl">
                    {item.name}
                  </h3>
                  <p className="whitespace-nowrap font-bold text-[#111111]">
                    {formatRp(item.price)}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280] md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

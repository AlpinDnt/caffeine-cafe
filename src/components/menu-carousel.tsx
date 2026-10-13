import { MoveHorizontal, Star } from "lucide-react";
import { menuItems } from "@/data/menu";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function formatRp(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function MenuCarousel() {
  return (
    <section
      id="menu"
      className="relative flex min-h-screen scroll-mt-16 flex-col items-center justify-center overflow-hidden bg-[#EDE8DF] px-6 py-16 md:py-20"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-bold leading-none tracking-tight text-[#E5E0D8] md:text-[13rem]"
      >
        MENU
      </span>
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#111111]">
            MENU ANDALAN • {menuItems.length} PILIHAN
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Pilih Favoritmu.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            Diseduh dan dipanggang fresh setiap hari. Geser untuk menjelajah
            semuanya — yang berlabel Favorit paling sering dipesan ulang.
          </p>
        </div>
        <div className="relative mt-10">
          <Carousel opts={{ align: "start", loop: false }}>
            <CarouselContent className="-ml-6">
              {menuItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[80%] pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl border-2 border-[#111111] bg-white shadow-[4px_4px_0_0_#111111]">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#111111]">
                        {item.category}
                      </span>
                      {item.favorite && (
                        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#111111] px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                          <Star className="h-3 w-3" />
                          Favorit
                        </span>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[#111111]">
                          {item.name}
                        </h3>
                        <p className="whitespace-nowrap font-bold text-[#111111]">
                          {formatRp(item.price)}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-[#6B7280]">{item.desc}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="hidden md:flex"
              aria-label="Menu sebelumnya"
            />
            <CarouselNext
              className="hidden md:flex"
              aria-label="Menu berikutnya"
            />
          </Carousel>
          <p className="mt-6 inline-flex w-full items-center justify-center gap-2 text-xs font-medium tracking-wide text-[#6B7280]">
            <MoveHorizontal className="h-4 w-4" />
            Geser untuk melihat semua {menuItems.length} menu
          </p>
        </div>
      </div>
    </section>
  );
}

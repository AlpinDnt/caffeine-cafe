"use client";

import Image from "next/image";
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
    <section id="menu" className="scroll-mt-16 bg-[#EDE8DF] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Menu
        </h2>
        <div className="relative mt-10">
          <Carousel opts={{ align: "start", loop: false }}>
            <CarouselContent className="-ml-6">
              {menuItems.map((item) => (
                <CarouselItem key={item.id} className="basis-[80%] pl-6 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden rounded-2xl border-[#E5E0D8] bg-white shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="font-semibold">{formatRp(item.price)}</p>
                      </div>
                      <p className="mt-2 text-sm text-[#6B7280]">{item.desc}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" aria-label="Menu sebelumnya" />
            <CarouselNext className="hidden md:flex" aria-label="Menu berikutnya" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

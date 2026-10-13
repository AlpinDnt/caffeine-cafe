export default function Location() {
  return (
    <section id="lokasi" className="bg-[#111111] px-6 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Lokasi</h2>
          <div className="mt-6 space-y-4 text-white/90">
            <p>
              <span className="font-medium text-white">Alamat:</span>{" "}
              Jl. Senopati No. 42, Jakarta Selatan
            </p>
            <p>
              <span className="font-medium text-white">Jam Buka:</span>{" "}
              Senin–Jumat 07.00–22.00 | Sabtu–Minggu 08.00–23.00
            </p>
            <p>
              <span className="font-medium text-white">Kontak:</span>{" "}
              +62 812-3456-7890 | hello@caffeine.id
            </p>
          </div>
          <a
            href="https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            Petunjuk Arah
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=Jl.+Senopati+No.+42,+Jakarta+Selatan&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta lokasi Caffeine"
            className="h-[320px] w-full md:h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}

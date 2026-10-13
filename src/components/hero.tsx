export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1920&auto=format&fit=crop"
        alt="Latte art di cangkir kopi"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Caffeine
        </h1>
        <p className="mt-4 text-lg text-white/90 sm:text-xl">
          Kopi hangat, suasana tenang, momen yang layak dinikmati.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] shadow-sm transition hover:opacity-90"
          >
            Lihat Menu
          </a>
          <a
            href="#lokasi"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Petunjuk Arah
          </a>
        </div>
      </div>
      <a
        href="#tentang"
        aria-label="Scroll ke Tentang"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
      >
        ↓
      </a>
    </section>
  );
}

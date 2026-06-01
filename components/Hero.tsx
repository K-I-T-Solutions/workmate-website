import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Hintergrund-Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,145,0,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
        {/* Logo */}
        <div className="relative w-full max-w-3xl h-20 md:h-28 overflow-hidden rounded-sm">
          <Image
            src="/logo.png"
            alt="WORKMATE Logo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Badge */}
        <span
          className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
          style={{ borderColor: "#FF9100", color: "#FF9100" }}
        >
          Open Source — Rebrand 2026
        </span>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Der moderne
          <br />
          <span style={{ color: "#FF9100" }}>Arbeitsplatz.</span>
        </h1>

        {/* Subline */}
        <p
          className="text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ color: "#B3B3B3" }}
        >
          Kein Abo-Modell. Keine versteckten Kosten. WORKMATE ist eine offene
          Plattform für Teams, die ihre Tools selbst in der Hand haben wollen —
          von Zutrittskontrolle bis Event-Management.
        </p>

        {/* CTA */}
        <a
          href="#beta"
          className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black transition-all hover:scale-105"
          style={{ background: "#FF9100" }}
        >
          Beta-Zugang sichern
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Scroll-Hinweis */}
        <div
          className="mt-16 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
          style={{ color: "#444444" }}
        >
          <span>Scroll</span>
          <svg width="16" height="24" fill="none" viewBox="0 0 16 24">
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="#444444"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="8" r="2" fill="#444444" />
          </svg>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontakt — WORKMATE",
};

export default function Kontakt() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 max-w-3xl mx-auto px-6 py-24 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:text-orange"
          style={{ color: "#B3B3B3" }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zurück
        </Link>

        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Kontakt
        </h1>
        <p className="text-lg mb-16" style={{ color: "#B3B3B3" }}>
          Kein Formular-Labyrinth. Einfach direkt schreiben.
        </p>

        <div className="space-y-8">
          {/* E-Mail */}
          <a
            href="mailto:joshua@kit-it-koblenz.de"
            className="flex items-start gap-5 p-6 rounded-2xl border transition-colors hover:border-orange group"
            style={{ borderColor: "#444444" }}
          >
            <div
              className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,145,0,0.12)" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                  stroke="#FF9100"
                  strokeWidth="1.5"
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="#FF9100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#444444" }}>
                E-Mail
              </p>
              <p className="font-semibold text-white group-hover:text-orange transition-colors">
                joshua@kit-it-koblenz.de
              </p>
              <p className="text-xs mt-1" style={{ color: "#B3B3B3" }}>
                Antwort in der Regel innerhalb von 24 Stunden
              </p>
            </div>
          </a>

          {/* Telefon */}
          <a
            href="tel:+491741543053"
            className="flex items-start gap-5 p-6 rounded-2xl border transition-colors hover:border-orange group"
            style={{ borderColor: "#444444" }}
          >
            <div
              className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,145,0,0.12)" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="#FF9100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#444444" }}>
                Telefon
              </p>
              <p className="font-semibold text-white group-hover:text-orange transition-colors">
                +49 174 1543053
              </p>
            </div>
          </a>

          {/* Adresse */}
          <div
            className="flex items-start gap-5 p-6 rounded-2xl border"
            style={{ borderColor: "#444444" }}
          >
            <div
              className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,145,0,0.12)" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  stroke="#FF9100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="#FF9100" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#444444" }}>
                Adresse
              </p>
              <p className="font-semibold text-white">K.I.T. Solutions</p>
              <p className="text-sm mt-1" style={{ color: "#B3B3B3" }}>
                Dietzstr. 1, 56073 Koblenz
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

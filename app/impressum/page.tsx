import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum — WORKMATE",
};

export default function Impressum() {
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
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Impressum
        </h1>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "#B3B3B3" }}>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>K.I.T. Solutions</p>
            <p>Joshua Phu Kuhrau</p>
            <p>Dietzstr. 1</p>
            <p>56073 Koblenz</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+491741543053"
                className="transition-colors hover:text-orange"
                style={{ color: "#FF9100" }}
              >
                +49 174 1543053
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:joshua@kit-it-koblenz.de"
                className="transition-colors hover:text-orange"
                style={{ color: "#FF9100" }}
              >
                joshua@kit-it-koblenz.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">
              Umsatzsteuer
            </h2>
            <p>
              Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine
              Umsatzsteuer berechnet.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>
            <p>Joshua Phu Kuhrau</p>
            <p>Dietzstr. 1, 56073 Koblenz</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

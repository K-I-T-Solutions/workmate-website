const products = [
  {
    name: "WORKMATE",
    module: "OS",
    color: "#0077FF",
    description:
      "Das Herzstück der Suite. CRM, Rechnungen, Projekte, HR und Support — alles in einem zentralen Dashboard.",
    tags: ["CRM", "HR", "Projekte", "Rechnungen"],
  },
  {
    name: "WORKMATE",
    module: "ACCESS",
    color: "#00E5FF",
    description:
      "NFC- und OTP-basierte Zutrittskontrolle mit IAM-Dashboard und vollständigem Audit-Log.",
    tags: ["NFC", "OTP", "IAM", "Audit-Log"],
  },
  {
    name: "WORKMATE",
    module: "EVENT",
    color: "#00E676",
    description:
      "Ticketing, Scanner, POS und Staff-Management für Events jeder Größe — von der Probe bis zum Festival.",
    tags: ["Ticketing", "POS", "Scanner", "Staff"],
  },
  {
    name: "WORKMATE",
    module: "LIVE",
    color: "#D500F9",
    description:
      "Streaming, Broadcast und OBS-Integration mit Echtzeit-Monitoring für Creator und Produktionsteams.",
    tags: ["Streaming", "OBS", "Broadcast", "Monitoring"],
  },
  {
    name: "WORKMATE",
    module: "CHECKUP",
    color: "#FFC400",
    description:
      "Inventar-, Diagnose- und Support-Werkzeug für IT-Systeme. Behalte den Status deiner gesamten Infrastruktur im Blick.",
    tags: ["Inventar", "Diagnose", "IT-Support", "Systemstatus"],
  },
];

export default function Products() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#B3B3B3" }}
          >
            Die Produktfamilie
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Sechs Module.{" "}
            <span style={{ color: "#FF9100" }}>Eine Plattform.</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#B3B3B3" }}>
            Jedes Modul löst ein konkretes Problem deines Teams — und sie alle
            greifen nahtlos ineinander.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.module}
              className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                background: "#2a292a",
                border: "1px solid #444444",
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${p.color}18 0%, transparent 70%)`,
                }}
              />

              {/* Produkt-Name */}
              <div className="relative">
                <p className="text-sm font-bold tracking-wider text-white">
                  {p.name}
                </p>
                <p
                  className="text-2xl font-bold tracking-wide"
                  style={{
                    color: p.color,
                    fontFamily: "Space Grotesk, sans-serif",
                    textShadow: `0 0 20px ${p.color}88`,
                  }}
                >
                  {p.module}
                </p>
              </div>

              {/* Trennlinie */}
              <div className="h-px" style={{ background: "#444444" }} />

              {/* Beschreibung */}
              <p
                className="relative text-sm leading-relaxed flex-1"
                style={{ color: "#B3B3B3" }}
              >
                {p.description}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${p.color}18`,
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Core Card — zentriert wenn ungerade Anzahl */}
          <div
            className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden md:col-span-2 lg:col-span-1 transition-transform hover:-translate-y-1"
            style={{
              background: "#2a292a",
              border: "1px solid #FF910066",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, #FF910018 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="text-sm font-bold tracking-wider text-white">
                WORKMATE
              </p>
              <p
                className="text-2xl font-bold tracking-wide"
                style={{
                  color: "#FF9100",
                  fontFamily: "Space Grotesk, sans-serif",
                  textShadow: "0 0 20px #FF910088",
                }}
              >
                CORE
              </p>
            </div>
            <div className="h-px" style={{ background: "#444444" }} />
            <p className="relative text-sm leading-relaxed flex-1" style={{ color: "#B3B3B3" }}>
              Die Dachmarke — das verbindende Element aller Module. CORE
              definiert die gemeinsame Identität, die Benutzerkonten und die
              plattformübergreifenden Einstellungen.
            </p>
            <div className="relative flex flex-wrap gap-2 mt-auto">
              {["Identität", "Konten", "Einstellungen", "Plattform"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "#FF910018",
                      color: "#FF9100",
                      border: "1px solid #FF910044",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

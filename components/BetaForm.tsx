"use client";

import { useState } from "react";

const modules = ["OS", "ACCESS", "EVENT", "LIVE", "CHECKUP", "CORE"];
const moduleColors: Record<string, string> = {
  OS: "#0077FF",
  ACCESS: "#00E5FF",
  EVENT: "#00E676",
  LIVE: "#D500F9",
  CHECKUP: "#FFC400",
  CORE: "#FF9100",
};

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleModule(mod: string) {
    setSelected((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section id="beta" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#FF9100" }}
          >
            Beta-Programm
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Mach mit — offen und ehrlich.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#B3B3B3" }}>
            WORKMATE ist im Aufbau. Wir suchen echte Nutzer, die mitgestalten
            wollen — kein Hype, keine leeren Versprechen.
          </p>
        </div>

        {/* Card */}
        <div
          className="relative rounded-2xl p-8 md:p-10 overflow-hidden"
          style={{ background: "#2a292a", border: "1px solid #444444" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,145,0,0.08) 0%, transparent 70%)",
            }}
          />

          {submitted ? (
            <div className="relative text-center py-8 flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "#FF910022", border: "1px solid #FF910066" }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#FF9100"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Eingetragen.
              </h3>
              <p style={{ color: "#B3B3B3" }}>
                Wir melden uns direkt bei{" "}
                <strong className="text-white">{email}</strong> — ohne Umwege,
                wenn es soweit ist.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-6"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Max Mustermann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-[#444] outline-none focus:ring-2 transition-all"
                  style={{
                    background: "#1a191a",
                    border: "1px solid #444444",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#FF9100")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#444444")
                  }
                />
              </div>

              {/* E-Mail */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  E-Mail-Adresse <span style={{ color: "#FF9100" }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="max@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-[#444] outline-none transition-all"
                  style={{
                    background: "#1a191a",
                    border: "1px solid #444444",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#FF9100")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#444444")
                  }
                />
                {error && (
                  <p className="text-sm" style={{ color: "#FF4444" }}>
                    {error}
                  </p>
                )}
              </div>

              {/* Modul-Auswahl */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">
                  Was interessiert dich am meisten?{" "}
                  <span style={{ color: "#B3B3B3" }}>(optional)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {modules.map((mod) => {
                    const active = selected.includes(mod);
                    const color = moduleColors[mod];
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => toggleModule(mod)}
                        className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                        style={{
                          background: active ? `${color}22` : "#1a191a",
                          border: `1px solid ${active ? color : "#444444"}`,
                          color: active ? color : "#B3B3B3",
                          boxShadow: active ? `0 0 12px ${color}44` : "none",
                        }}
                      >
                        {mod}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-xl font-semibold text-black transition-all hover:brightness-110 active:scale-95"
                style={{ background: "#FF9100" }}
              >
                Eintragen
              </button>

              <p className="text-xs text-center" style={{ color: "#444444" }}>
                Kein Spam. Kein Newsletter. Wir schreiben dir, wenn es was zu
                sagen gibt — und sonst nicht.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

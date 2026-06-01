import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ borderColor: "#444444" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <Image
              src="/wm-icon.png"
              alt="WORKMATE Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-sm" style={{ color: "#B3B3B3" }}>
          © 2026 K.I.T. Solutions. Alle Rechte vorbehalten.
        </p>

        <div className="flex items-center gap-6 text-xs" style={{ color: "#B3B3B3" }}>
          <Link href="/kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}

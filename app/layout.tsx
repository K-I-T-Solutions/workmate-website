import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WORKMATE — Die Suite für moderne Teams",
  description: "Melde dich jetzt als Beta-Tester an und sei einer der Ersten, die WORKMATE erleben.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

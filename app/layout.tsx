import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swimcore.pl"),
  title: "SwimCore – Szkoła Pływania Tarnów",
  description:
    "Nauka pływania w Tarnowie dla dzieci, dorosłych i sportowców. Lekcje indywidualne, doskonalenie techniki, triathlon, Ironman oraz przygotowanie do egzaminów służbowych.",
  keywords: [
    "nauka pływania Tarnów",
    "szkoła pływania Tarnów",
    "instruktor pływania Tarnów",
    "pływanie dzieci Tarnów",
    "pływanie dorośli Tarnów",
  ],
  alternates: {
    canonical: "https://www.swimcore.pl",
  },
  openGraph: {
    title: "SwimCore – Szkoła Pływania Tarnów",
    description:
      "Nauka pływania w Tarnowie dla dzieci, dorosłych i sportowców. Lekcje indywidualne, doskonalenie techniki, triathlon, Ironman oraz przygotowanie do egzaminów służbowych.",
    type: "website",
    locale: "pl_PL",
    url: "https://www.swimcore.pl",
    siteName: "SwimCore",
  },
  twitter: {
    card: "summary",
    title: "SwimCore – Szkoła Pływania Tarnów",
    description:
      "Nauka pływania w Tarnowie dla dzieci, dorosłych i sportowców. Lekcje indywidualne, doskonalenie techniki, triathlon, Ironman oraz przygotowanie do egzaminów służbowych.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

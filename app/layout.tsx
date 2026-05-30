import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swimcore.pl"),
  title: "SwimCore – Pływanie z konkretnym celem",
  description:
    "Nowoczesna szkoła pływania w Tarnowie dla dzieci, dorosłych, zawodników, triathlonistów i osób przygotowujących się do egzaminów służbowych.",
  keywords: [
    "szkoła pływania Tarnów",
    "nauka pływania Tarnów",
    "lekcje pływania Tarnów",
    "triathlon",
    "egzaminy służbowe",
    "SwimCore",
  ],
  openGraph: {
    title: "SwimCore – Pływanie z konkretnym celem",
    description:
      "Nowoczesny system nauki i treningu pływackiego w Tarnowie.",
    type: "website",
    locale: "pl_PL",
    url: "https://swimcore.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

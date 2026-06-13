import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import "./globals.css";

const siteUrl = "https://www.swimcore.pl";
const canonicalUrl = `${siteUrl}/`;
const seoTitle = "SwimCore – Pływanie z konkretnym celem";
const seoDescription =
  "Nowoczesna szkoła pływania w Tarnowie dla dzieci, dorosłych, zawodników, triathlonistów i osób przygotowujących się do egzaminów służbowych.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "nauka pływania Tarnów",
    "szkoła pływania Tarnów",
    "instruktor pływania Tarnów",
    "pływanie dzieci Tarnów",
    "pływanie dorośli Tarnów",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    locale: "pl_PL",
    url: canonicalUrl,
    siteName: "SwimCore",
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico?v=2"],
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

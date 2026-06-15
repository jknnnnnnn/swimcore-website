import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import "./globals.css";

const siteUrl = "https://swimcore.pl";
const canonicalUrl = `${siteUrl}/`;
const seoTitle = "SwimCore — nauka pływania w Tarnowie dla dzieci i dorosłych";
const seoDescription =
  "Szkoła pływania SwimCore w Tarnowie. Indywidualne lekcje i małe grupy dla dzieci, dorosłych oraz osób chcących poprawić technikę pływania.";
const openGraphTitle = "SwimCore — nauka pływania w Tarnowie";
const openGraphDescription =
  "Lekcje pływania dla dzieci i dorosłych w Tarnowie. Indywidualnie lub w małych grupach.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "nauka pływania Tarnów",
    "szkoła pływania Tarnów",
    "instruktor pływania Tarnów",
    "lekcje pływania dla dzieci",
    "lekcje pływania dla dorosłych",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: openGraphTitle,
    description: openGraphDescription,
    type: "website",
    locale: "pl_PL",
    url: canonicalUrl,
    siteName: "SwimCore",
  },
  twitter: {
    card: "summary",
    title: openGraphTitle,
    description: openGraphDescription,
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

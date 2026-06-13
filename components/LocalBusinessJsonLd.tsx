import { siteConfig } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": "https://swimcore.pl/#organization",
  name: "SwimCore",
  description: "Szkoła pływania w Tarnowie",
  url: "https://swimcore.pl/",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tarnów",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "City",
    name: "Tarnów",
  },
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

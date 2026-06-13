import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kadra", label: "Kadra" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "/regulamin", label: "Regulamin zajęć" },
];

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <Container>
        <div className="flex flex-col gap-8 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo footer />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Nowoczesny system nauki i treningu pływackiego w Tarnowie.
            </p>
          </div>
          <nav aria-label="Stopka" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white/65 transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-5 pt-6 text-xs font-semibold text-white/45 sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} SwimCore. Wszystkie prawa zastrzeżone.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <span>Tarnów</span>
            <a href={siteConfig.phoneHref} className="transition-colors hover:text-orange">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-orange">
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram SwimCore"
              className="inline-flex items-center gap-2 transition-colors hover:text-orange"
            >
              <Icon name="instagram" className="h-4 w-4" />
              Instagram {siteConfig.social.instagramHandle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

const desktopLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kadra", label: "Kadra" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

const mobileLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kadra", label: "Kadra" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-40 border-b border-line text-white backdrop-blur-xl transition-all duration-500 ${
        hasScrolled
          ? "bg-[rgba(5,5,5,0.92)] shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
          : "bg-[#050505] shadow-none"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-[height] duration-500 ${
          hasScrolled ? "h-[68px] lg:h-[72px]" : "h-[72px] lg:h-[78px]"
        }`}
      >
        <div
          className={`transition-transform duration-500 ${
            hasScrolled ? "scale-[0.96]" : "scale-100"
          }`}
        >
          <Logo />
        </div>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-white/78 transition-colors duration-300 hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-orange/35 bg-white/[0.02] px-4 py-2.5 text-sm font-extrabold text-white/88 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange hover:bg-orange/10 hover:text-white"
          >
            Zadzwoń: 730 586 383
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram SwimCore"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/82 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/60 hover:bg-white/5 hover:text-orange"
          >
            <Icon name="instagram" className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#kontakt"
            className="rounded-full border border-orange bg-orange px-5 py-2.5 text-sm font-extrabold text-ink shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white hover:shadow-[0_0_0_1px_rgba(255,90,0,0.9)]"
          >
            Zapisz się
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-white shadow-none transition-all duration-300 hover:border-orange/60 hover:bg-white/5 hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange/40 lg:hidden"
        >
          <span className="sr-only">{isOpen ? "Zamknij menu" : "Otwórz menu"}</span>
          <span className="grid gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />
      <nav
        id="mobile-menu"
        aria-label="Mobilna nawigacja"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-40 h-dvh w-[min(86vw,360px)] overflow-hidden transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col border-l border-line bg-ink px-6 pb-8 pt-28 shadow-soft transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
            SwimCore navigation
          </p>
          <div className="mt-6 grid gap-2">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? undefined : -1}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-transparent px-3 py-3 text-base font-black text-white transition-all duration-300 hover:border-orange/35 hover:bg-white/5 hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto grid gap-3">
            <a
              href={siteConfig.phoneHref}
              tabIndex={isOpen ? undefined : -1}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-orange bg-orange px-5 py-3.5 text-sm font-black text-ink shadow-none transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Zadzwoń: 730 586 383
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram SwimCore"
              tabIndex={isOpen ? undefined : -1}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-black text-white transition-all duration-300 hover:border-orange/50 hover:bg-white/5 hover:text-orange"
            >
              <Icon name="instagram" className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="#kontakt"
              tabIndex={isOpen ? undefined : -1}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-orange bg-orange px-5 py-3.5 text-sm font-black text-ink shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
            >
              Zapisz się
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

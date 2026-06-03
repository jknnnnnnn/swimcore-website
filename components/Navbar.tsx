"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const desktopLinks = [
  { href: "#oferta", label: "Cele" },
  { href: "#proces", label: "Proces" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
];

const mobileLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#cennik", label: "Cennik" },
  { href: "#o-nas", label: "O założycielu" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="absolute inset-x-0 top-0 z-40 bg-[#EC6B3B] text-white shadow-[0_14px_42px_rgba(236,107,59,0.24)]">
      <Container className="flex h-[88px] items-center justify-between">
        <Logo />
        <nav aria-label="Główna nawigacja" className="hidden items-center gap-7 lg:flex">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-white/85 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(17,17,17,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A1A1A] lg:inline-flex"
        >
          Zapisz się
        </a>
        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="relative z-50 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-ink/15 text-white shadow-card backdrop-blur-xl transition-all duration-300 hover:bg-ink/25 focus:outline-none focus:ring-2 focus:ring-white/80 lg:hidden"
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
          className={`flex h-full flex-col border-l border-white/20 bg-[#EC6B3B] px-6 pb-8 pt-32 shadow-soft transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">SwimCore navigation</p>
          <div className="mt-6 grid gap-2">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? undefined : -1}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-transparent px-3 py-3 text-base font-black text-white/90 transition-all duration-300 hover:border-white/15 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            tabIndex={isOpen ? undefined : -1}
            onClick={() => setIsOpen(false)}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-ink px-5 py-3.5 text-sm font-black text-white shadow-[0_14px_32px_rgba(17,17,17,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1A1A1A]"
          >
            Zapisz się
          </a>
        </div>
      </nav>
    </header>
  );
}

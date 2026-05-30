import { Container } from "./Container";
import { Logo } from "./Logo";

const links = [
  { href: "#oferta", label: "Cele" },
  { href: "#proces", label: "Proces" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <Container className="flex h-28 items-center justify-between sm:h-32">
        <Logo />
        <nav aria-label="Główna nawigacja" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-white/65 transition-colors duration-300 hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-gradient-to-r from-purple to-cyan px-4 py-2.5 text-xs font-extrabold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:px-5 sm:text-sm"
        >
          Zapisz się
        </a>
      </Container>
    </header>
  );
}

import { Container } from "./Container";
import { Icon } from "./Icons";

export function CTA() {
  return (
    <section id="kontakt" className="scroll-mt-12 bg-ink py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy px-6 py-14 text-center shadow-soft sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-purple/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.13),transparent_48%,rgba(34,211,238,0.08))]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Start your progress</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-5xl lg:text-[3.8rem]">
              Zacznij trenować z konkretnym celem.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Napisz do nas. Ustalimy Twój poziom i pierwszy krok.
            </p>
            <a
              href="mailto:swimcore.plywanie@gmail.com"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple to-cyan px-6 py-3.5 text-sm font-black text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Zapisz się na pierwszą lekcję
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href="mailto:swimcore.plywanie@gmail.com"
              className="mx-auto mt-5 block w-fit text-xs font-bold text-muted transition-colors hover:text-cyan"
            >
              swimcore.plywanie@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

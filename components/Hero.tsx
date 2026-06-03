import Image from "next/image";
import { Container } from "./Container";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-40 text-ink sm:pb-24 sm:pt-48 lg:min-h-[850px] lg:pb-28 lg:pt-52">
      <div className="pointer-events-none absolute -left-40 top-8 h-[34rem] w-[34rem] rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[36rem] w-[36rem] rounded-full bg-light blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(241,90,36,0.12),transparent_28%),linear-gradient(135deg,rgba(17,17,17,0.04),transparent_48%)]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-orange backdrop-blur-md sm:text-xs">
              <Icon name="spark" className="h-4 w-4" />
              RUCH • TECHNIKA • POSTĘP
            </p>
            <h1 className="max-w-2xl text-balance text-[3.25rem] font-black leading-[0.95] tracking-[-0.085em] text-ink sm:text-[4.7rem] lg:text-[5.75rem]">
              SwimCore – pływanie z{" "}
              <span className="bg-gradient-to-r from-orange to-ink bg-clip-text text-transparent">
                konkretnym celem
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-lg sm:leading-8">
              Nowoczesna szkoła pływania w Tarnowie dla dzieci, dorosłych, zawodników,
              triathlonistów i osób przygotowujących się do egzaminów służbowych.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-black text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                Zapisz się na pierwszą lekcję
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a
                href="#oferta"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-black text-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:bg-orange/5"
              >
                Zobacz ofertę
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-muted sm:text-sm">
              {["20+ aktywnych klientów", "Lekcje indywidualne", "Dzieci • Dorośli • Sportowcy"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-orange/20 text-orange">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative isolate mx-auto w-full max-w-[590px] lg:mx-0">
            <div className="pointer-events-none absolute inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange/45 to-ink/10 blur-3xl" />
            <div className="relative aspect-[0.93] overflow-hidden rounded-[2.25rem] border border-ink/10 bg-light shadow-soft sm:aspect-[1.08] lg:aspect-[0.95]">
              <Image
                src="/images/swimmer-hero.png"
                alt="Pływak podczas treningu stylem dowolnym pod wodą"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-orange/10" />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-5 sm:bottom-8 sm:px-5 sm:py-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white">
                <Icon name="target" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-orange">
                  Twój progres
                </span>
                <span className="block text-sm font-black text-ink">Plan dopasowany do Ciebie</span>
              </span>
            </div>
            <div className="absolute right-4 top-4 rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 text-ink shadow-card backdrop-blur-xl sm:-right-4 sm:top-8">
              <span className="block text-xl font-black text-orange">100%</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Skupienia
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

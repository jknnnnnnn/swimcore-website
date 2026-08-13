import { Container } from "./Container";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-20 text-white sm:pb-28 sm:pt-28 lg:min-h-[850px] lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute -left-40 top-8 h-[34rem] w-[34rem] rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[36rem] w-[36rem] rounded-full bg-orange/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,90,0,0.12),transparent_30%),linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-orange backdrop-blur-md sm:text-xs">
              <Icon name="spark" className="h-4 w-4" />
              Pływanie z konkretnym celem
            </p>
            <h1 className="max-w-3xl text-balance text-[2.75rem] font-black leading-[0.98] tracking-[-0.085em] text-white sm:text-[4.2rem] lg:text-[5rem]">
              Nauka pływania <span className="text-orange">w Tarnowie</span>
              <br />
              dla <span className="text-orange">dzieci i dorosłych</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted sm:text-lg sm:leading-8">
              Indywidualne lekcje i małe grupy dla dzieci i dorosłych. Uczymy spokojnie,
              konkretnie i z planem dopasowanym do Twojego poziomu.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-black text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                Umów pierwszą lekcję
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a
                href="tel:+48730586383"
                className="inline-flex items-center justify-center rounded-full border border-orange/45 bg-ink px-6 py-3.5 text-sm font-black text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-orange/10"
              >
                Zadzwoń: 730 586 383
              </a>
            </div>
            <div className="mt-8 inline-flex max-w-xl items-start gap-3 rounded-2xl border border-line bg-card/72 px-4 py-3 text-sm font-bold leading-6 text-white/75 backdrop-blur-xl sm:items-center">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange/16 text-orange sm:mt-0">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span>100+ osób nam zaufało</span>
            </div>
          </div>

          <div className="relative isolate mx-auto w-full max-w-[590px] lg:mx-0">
            <div className="pointer-events-none absolute inset-8 -z-10 rounded-[2.5rem] bg-orange/25 blur-3xl" />
            <div className="relative aspect-[0.93] overflow-hidden rounded-[2.25rem] border border-orange/20 bg-[#050505] shadow-[0_0_70px_rgba(255,90,0,0.14)] sm:aspect-[1.08] lg:aspect-[0.95]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/18 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-orange/12 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,90,0,0.16),transparent_34%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,54px_54px,54px_54px]" />
              <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-orange/45 to-transparent" />
              <div className="pointer-events-none absolute inset-y-10 right-10 w-px bg-gradient-to-b from-transparent via-orange/25 to-transparent" />

              <div className="absolute inset-0">
                <div className="relative h-full w-full max-w-none sm:h-full">
                  <video
                    src="/strona.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover object-center opacity-90"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05)_0%,rgba(5,5,5,0.44)_100%),radial-gradient(circle_at_70%_18%,rgba(255,90,0,0.2),transparent_34%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-45" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-5 sm:bottom-8 sm:px-5 sm:py-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-ink">
                <Icon name="target" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-orange">
                  System treningu
                </span>
                <span className="block text-sm font-black text-white">Plan dopasowany do celu</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

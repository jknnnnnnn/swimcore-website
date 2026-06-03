import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Instruktor SwimCore",
    description: "Trening dopasowany do poziomu i wybranego celu.",
    prices: [
      { label: "Lekcja indywidualna", value: "110 zł" },
      { label: "Lekcja w dwójce", value: "130 zł", suffix: "/ lekcja" },
    ],
  },
  {
    name: "Igor Szczerba",
    description: "Zajęcia prowadzone bezpośrednio przez założyciela SwimCore.",
    badge: "Założyciel / trener prowadzący",
    featured: true,
    prices: [
      { label: "Lekcja indywidualna", value: "120 zł" },
      { label: "Lekcja w dwójce", value: "140 zł", suffix: "/ lekcja" },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="cennik" className="scroll-mt-16 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Wybierz wariant treningu."
          description="Przejrzyste ceny zajęć. Po zgłoszeniu dobierzemy instruktora i termin dopasowany do Twojego celu."
          centered
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2 lg:mt-14">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow sm:p-7 ${
                plan.featured
                  ? "border-orange/70 bg-[linear-gradient(145deg,rgba(241,90,36,0.14),rgba(255,255,255,0.96))]"
                  : "border-ink/10 bg-white hover:border-orange/45"
              }`}
            >
              {plan.featured ? (
                <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-orange/20 blur-3xl" />
              ) : null}
              <div className="relative">
                {plan.badge ? (
                  <span className="inline-flex rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-orange">
                    {plan.badge}
                  </span>
                ) : (
                  <span className="inline-flex rounded-full border border-ink/10 bg-light px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted">
                    SwimCore Team
                  </span>
                )}
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-ink">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{plan.description}</p>
              </div>

              <div className="relative mt-7 grid gap-3">
                {plan.prices.map((price) => (
                  <div
                    key={price.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-light px-4 py-4"
                  >
                    <span className="text-sm font-bold leading-5 text-muted">{price.label}</span>
                    <span className="shrink-0 text-right">
                      <span className="block text-lg font-black text-ink">{price.value}</span>
                      {price.suffix ? <span className="block text-[10px] font-bold text-muted">{price.suffix}</span> : null}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#kontakt"
                className={`relative mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 ${
                  plan.featured
                    ? "bg-orange shadow-glow"
                    : "bg-ink shadow-card hover:bg-orange hover:shadow-glow"
                }`}
              >
                Zapisz się
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-semibold leading-6 text-muted">
          Cena nie obejmuje biletu wejścia na basen, jeśli jest wymagany przez obiekt.
        </p>
      </Container>
    </section>
  );
}

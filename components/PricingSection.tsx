import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const privateLessons = [
  {
    name: "INDYWIDUALNE",
    price: "110 zł",
    priceNote: "/ 45 min",
    description: "Pełne skupienie instruktora na jednej osobie i jej celu.",
  },
  {
    name: "DUO",
    price: "150 zł",
    priceNote: "/ 45 min",
    description: "Zajęcia dla dwóch osób, które zapisują się razem.",
  },
  {
    name: "TRIO",
    price: "200 zł",
    priceNote: "/ 45 min",
    description: "Zajęcia dla trzech osób, które zapisują się razem.",
  },
];

const microgroups = [
  {
    name: "MIKROGRUPA DUO",
    badge: "2 osoby",
    price: "320 zł",
    priceNote: "/ osoba / 4 zajęcia",
    description: "Stałe miejsce w 2-osobowej grupie dobranej przez SwimCore.",
    featured: false,
  },
  {
    name: "MIKROGRUPA TRIO",
    badge: "POLECAMY",
    price: "300 zł",
    priceNote: "/ osoba / 4 zajęcia",
    description: "Stałe miejsce w 3-osobowej grupie dobranej przez SwimCore.",
    featured: true,
  },
];

const signupButtonClasses =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-black text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-card";

export function PricingSection() {
  return (
    <section id="cennik" className="scroll-mt-16 bg-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Ile kosztują zajęcia?"
          description="Wybierz lekcję prywatną z własną grupą albo stałe miejsce w Mikrogrupie SwimCore."
          centered
        />

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="text-center">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-orange">LEKCJE PRYWATNE</h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Trenuj indywidualnie lub przyjdź z własną grupą.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {privateLessons.map((plan) => (
              <article
                key={plan.name}
                className="flex min-h-[310px] min-w-0 flex-col rounded-[1.75rem] border border-line bg-card p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/55 hover:shadow-glow sm:p-7"
              >
                <h4 className="text-xl font-black tracking-[-0.04em] text-white">{plan.name}</h4>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="whitespace-nowrap text-4xl font-black tracking-[-0.06em] text-white">
                    {plan.price}
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted">{plan.priceNote}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">{plan.description}</p>
                <div className="mt-auto pt-8">
                  <a href="#kontakt" className={signupButtonClasses}>
                    Zapisz się
                    <Icon name="arrow" className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center sm:mt-20">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-orange">
              MIKROGRUPY SWIMCORE
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Nie masz własnej grupy? Dobierzemy uczestników w podobnym wieku i na podobnym poziomie.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-4xl gap-4 md:grid-cols-2">
            {microgroups.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[340px] min-w-0 flex-col overflow-hidden rounded-[1.75rem] border bg-card p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/70 sm:p-8 ${
                  plan.featured
                    ? "border-orange/65 shadow-[0_0_36px_rgba(255,90,0,0.12)]"
                    : "border-line"
                }`}
              >
                {plan.featured ? (
                  <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />
                ) : null}
                <div className="relative flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-black tracking-[-0.04em] text-white">{plan.name}</h4>
                  <span
                    className={`inline-flex shrink-0 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                      plan.featured
                        ? "border-orange/50 bg-orange/15 text-orange"
                        : "border-line bg-ink text-muted"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <div className="relative mt-6 flex flex-col items-start gap-1">
                  <span className="whitespace-nowrap text-4xl font-black tracking-[-0.06em] text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-bold text-muted">{plan.priceNote}</span>
                </div>
                <p className="relative mt-5 text-sm leading-6 text-muted">{plan.description}</p>
                <div className="relative mt-auto pt-8">
                  <a href="#kontakt" className={signupButtonClasses}>
                    Zapisz się
                    <Icon name="arrow" className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-line bg-card/70 px-5 py-4 text-center text-sm font-semibold leading-6 text-muted sm:px-7">
            Mikrogrupy tworzymy na podstawie wieku, poziomu pływackiego i dostępności uczestników.
            Maksymalnie 3 osoby na instruktora.
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs font-semibold leading-6 text-muted">
          Cena nie obejmuje wejścia na basen.
        </p>
      </Container>
    </section>
  );
}

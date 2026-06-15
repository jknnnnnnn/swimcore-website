import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Lekcja indywidualna",
    price: "110 zł",
    time: "/ 45 min",
    description: "Pełne skupienie instruktora na jednej osobie i jej celu.",
  },
  {
    name: "Lekcja 2-osobowa",
    price: "130 zł",
    time: "/ 45 min",
    description: "Dobry balans ceny, uwagi instruktora i pracy w parze.",
  },
  {
    name: "Lekcja 3-osobowa",
    price: "150 zł",
    time: "/ 45 min",
    description: "Mała grupa, wspólny rytm nauki i regularny progres.",
  },
];

export function PricingSection() {
  return (
    <section id="cennik" className="scroll-mt-16 bg-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Ile kosztują zajęcia?"
          description="Prosty system cenowy dla lekcji indywidualnych i małych grup. Formę zajęć dobieramy po pierwszym kontakcie."
          centered
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3 lg:mt-12">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative flex min-h-[260px] flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/55 hover:shadow-glow sm:p-7"
            >
              <span className="inline-flex rounded-full border border-line bg-ink px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted">
                SwimCore
              </span>
              <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{plan.description}</p>

              <div className="mt-auto pt-8">
                <span className="text-4xl font-black tracking-[-0.06em] text-white">{plan.price}</span>
                <span className="ml-2 text-sm font-bold text-muted">{plan.time}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-semibold leading-6 text-muted">
          Cena dotyczy jednej lekcji. Bilet wejścia na basen może być dodatkowo płatny, zależnie od obiektu.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-black text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Umów pierwszą lekcję
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}

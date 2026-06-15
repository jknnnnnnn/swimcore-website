import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const audienceCards: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Dziecko od zera",
    description:
      "Lekcje pływania dla dzieci zaczynamy od oswojenia z wodą, podstaw i budowania pewności w spokojnym tempie. Zajęcia są prowadzone bez presji i z pełną kontrolą instruktora.",
    icon: "baby",
  },
  {
    title: "Dorosły od zera",
    description:
      "Lekcje pływania dla dorosłych pomagają przełamać stres, poprawić komfort w wodzie i nauczyć się pływać krok po kroku — niezależnie od wieku.",
    icon: "person",
  },
  {
    title: "Poprawa techniki / egzamin",
    description:
      "Dla osób, które już pływają, ale chcą poprawić technikę, przygotować się do egzaminu lub pływać szybciej i pewniej.",
    icon: "target",
  },
];

export function AudienceSection() {
  return (
    <section id="oferta" className="scroll-mt-16 bg-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Dla kogo"
          title="Dla kogo są zajęcia?"
          description="Dobieramy formę zajęć do wieku, poziomu i celu — od pierwszego kontaktu z wodą po naukę pływania w Tarnowie i poprawę techniki."
          centered
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3 lg:mt-12">
          {audienceCards.map((card) => (
            <article
              key={card.title}
              className="group flex min-h-[330px] flex-col rounded-[1.75rem] border border-line bg-card p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/55 hover:shadow-glow sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-ink shadow-glow">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.05em] text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
              <a
                href="#kontakt"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-black text-orange transition-colors duration-300 hover:text-white"
              >
                Umów pierwszą lekcję
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

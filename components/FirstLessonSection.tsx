import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const steps: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Krótka rozmowa i określenie celu",
    description:
      "Ustalamy, czy celem jest nauka od zera, oswojenie z wodą, poprawa techniki czy przygotowanie do egzaminu.",
    icon: "spark",
  },
  {
    title: "Sprawdzenie poziomu w wodzie",
    description:
      "Instruktor ocenia komfort, bezpieczeństwo, podstawowe ruchy i technikę.",
    icon: "shield",
  },
  {
    title: "Dobranie dalszego planu",
    description:
      "Po pierwszych zajęciach wiemy, jaka forma będzie najlepsza: indywidualna, 2-osobowa albo mała grupa.",
    icon: "compass",
  },
];

export function FirstLessonSection() {
  return (
    <section id="pierwsza-lekcja" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-36 top-24 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Pierwsze zajęcia"
              title="Jak wygląda pierwsza lekcja?"
              description="Pierwsze zajęcia pozwalają nam sprawdzić poziom i dobrać najlepszą formę dalszej pracy."
            />
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-black text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Sprawdź wolny termin
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group grid gap-5 rounded-[1.75rem] border border-line bg-card p-5 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-glow sm:grid-cols-[auto_1fr] sm:p-6"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-ink shadow-glow">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-lg font-black tracking-[-0.05em] text-white/12 sm:mt-5 sm:block">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

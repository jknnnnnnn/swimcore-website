import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const reasons: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Indywidualne podejście",
    description: "Twój poziom. Twój cel. Twój plan działania.",
    icon: "target",
  },
  {
    title: "Bezpieczna nauka",
    description: "Pewność w wodzie budowana krok po kroku.",
    icon: "shield",
  },
  {
    title: "Sportowe doświadczenie",
    description: "Technika i mentalność wyniesione ze sportu.",
    icon: "medal",
  },
  {
    title: "Regularny progres",
    description: "Trening, który prowadzi do konkretnej zmiany.",
    icon: "clock",
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="scroll-mt-16 bg-ink py-28 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Dlaczego SwimCore"
          title="System treningu, nie przypadkowe lekcje."
          description="SwimCore łączy świadomą naukę, sportowe doświadczenie i regularną pracę nad wynikiem."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.65rem] border border-line bg-card p-5 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/35 hover:shadow-glow sm:p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-ink">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-base font-black tracking-[-0.025em] text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";

const steps: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Kontakt",
    description: "Napisz, jaki masz cel.",
    icon: "spark",
  },
  {
    title: "Dobór poziomu",
    description: "Określamy punkt startowy.",
    icon: "target",
  },
  {
    title: "Pierwsza lekcja",
    description: "Poznajemy Twój ruch w wodzie.",
    icon: "person",
  },
  {
    title: "Plan treningowy",
    description: "Układamy konkretny kierunek.",
    icon: "compass",
  },
  {
    title: "Regularny progres",
    description: "Trenujesz i widzisz różnicę.",
    icon: "bolt",
  },
];

export function ProcessSection() {
  return (
    <section id="proces" className="relative scroll-mt-16 overflow-hidden bg-navy py-24 text-white sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-purple/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Prosty proces</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-5xl lg:text-[3.6rem]">
            Jak wygląda współpraca?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Bez komplikacji. Od pierwszej wiadomości do regularnego treningu.
          </p>
        </div>
        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan/40 hover:bg-white/[0.1]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-purple to-cyan text-white shadow-glow">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="text-lg font-black tracking-[-0.05em] text-white/20">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-base font-black tracking-[-0.035em] text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const reasons: { title: string; icon: IconName }[] = [
  { title: "Indywidualne podejście", icon: "target" },
  { title: "Bezpieczna nauka", icon: "shield" },
  { title: "Sportowe doświadczenie", icon: "medal" },
  { title: "Regularny progres", icon: "clock" },
];

export function ParentsChoiceSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Dla rodziców"
          title="Dlaczego rodzice wybierają SwimCore?"
          description="Jasny plan, bezpieczne środowisko i konkretna informacja o postępach dziecka."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[1.65rem] border border-ink/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/45 hover:shadow-glow sm:p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-white">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-base font-black tracking-[-0.025em] text-ink">{reason.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

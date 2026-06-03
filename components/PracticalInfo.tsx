import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const details: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Lokalizacja",
    description: "Tarnów",
    icon: "compass",
  },
  {
    title: "Forma zajęć",
    description: "Indywidualne i małe grupy",
    icon: "person",
  },
  {
    title: "Dla kogo",
    description: "Dzieci, dorośli, sportowcy",
    icon: "target",
  },
  {
    title: "Cena",
    description: "Lekcje indywidualne od 110 zł",
    icon: "medal",
  },
  {
    title: "Kontakt",
    description: "Oddzwaniamy i dobieramy termin",
    icon: "clock",
  },
];

export function PracticalInfo() {
  return (
    <section className="bg-light py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pierwszy krok"
          title="Zanim zapiszesz się na lekcję"
          description="Najważniejsze informacje w jednym miejscu. Szczegóły dopasujemy do Twojego celu podczas kontaktu."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((detail) => (
            <article
              key={detail.title}
              className="rounded-[1.4rem] border border-ink/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/50 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-white shadow-glow">
                <Icon name={detail.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-sm font-black text-ink">{detail.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{detail.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";

const proofs: { title: string; icon: IconName }[] = [
  { title: "20+ aktywnych klientów", icon: "person" },
  { title: "Medalista Mistrzostw Polski Juniorów", icon: "medal" },
  { title: "Medalista Akademickich Mistrzostw Polski", icon: "badge" },
  { title: "2 lata doświadczenia instruktorskiego", icon: "clock" },
];

export function SocialProofSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof) => (
            <article
              key={proof.title}
              className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-glow"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange text-white">
                <Icon name={proof.icon} className="h-5 w-5" />
              </span>
              <h2 className="text-sm font-black leading-5 text-ink">{proof.title}</h2>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

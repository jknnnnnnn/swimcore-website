import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="opinie" className="scroll-mt-16 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Opinie"
          title="Pierwsze opinie wkrótce."
          description="SwimCore stawia na prawdziwe historie i mierzalny progres. Opublikujemy tutaj wyłącznie autentyczne opinie uczestników zajęć."
          centered
        />
        <div className="mx-auto mt-9 flex max-w-xl items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-light p-5 shadow-card sm:p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange text-white shadow-glow">
            <Icon name="spark" className="h-6 w-6" />
          </span>
          <p className="text-sm font-semibold leading-6 text-muted">
            Zbieramy pierwsze doświadczenia klientów. Bez sztucznych rekomendacji i bez pustych obietnic.
          </p>
        </div>
      </Container>
    </section>
  );
}

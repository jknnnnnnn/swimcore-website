import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    title: "Opinia rodzica",
    description: "Tu pojawi się opinia o zajęciach pływackich dla dzieci.",
    initials: "01",
  },
  {
    title: "Opinia uczestnika",
    description: "Tu pojawi się opinia o nauce pływania dla dorosłych.",
    initials: "02",
  },
  {
    title: "Opinia sportowca",
    description: "Tu pojawi się opinia o przygotowaniu sportowym.",
    initials: "03",
  },
];

export function Testimonials() {
  return (
    <section id="opinie" className="scroll-mt-16 bg-ink py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Opinie"
          title="Progres, który będzie mówił sam za siebie."
          description="Miejsce na przyszłe historie osób, które trenują z SwimCore."
          centered
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.title}
              className="flex flex-col rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple/50 hover:bg-white/[0.08] hover:shadow-glow"
            >
              <Icon name="spark" className="h-6 w-6 text-cyan" />
              <p className="mt-5 flex-1 text-sm leading-7 text-muted">{testimonial.description}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple to-cyan text-xs font-black text-white">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-black text-white">{testimonial.title}</span>
                  <span className="block text-xs font-semibold text-muted">Wkrótce</span>
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-muted/50">
          Placeholdery · miejsce gotowe na przyszłe opinie klientów
        </p>
      </Container>
    </section>
  );
}

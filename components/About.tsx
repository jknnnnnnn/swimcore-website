import Image from "next/image";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const points = ["Sportowe DNA", "Świadoma technika", "Konkretny progres"];

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-navy py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[0.82] overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-soft">
              <Image
                src="/images/coach-about.png"
                alt="Instruktor SwimCore na pływalni"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-purple/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-navy/60 p-4 text-white backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan">
                  SwimCore
                </p>
                <p className="mt-1 text-lg font-black tracking-[-0.04em]">Trening z konkretnym kierunkiem</p>
              </div>
            </div>
            <span className="absolute -right-5 -top-5 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-purple to-cyan text-white shadow-glow sm:-right-8 sm:top-10">
              <Icon name="heart" className="h-8 w-8" />
            </span>
          </div>
          <div>
            <SectionHeading eyebrow="O SwimCore" title="Marka zbudowana wokół progresu." />
            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              SwimCore to nowoczesny system nauki i treningu pływackiego rozwijany przez
              zawodnika i instruktorów. Pomagamy zamienić cel w konsekwentny plan pracy.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted/80 sm:text-base">
              Dla pierwszych kroków w wodzie, techniki, egzaminów i sportowego wyniku.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {points.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-extrabold text-white backdrop-blur-md"
                >
                  <Icon name="check" className="h-4 w-4 text-cyan" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

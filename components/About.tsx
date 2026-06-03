import Image from "next/image";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const achievements = [
  "Medalista Mistrzostw Polski Juniorów",
  "Medalista Akademickich Mistrzostw Polski",
  "Instruktor pływania",
  "2 lata doświadczenia w nauczaniu",
];

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-light py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[0.82] overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
              <Image
                src="/images/coach-about.png"
                alt="Miejsce na zdjęcie Igora Szczerby"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-orange/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-navy/60 p-4 text-white backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange">
                  Miejsce na zdjęcie założyciela
                </p>
                <p className="mt-1 text-lg font-black tracking-[-0.04em]">Igor Szczerba</p>
              </div>
            </div>
            <span className="absolute -right-5 -top-5 grid h-20 w-20 place-items-center rounded-3xl bg-orange text-white shadow-glow sm:-right-8 sm:top-10">
              <Icon name="medal" className="h-8 w-8" />
            </span>
          </div>
          <div>
            <SectionHeading eyebrow="O założycielu" title="Poznaj założyciela SwimCore" />
            <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-ink">Igor Szczerba</h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Pływanie wyczynowo zacząłem trenować już w 4 klasie szkoły podstawowej. Jestem medalistą
              Mistrzostw Polski Juniorów oraz Akademickich Mistrzostw Polski.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted/80 sm:text-base">
              Od 2 lat uczę pływania dzieci, dorosłych i osoby przygotowujące się do konkretnych celów
              sportowych. Posiadam uprawnienia instruktora pływania i doświadczenie w pracy z osobami
              w każdym wieku - od pierwszych lekcji w wodzie po doskonalenie techniki młodych
              zawodników trenujących na co dzień.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted/80 sm:text-base">
              SwimCore powstało po to, żeby nauka pływania była konkretna, bezpieczna i dopasowana do
              celu: od przełamania strachu przed wodą, przez technikę, aż po przygotowanie do zawodów,
              triathlonu i egzaminów służbowych.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-xs font-extrabold leading-5 text-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-glow"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

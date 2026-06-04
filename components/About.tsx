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
    <section id="o-nas" className="scroll-mt-16 bg-ink py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[0.82] overflow-hidden rounded-[2rem] border border-line bg-card shadow-soft">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange/18 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
              <div className="relative flex h-full flex-col justify-between p-7 sm:p-8">
                <div className="inline-flex w-fit rounded-full border border-orange/25 bg-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-orange">
                  Założyciel
                </div>
                <div>
                  <div className="text-[7rem] font-black leading-none tracking-[-0.12em] text-white sm:text-[8rem]">
                    IS
                  </div>
                  <div className="mt-6 rounded-2xl border border-line bg-ink/70 p-5 backdrop-blur-xl">
                    <p className="text-xl font-black tracking-[-0.04em] text-white">Igor Szczerba</p>
                    <p className="mt-1 text-sm font-bold text-muted">Założyciel SwimCore</p>
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute -right-5 -top-5 grid h-20 w-20 place-items-center rounded-3xl bg-orange text-ink shadow-glow sm:-right-8 sm:top-10">
              <Icon name="medal" className="h-8 w-8" />
            </span>
          </div>

          <div>
            <SectionHeading eyebrow="O założycielu" title="Poznaj założyciela SwimCore" />
            <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-white">Igor Szczerba</h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Pływanie wyczynowe trenuję od 4 klasy szkoły podstawowej. Jestem medalistą Mistrzostw
              Polski Juniorów oraz Akademickich Mistrzostw Polski.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted/80 sm:text-base">
              Od 2 lat prowadzę lekcje pływania dla dzieci, dorosłych i sportowców. Pomagam zarówno
              osobom stawiającym pierwsze kroki w wodzie, jak i zawodnikom pracującym nad techniką.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted/80 sm:text-base">
              SwimCore to nauka pływania oparta na konkretnym celu, indywidualnym podejściu i realnych
              postępach.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 text-xs font-extrabold leading-5 text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-glow"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange text-ink">
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

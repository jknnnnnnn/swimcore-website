import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

type Instructor = {
  name: string;
  initials: string;
  role: string;
  description: string;
  tags: string[];
  photo?: {
    src: string;
    alt: string;
    fileName: string;
  };
};

const instructors: Instructor[] = [
  {
    name: "Igor Szczerba",
    initials: "IS",
    role: "Założyciel SwimCore • Instruktor pływania",
    description:
      "Medalista Mistrzostw Polski Juniorów i Akademickich Mistrzostw Polski. Od 2 lat prowadzi zajęcia dla dzieci, dorosłych i sportowców — od pierwszych lekcji w wodzie po doskonalenie techniki zawodniczej.",
    tags: ["Medalista MP Juniorów", "Medalista AMP", "Instruktor pływania", "Technika i sport"],
    photo: {
      src: "/images/igor-szczerba.jpg",
      alt: "Igor Szczerba, założyciel SwimCore i instruktor pływania",
      fileName: "igor-szczerba.jpg",
    },
  },
];

function hasPublicImage(fileName: string) {
  return existsSync(join(process.cwd(), "public", "images", fileName));
}

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-ink py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Kadra"
          title="Nasza kadra"
          description="Zajęcia SwimCore prowadzą instruktorzy z doświadczeniem sportowym i indywidualnym podejściem do nauki pływania."
          centered
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:mt-14">
          {instructors.map((instructor) => {
            const showPhoto = instructor.photo ? hasPublicImage(instructor.photo.fileName) : false;

            return (
              <article
                key={instructor.name}
                className="grid overflow-hidden rounded-[2rem] border border-line bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-glow lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-[420px] overflow-hidden bg-ink sm:min-h-[500px] lg:min-h-full">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange/18 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

                  {showPhoto && instructor.photo ? (
                    <>
                      <Image
                        src={instructor.photo.src}
                        alt={instructor.photo.alt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 34vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04)_0%,rgba(5,5,5,0.72)_100%)]" />
                    </>
                  ) : (
                    <div className="relative flex h-full min-h-[420px] items-center justify-center p-8 sm:min-h-[500px]">
                      <div className="text-[7rem] font-black leading-none tracking-[-0.12em] text-white sm:text-[9rem]">
                        {instructor.initials}
                      </div>
                    </div>
                  )}

                  <div className="absolute left-6 top-6 inline-flex rounded-full border border-orange/25 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-orange backdrop-blur-md">
                    Instruktor
                  </div>
                  <span className="absolute bottom-6 right-6 grid h-16 w-16 place-items-center rounded-2xl bg-orange text-ink shadow-glow">
                    <Icon name="medal" className="h-7 w-7" />
                  </span>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange">SwimCore Team</p>
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
                    {instructor.name}
                  </h3>
                  <p className="mt-3 text-sm font-black text-orange">{instructor.role}</p>
                  <p className="mt-6 text-sm leading-7 text-muted sm:text-base">{instructor.description}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {instructor.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-ink px-4 py-3 text-xs font-extrabold leading-5 text-white transition-all duration-300 hover:border-orange/45"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange text-ink">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

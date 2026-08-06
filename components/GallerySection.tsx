import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const galleryItems: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Zdjęcia z treningów",
    description: "Miejsce na materiały z codziennej pracy w wodzie.",
    icon: "bolt",
  },
  {
    title: "Zdjęcia z basenu",
    description: "Kadry z obiektów, na których prowadzimy zajęcia.",
    icon: "compass",
  },
  {
    title: "Zdjęcia zawodników",
    description: "Postępy, technika i przygotowanie sportowe.",
    icon: "medal",
  },
  {
    title: "Zdjęcia instruktorów",
    description: "Zespół SwimCore i zaplecze treningowe.",
    icon: "person",
  },
];

export function GallerySection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Materiały z treningów."
          description="Przygotowane miejsce na zdjęcia i krótkie materiały z pracy SwimCore."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-[260px] overflow-hidden rounded-[1.65rem] border border-ink/10 bg-light p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/45 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(241,90,36,0.18),transparent_34%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-white shadow-glow">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange">Placeholder</p>
                  <h3 className="mt-2 text-lg font-black tracking-[-0.035em] text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

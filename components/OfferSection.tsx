import { Container } from "./Container";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

type OfferItem = {
  title: string;
  description: string;
  icon: IconName;
  label: string;
  accent: string;
  iconStyle: string;
};

const offer: OfferItem[] = [
  {
    title: "Nauka pływania dzieci",
    description: "Pewność w wodzie od pierwszych ruchów.",
    icon: "baby",
    label: "Start",
    accent: "from-orange/10 to-white",
    iconStyle: "bg-orange text-white",
  },
  {
    title: "Nauka pływania dorosłych",
    description: "Swoboda, technika i komfort we własnym tempie.",
    icon: "person",
    label: "Pewność",
    accent: "from-light to-orange/10",
    iconStyle: "bg-orange text-white",
  },
  {
    title: "Doskonalenie techniki",
    description: "Lepszy ruch. Większa ekonomia. Mniej wysiłku.",
    icon: "compass",
    label: "Technika",
    accent: "from-orange/10 to-white",
    iconStyle: "bg-orange text-white",
  },
  {
    title: "Egzaminy straż / policja / wojsko",
    description: "Konkretny plan pod wymagany wynik.",
    icon: "shield",
    label: "Wynik",
    accent: "from-light to-orange/10",
    iconStyle: "bg-orange text-white",
  },
  {
    title: "Triathlon i Ironman",
    description: "Wydolność i rytm, które pracują na trasie.",
    icon: "medal",
    label: "Endurance",
    accent: "from-orange/10 to-white",
    iconStyle: "bg-orange text-white",
  },
  {
    title: "Trening zawodniczy",
    description: "Tempo, detale i progres mierzony sportowym celem.",
    icon: "bolt",
    label: "Performance",
    accent: "from-light to-orange/10",
    iconStyle: "bg-orange text-white",
  },
];

export function OfferSection() {
  return (
    <section id="oferta" className="scroll-mt-16 bg-white py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Twój kierunek"
          title="Wybierz swój cel"
          description="Niezależnie od tego, czy zaczynasz od zera, chcesz poprawić technikę, przygotować się do egzaminu czy wystartować w zawodach — dobierzemy trening do Twojego celu."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {offer.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-h-[250px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-gradient-to-br ${item.accent} p-6 shadow-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange/45 hover:shadow-glow sm:p-7`}
            >
              <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full border-[18px] border-ink/5 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative flex items-start justify-between gap-4">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl shadow-card ${item.iconStyle}`}>
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-black tracking-[-0.04em] text-ink/15">
                  0{index + 1}
                </span>
              </div>
              <div className="relative mt-10">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-orange">{item.label}</p>
                <h3 className="mt-2 max-w-[15rem] text-xl font-black leading-tight tracking-[-0.045em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[17rem] text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type RegulationPoint = {
  text: ReactNode;
  children?: ReactNode[];
};

type RegulationSection = {
  title: string;
  points: RegulationPoint[];
};

const sections: RegulationSection[] = [
  {
    title: "§1. Informacje ogólne",
    points: [
      {
        text: "Niniejszy regulamin określa zasady organizacji i uczestnictwa w zajęciach pływania prowadzonych w ramach SwimCore.",
      },
      {
        text: (
          <>
            Organizatorem zajęć jest Igor Szczerba prowadzący działalność gospodarczą pod firmą{" "}
            <strong className="text-white">Igor Szczerba SwimCore</strong>, NIP:{" "}
            <strong className="text-white">9930716252</strong>.
          </>
        ),
      },
      {
        text: "Kontakt z organizatorem:",
        children: [
          <>
            e-mail: <strong className="text-white">swimcore.plywanie@gmail.com</strong>
          </>,
          <>
            telefon: <strong className="text-white">+48 730 586 383</strong>
          </>,
          <>
            strona internetowa: <strong className="text-white">https://swimcore.pl/</strong>
          </>,
        ],
      },
      {
        text: "Udział w zajęciach oznacza akceptację niniejszego regulaminu.",
      },
    ],
  },
  {
    title: "§2. Rodzaj zajęć",
    points: [
      {
        text: "SwimCore prowadzi zajęcia nauki i doskonalenia pływania dla dzieci, młodzieży oraz osób dorosłych.",
      },
      {
        text: "Zajęcia mogą odbywać się w formie:",
        children: [
          "lekcji indywidualnych,",
          "lekcji dwuosobowych,",
          "lekcji trzyosobowych,",
          "zajęć przygotowujących do egzaminów, triathlonu lub poprawy techniki pływania.",
        ],
      },
      {
        text: (
          <>
            Standardowy czas trwania jednej lekcji wynosi{" "}
            <strong className="text-white">45 minut</strong>.
          </>
        ),
      },
      {
        text: "Zajęcia prowadzone są przez instruktorów współpracujących ze SwimCore.",
      },
    ],
  },
  {
    title: "§3. Miejsce zajęć",
    points: [
      {
        text: "Zajęcia odbywają się na obiektach basenowych wskazanych lub zaakceptowanych przez SwimCore.",
      },
      {
        text: "Uczestnik zajęć zobowiązany jest do przestrzegania regulaminu obiektu basenowego, na którym odbywają się zajęcia.",
      },
      {
        text: "Koszt biletu wejścia na basen nie jest wliczony w cenę zajęć.",
      },
      {
        text: "Klient opłaca bilet wejścia na basen we własnym zakresie, zgodnie z cennikiem obowiązującym na danym obiekcie.",
      },
    ],
  },
  {
    title: "§4. Zapisy na zajęcia",
    points: [
      {
        text: "Zapisy na zajęcia odbywają się poprzez formularz kontaktowy, wiadomość, telefonicznie lub inną formę kontaktu uzgodnioną ze SwimCore.",
      },
      {
        text: "Przy zapisie klient powinien podać podstawowe informacje potrzebne do organizacji zajęć, w szczególności:",
        children: [
          "imię i nazwisko uczestnika,",
          "wiek uczestnika,",
          "poziom umiejętności pływackich,",
          "cel zajęć,",
          "numer telefonu lub adres e-mail do kontaktu.",
        ],
      },
      {
        text: "W przypadku osób niepełnoletnich zapisów dokonuje rodzic lub opiekun prawny.",
      },
    ],
  },
  {
    title: "§5. Cennik i płatności",
    points: [
      {
        text: "Aktualny cennik zajęć SwimCore:",
        children: [
          <>
            lekcja indywidualna — <strong className="text-white">110 zł / 45 minut</strong>,
          </>,
          <>
            lekcja 2-osobowa — <strong className="text-white">150 zł / 45 minut</strong>,
          </>,
          <>
            lekcja 3-osobowa — <strong className="text-white">200 zł / 45 minut</strong>.
          </>,
        ],
      },
      {
        text: "Cena dotyczy jednej lekcji pływania prowadzonej przez instruktora SwimCore.",
      },
      {
        text: "Podane ceny dotyczą wyłącznie usługi prowadzenia zajęć pływania. Koszt biletu wejścia na basen klient opłaca we własnym zakresie.",
      },
      {
        text: "Płatność za zajęcia następuje przelewem, BLIK-iem lub w innej formie uzgodnionej ze SwimCore.",
      },
      {
        text: "W przypadku płatności przelewem lub BLIK-iem klient powinien podać w tytule płatności imię i nazwisko uczestnika oraz termin zajęć.",
      },
      {
        text: "Na życzenie klienta SwimCore może wystawić fakturę zgodnie z obowiązującymi przepisami.",
      },
    ],
  },
  {
    title: "§6. Odwoływanie i przekładanie zajęć",
    points: [
      {
        text: (
          <>
            Klient może odwołać lub przełożyć zajęcia najpóźniej{" "}
            <strong className="text-white">24 godziny przed planowanym terminem zajęć</strong>.
          </>
        ),
      },
      {
        text: "W przypadku odwołania zajęć później niż 24 godziny przed planowanym terminem, SwimCore może uznać zajęcia za zrealizowane, chyba że strony ustalą inaczej.",
      },
      {
        text: "W przypadku nagłej choroby lub sytuacji losowej klient powinien poinformować SwimCore możliwie jak najszybciej.",
      },
      {
        text: "SwimCore zastrzega sobie możliwość odwołania lub przełożenia zajęć w przypadku choroby instruktora, awarii obiektu, zamknięcia basenu lub innych okoliczności niezależnych od SwimCore.",
      },
      {
        text: "W przypadku odwołania zajęć przez SwimCore klientowi przysługuje możliwość przełożenia zajęć na inny termin albo zwrot wpłaconej kwoty za niezrealizowane zajęcia.",
      },
    ],
  },
  {
    title: "§7. Spóźnienia",
    points: [
      {
        text: "Uczestnik powinien pojawić się na obiekcie z odpowiednim wyprzedzeniem, aby przygotować się do zajęć.",
      },
      {
        text: "Spóźnienie uczestnika nie powoduje automatycznego wydłużenia czasu zajęć.",
      },
      {
        text: "W przypadku spóźnienia instruktora czas zajęć zostanie odpowiednio wydłużony, przełożony lub rozliczony w inny sposób uzgodniony z klientem.",
      },
    ],
  },
  {
    title: "§8. Bezpieczeństwo uczestników",
    points: [
      {
        text: "Uczestnik zajęć powinien być zdrowy i zdolny do udziału w zajęciach pływania.",
      },
      {
        text: "Rodzic, opiekun prawny lub pełnoletni uczestnik powinien poinformować instruktora o istotnych przeciwwskazaniach zdrowotnych, chorobach, urazach, lęku przed wodą lub innych okolicznościach mogących wpływać na bezpieczeństwo zajęć.",
      },
      {
        text: "Instruktor ma prawo przerwać zajęcia, jeżeli zachowanie uczestnika zagraża jego bezpieczeństwu, bezpieczeństwu innych osób lub uniemożliwia prowadzenie zajęć.",
      },
      {
        text: "Uczestnik zobowiązany jest wykonywać polecenia instruktora związane z bezpieczeństwem i organizacją zajęć.",
      },
      {
        text: "Osoby niepełnoletnie pozostają pod opieką rodzica lub opiekuna prawnego do momentu przekazania ich instruktorowi oraz po zakończeniu zajęć.",
      },
    ],
  },
  {
    title: "§9. Obowiązki uczestnika",
    points: [
      {
        text: "Uczestnik powinien posiadać odpowiedni strój pływacki, czepek, klapki oraz inne akcesoria wymagane przez regulamin danego obiektu.",
      },
      {
        text: "Uczestnik zobowiązany jest do zachowania kultury osobistej wobec instruktora, innych uczestników, pracowników obiektu oraz osób korzystających z basenu.",
      },
      {
        text: "Zabronione jest wchodzenie do wody bez zgody instruktora.",
      },
      {
        text: "Zabronione jest wykonywanie skoków, nurkowań lub innych ćwiczeń bez zgody instruktora.",
      },
      {
        text: "W przypadku rażącego naruszenia zasad bezpieczeństwa SwimCore może odmówić dalszego prowadzenia zajęć.",
      },
    ],
  },
  {
    title: "§10. Zajęcia dla dzieci",
    points: [
      {
        text: "W przypadku osób niepełnoletnich zgodę na udział w zajęciach wyraża rodzic lub opiekun prawny.",
      },
      {
        text: "Rodzic lub opiekun prawny zobowiązany jest przekazać SwimCore aktualne informacje dotyczące zdrowia, poziomu umiejętności i potrzeb dziecka.",
      },
      {
        text: "Rodzic lub opiekun prawny powinien być dostępny telefonicznie w czasie trwania zajęć.",
      },
      {
        text: "Odbiór dziecka po zajęciach odbywa się przez rodzica, opiekuna prawnego lub osobę przez niego upoważnioną.",
      },
    ],
  },
  {
    title: "§11. Reklamacje",
    points: [
      {
        text: "Klient ma prawo zgłosić reklamację dotyczącą organizacji lub przebiegu zajęć.",
      },
      {
        text: (
          <>
            Reklamację można zgłosić mailowo na adres:{" "}
            <strong className="text-white">swimcore.plywanie@gmail.com</strong>.
          </>
        ),
      },
      {
        text: "Reklamacja powinna zawierać imię i nazwisko klienta, opis sytuacji oraz termin zajęć, których dotyczy.",
      },
      {
        text: "SwimCore rozpatruje reklamację w możliwie najkrótszym terminie.",
      },
      {
        text: "Niniejszy regulamin nie wyłącza ani nie ogranicza praw klienta wynikających z obowiązujących przepisów prawa.",
      },
    ],
  },
  {
    title: "§12. Dane osobowe",
    points: [
      {
        text: "Administratorem danych osobowych przekazywanych w związku z organizacją zajęć jest Igor Szczerba prowadzący działalność gospodarczą pod firmą Igor Szczerba SwimCore.",
      },
      {
        text: "Dane osobowe przetwarzane są w celu kontaktu z klientem, organizacji zajęć, prowadzenia rozliczeń oraz obsługi zgłoszeń.",
      },
      {
        text: "Podanie danych jest dobrowolne, ale niezbędne do organizacji zajęć.",
      },
      {
        text: "Dane nie są przekazywane osobom trzecim, z wyjątkiem sytuacji wymaganych przepisami prawa lub niezbędnych do realizacji usługi.",
      },
      {
        text: "Klient ma prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania zgodnie z obowiązującymi przepisami.",
      },
      {
        text: (
          <>
            W sprawach dotyczących danych osobowych można kontaktować się mailowo:{" "}
            <strong className="text-white">swimcore.plywanie@gmail.com</strong>.
          </>
        ),
      },
    ],
  },
  {
    title: "§13. Postanowienia końcowe",
    points: [
      {
        text: "SwimCore może aktualizować regulamin, w szczególności w przypadku zmiany sposobu organizacji zajęć, cennika lub obowiązujących przepisów.",
      },
      {
        text: "Aktualna wersja regulaminu może być udostępniana klientom w formie elektronicznej lub papierowej.",
      },
      {
        text: "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają obowiązujące przepisy prawa.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Regulamin zajęć SwimCore",
  description:
    "Regulamin zajęć pływania SwimCore dla dzieci, dorosłych i małych grup w Tarnowie.",
  alternates: {
    canonical: "/regulamin",
  },
  openGraph: {
    title: "Regulamin zajęć SwimCore",
    description:
      "Regulamin zajęć pływania SwimCore dla dzieci, dorosłych i małych grup w Tarnowie.",
    url: "/regulamin",
  },
};

export default function RegulationsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-ink text-white">
        <section className="relative border-b border-line pt-28 sm:pt-32">
          <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,90,0,0.14),transparent_34%)]" />
          <Container className="relative max-w-[980px] pb-12 sm:pb-16">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-orange/60 hover:text-orange"
            >
              Strona główna
            </Link>
            <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-orange">
              Dokumenty SwimCore
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-6xl">
              Regulamin zajęć SwimCore
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Zasady organizacji i uczestnictwa w zajęciach pływania prowadzonych w ramach
              SwimCore. Przejrzyste warunki pomagają nam prowadzić zajęcia bezpiecznie,
              konkretnie i z pełnym skupieniem na progresie.
            </p>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <Container className="max-w-[980px]">
            <div className="space-y-5 sm:space-y-6">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.5rem] border border-line bg-card p-5 sm:p-7"
                >
                  <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
                    {section.title}
                  </h2>
                  <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-white/70 marker:font-black marker:text-orange sm:text-base sm:leading-8">
                    {section.points.map((point, index) => (
                      <li key={index}>
                        <span>{point.text}</span>
                        {point.children ? (
                          <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5 text-white/60 marker:text-orange/80">
                            {point.children.map((child, childIndex) => (
                              <li key={childIndex}>{child}</li>
                            ))}
                          </ol>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

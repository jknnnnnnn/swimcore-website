import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const policyUrl = "https://swimcore.pl/polityka-prywatnosci";
const policyTitle = "Polityka prywatności | SwimCore";
const policyDescription =
  "Dowiedz się, w jaki sposób SwimCore przetwarza dane osobowe klientów oraz dane przekazywane przez formularze kontaktowe Facebook i Instagram.";
const linkClassName =
  "rounded-sm font-bold text-orange underline decoration-orange/40 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4 focus-visible:ring-offset-card";

type PrivacySection = {
  id: string;
  title: string;
  paragraphs: ReactNode[];
  items?: ReactNode[];
};

const sections: PrivacySection[] = [
  {
    id: "administrator",
    title: "Administrator danych osobowych",
    paragraphs: [
      <>
        Administratorem Twoich danych osobowych jest Igor Szczerba prowadzący działalność
        gospodarczą pod firmą <strong className="text-white">Igor Szczerba SwimCore</strong>,
        NIP: <strong className="text-white">9930716252</strong>, adres: ul. Akacjowa 9/34,
        33-100 Tarnów, Polska, dalej „SwimCore” lub „Administrator”.
      </>,
      <>
        W sprawach dotyczących danych osobowych skontaktujesz się z Administratorem
        e-mailem: <a href={`mailto:${siteConfig.email}`} className={linkClassName}>{siteConfig.email}</a>,
        telefonicznie: <a href={siteConfig.phoneHref} className={linkClassName}>{siteConfig.phone}</a>{" "}
        lub listownie na wskazany wyżej adres.
      </>,
      "Polityka dotyczy strony swimcore.pl, kontaktu ze SwimCore, organizacji zajęć oraz zgłoszeń z formularzy reklamowych Facebooka i Instagrama. Opisuje informacje o przetwarzaniu danych wymagane przez art. 13 RODO.",
    ],
  },
  {
    id: "rodzaje-danych",
    title: "Rodzaje przetwarzanych danych",
    paragraphs: [
      "Zakres danych zależy od sposobu kontaktu i informacji, które przekazujesz. Zbieramy dane bezpośrednio od Ciebie, również wtedy, gdy wysyłasz zgłoszenie za pośrednictwem Meta.",
      "W sprawie zajęć dziecka prosimy o kontakt rodzica lub opiekuna prawnego i przekazanie wyłącznie informacji potrzebnych do doboru zajęć. W otwartych formularzach nie przesyłaj danych o zdrowiu, numerów PESEL ani skanów dokumentów.",
    ],
    items: [
      "Formularze Meta Ads: numer telefonu i adres e-mail podane w formularzu oraz kontekst zgłoszenia, np. formularz lub kampania, z której pochodzi zapytanie.",
      "Formularz na stronie: imię, numer telefonu, odpowiedź na pytanie, dla kogo są zajęcia, cel zajęć oraz dobrowolna treść wiadomości.",
      "Kontakt telefoniczny, e-mailowy lub przez media społecznościowe: dane kontaktowe, treść korespondencji i informacje przekazane w sprawie zajęć.",
      "Organizacja i rozliczenie zajęć: niezbędne dane uczestnika lub opiekuna, uzgodnione terminy oraz dane do dokumentów rozliczeniowych, jeżeli są wymagane.",
      "Dane techniczne związane z działaniem strony i dostawców usług, np. adres IP, czas żądania i informacje o przeglądarce, przetwarzane w zakresie obsługi technicznej i bezpieczeństwa.",
    ],
  },
  {
    id: "cele-i-podstawy",
    title: "Cele i podstawy prawne przetwarzania danych",
    paragraphs: [
      "Dane przetwarzamy w zakresie potrzebnym do określonego celu. Podstawa prawna zależy od tego, czy pytasz o zajęcia, zapisujesz uczestnika, czy korzystasz z innej formy kontaktu.",
    ],
    items: [
      <>
        <strong className="text-white">Przedstawienie oferty na Twoje zapytanie, zaproponowanie terminów i zapis na zajęcia:</strong>{" "}
        art. 6 ust. 1 lit. b RODO, gdy podejmujemy na Twoje żądanie działania przed
        zawarciem umowy lub wykonujemy zawartą z Tobą umowę.
      </>,
      <>
        <strong className="text-white">Pozostała korespondencja i kontakt oraz organizacja udziału dziecka:</strong>{" "}
        art. 6 ust. 1 lit. f RODO. Naszym prawnie uzasadnionym interesem jest udzielenie
        odpowiedzi i sprawna organizacja zajęć, w tym ustalenia z rodzicem lub opiekunem.
      </>,
      <>
        <strong className="text-white">Rozliczenia i obowiązki podatkowe:</strong>{" "}
        art. 6 ust. 1 lit. c RODO, w zakresie wynikającym z obowiązujących przepisów.
      </>,
      <>
        <strong className="text-white">Ustalenie, dochodzenie lub obrona roszczeń oraz bezpieczeństwo usług:</strong>{" "}
        art. 6 ust. 1 lit. f RODO. Uzasadnionym interesem jest ochrona praw Administratora
        i użytkowników oraz zapobieganie nadużyciom.
      </>,
      <>
        <strong className="text-white">Późniejszy marketing, jeżeli wyrazisz odrębną zgodę:</strong>{" "}
        art. 6 ust. 1 lit. a RODO, wyłącznie w zakresie udzielonej zgody. Kontakt
        marketingowy telefoniczny, SMS-owy lub e-mailowy wymaga także uprzedniej zgody
        na odpowiedni kanał, zgodnie z art. 398 Prawa komunikacji elektronicznej.
      </>,
    ],
  },
  {
    id: "formularze-meta",
    title: "Formularze kontaktowe Meta Ads",
    paragraphs: [
      "SwimCore prowadzi kampanie Facebook Ads i Instagram Ads dotyczące lekcji pływania. W formularzach reklamowych zbieramy numer telefonu i adres e-mail. Po wysłaniu formularza dane są udostępniane SwimCore przez narzędzia Meta, a zgłoszenie obsługuje Administrator.",
      "Wykorzystujemy te dane do kontaktu w sprawie Twojego zapytania, przedstawienia oferty SwimCore, zaproponowania dostępnych terminów i organizacji zapisów. Wysłanie formularza z prośbą o kontakt dotyczy tej konkretnej sprawy.",
      "Odpowiedź na zgłoszenie nie oznacza zapisania do newslettera ani zgody na kolejne, niezwiązane z zapytaniem kampanie telefoniczne, SMS-owe lub e-mailowe. Późniejszy marketing wymaga odrębnej podstawy i odpowiednich zgód. Samo zapoznanie się z polityką prywatności nie jest zgodą marketingową.",
      <>
        Operatorem Facebooka i Instagrama dla użytkowników z Europejskiego Obszaru
        Gospodarczego jest Meta Platforms Ireland Limited. Meta przetwarza dane również
        na własne cele związane z funkcjonowaniem swoich platform, zgodnie z{" "}
        <a href="https://www.facebook.com/privacy/policy/" className={linkClassName}>
          Polityką prywatności Meta
        </a>. Niniejszy dokument opisuje wykorzystanie zgłoszeń przez SwimCore;
        nie zastępuje informacji Meta o przetwarzaniu na jej platformach.
      </>,
    ],
  },
  {
    id: "odbiorcy-danych",
    title: "Odbiorcy danych osobowych",
    paragraphs: [
      "Dostęp do danych może być potrzebny podmiotom wspierającym obsługę zgłoszenia lub realizację zajęć, w zakresie niezbędnym do ich zadań. Rola danego podmiotu zależy od usługi: może on przetwarzać dane na zlecenie albo działać jako odrębny administrator.",
    ],
    items: [
      <>
        <strong className="text-white">Formspree, Inc.</strong> obsługuje wysyłkę
        formularza kontaktowego na stronie, w tym przekazanie jego treści i obsługę
        techniczną zgłoszenia. Szczegóły opisuje{" "}
        <a href="https://formspree.io/legal/privacy-policy/" className={linkClassName}>
          polityka prywatności Formspree
        </a>.
      </>,
      "Dostawcy hostingu, obsługi domeny, poczty elektronicznej i łączności, w tym Google jako dostawca poczty Gmail używanej do kontaktu ze SwimCore.",
      "Meta Platforms w związku z formularzami reklamowymi i kontaktem przez Facebook lub Instagram, zgodnie z zasadami tych platform.",
      "Instruktorzy współpracujący ze SwimCore, wyłącznie w zakresie organizacji i prowadzenia zajęć, oraz podmioty obsługujące rozliczenia, jeżeli jest to niezbędne.",
      "Organy publiczne i inne podmioty uprawnione do otrzymania danych na podstawie przepisów prawa.",
    ],
  },
  {
    id: "transfery-poza-eog",
    title: "Przekazywanie danych poza Europejski Obszar Gospodarczy",
    paragraphs: [
      "Korzystanie z Meta, Formspree i usług poczty elektronicznej może wiązać się z przetwarzaniem danych poza EOG, w szczególności w Stanach Zjednoczonych. Formspree informuje, że korzysta z infrastruktury w USA.",
      <>
        Formspree wskazuje standardowe klauzule umowne jako mechanizm ochrony
        transferów, co opisuje na stronie{" "}
        <a href="https://formspree.io/security/" className={linkClassName}>
          informacji o bezpieczeństwie Formspree
        </a>. Google opisuje decyzje o odpowiednim stopniu ochrony i standardowe
        klauzule umowne w swoich{" "}
        <a href="https://policies.google.com/privacy/frameworks?hl=pl" className={linkClassName}>
          zasadach przesyłania danych
        </a>. Informacje o transferach dokonywanych przez Meta znajdują się w jej
        polityce prywatności wskazanej w sekcji 4.
      </>,
      "Transfer wymaga podstawy przewidzianej w rozdziale V RODO: odpowiedniej decyzji Komisji Europejskiej, o ile obejmuje odbiorcę i dany transfer, albo właściwych zabezpieczeń, takich jak standardowe klauzule umowne i wymagane środki dodatkowe. Samo korzystanie z zagranicznej usługi nie zastępuje tych wymagań.",
      <>
        Aby uzyskać informację o mechanizmie dotyczącym Twoich danych lub kopię
        właściwych zabezpieczeń, napisz na{" "}
        <a href={`mailto:${siteConfig.email}`} className={linkClassName}>{siteConfig.email}</a>.
      </>,
    ],
  },
  {
    id: "przechowywanie",
    title: "Okres przechowywania danych",
    paragraphs: [
      "Okres przechowywania zależy od celu i przebiegu kontaktu. Poniższe kryteria dotyczą danych przetwarzanych przez SwimCore; przechowywanie danych przez Meta na własne cele opisuje jej polityka.",
    ],
    items: [
      "Dane osób, które wysłały zgłoszenie, ale nie zapisały się na zajęcia, w tym z formularzy Meta Ads, przechowujemy maksymalnie przez 90 dni od ostatniego kontaktu w sprawie zapisu. Po tym okresie dane usuwamy lub anonimizujemy, chyba że ich dalsze przechowywanie jest niezbędne do realizacji obowiązków prawnych lub dochodzenia albo obrony konkretnych roszczeń.",
      "Dane klientów SwimCore przechowujemy przez okres niezbędny do realizacji usług i rozliczenia zajęć oraz wykonania obowiązków księgowych i podatkowych. Po tym okresie zachowujemy je wyłącznie w zakresie wymaganym przez prawo lub niezbędnym do konkretnych roszczeń.",
      "Dokumenty rozliczeniowe: przez okres wymagany przepisami podatkowymi i dotyczącymi rachunkowości.",
      "Dane niezbędne do ustalenia, dochodzenia lub obrony roszczeń: do upływu właściwych terminów przedawnienia albo prawomocnego zakończenia postępowania, jeżeli trwa ono dłużej.",
      "Dane przetwarzane na podstawie zgody: do jej cofnięcia lub wcześniejszego zakończenia celu przetwarzania. Niezbędny dowód zgody lub sprzeciwu może pozostać w zakresie potrzebnym do wykazania ich obsługi i ochrony przed roszczeniami.",
      "Dane techniczne: przez czas niezbędny do działania i zabezpieczenia usług oraz wyjaśnienia konkretnych incydentów. Dane, dla których ustaje cel i podstawa przechowywania, podlegają usunięciu lub anonimizacji.",
    ],
  },
  {
    id: "twoje-prawa",
    title: "Prawa osób, których dane dotyczą",
    paragraphs: [
      <>
        W sprawie swoich praw napisz na{" "}
        <a href={`mailto:${siteConfig.email}`} className={linkClassName}>{siteConfig.email}</a>{" "}
        albo skontaktuj się listownie. Zakres uprawnień zależy od podstawy i okoliczności
        przetwarzania; usunięcie danych nie zawsze jest możliwe, np. gdy ich zachowania
        wymaga prawo.
      </>,
      "Na żądanie odpowiadamy bez zbędnej zwłoki, co do zasady w ciągu miesiąca. W przypadkach przewidzianych w RODO termin może zostać przedłużony o kolejne dwa miesiące; o przedłużeniu i przyczynach informujemy w pierwszym miesiącu.",
    ],
    items: [
      "Prawo dostępu do danych i otrzymania ich kopii, sprostowania, usunięcia oraz ograniczenia przetwarzania na zasadach określonych w RODO.",
      "Prawo przenoszenia danych dostarczonych Administratorowi, gdy przetwarzanie odbywa się automatycznie na podstawie zgody lub umowy.",
      "Prawo sprzeciwu z przyczyn związanych z Twoją szczególną sytuacją wobec przetwarzania na podstawie prawnie uzasadnionego interesu. Wobec marketingu bezpośredniego możesz wnieść sprzeciw w dowolnym momencie, bez podawania przyczyny.",
      "Prawo cofnięcia zgody w dowolnym momencie, jeżeli jest podstawą przetwarzania. Cofnięcie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania i nie uzależniamy od niego obsługi zwykłego zapytania.",
      <>
        Prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli
        uważasz, że przetwarzanie narusza przepisy. Informacje o skargach są dostępne
        na stronie <a href="https://uodo.gov.pl/" className={linkClassName}>UODO</a>.
      </>,
    ],
  },
  {
    id: "dobrowolnosc",
    title: "Dobrowolność podania danych",
    paragraphs: [
      "Podanie danych w formularzach i przy kontakcie jest dobrowolne. Brak danych kontaktowych uniemożliwi jednak odpowiedź, przedstawienie oferty lub uzgodnienie terminu. W formularzu na stronie wiadomość jest opcjonalna, a pola wymagane służą obsłudze zgłoszenia i doborowi zajęć.",
      "Podanie danych potrzebnych do zawarcia i realizacji umowy jest warunkiem jej obsługi. Niektóre dane rozliczeniowe mogą być wymagane przez prawo. O koniecznym zakresie informujemy przy ich zbieraniu.",
      "Zgoda na późniejszy marketing jest dobrowolna. Jej brak lub cofnięcie nie wyklucza kontaktu w sprawie Twojego zgłoszenia ani udziału w zajęciach.",
    ],
  },
  {
    id: "automatyczne-decyzje",
    title: "Zautomatyzowane podejmowanie decyzji",
    paragraphs: [
      "SwimCore nie podejmuje wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby skutki prawne lub w podobny sposób istotnie na Ciebie wpływały. Ustalenia dotyczące zapisów i doboru zajęć prowadzi człowiek.",
      "Meta może korzystać z własnych mechanizmów personalizacji i doboru reklam na zasadach opisanych w jej polityce prywatności. Ta działalność platformy jest odrębna od obsługi Twojego zgłoszenia przez SwimCore.",
    ],
  },
  {
    id: "zmiany-polityki",
    title: "Zmiany polityki prywatności",
    paragraphs: [
      "Polityka może być aktualizowana w związku ze zmianami usług, sposobów przetwarzania lub przepisów. Aktualną wersję udostępniamy pod tym samym adresem z datą aktualizacji.",
      "Jeżeli planujemy wykorzystanie danych w nowym celu, przed rozpoczęciem takiego przetwarzania przekazujemy wymagane informacje i, jeżeli jest to potrzebne, prosimy o odrębną zgodę. Sama zmiana polityki nie zastępuje zgody.",
    ],
  },
];

export const metadata: Metadata = {
  title: policyTitle,
  description: policyDescription,
  alternates: { canonical: policyUrl },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "SwimCore",
    title: policyTitle,
    description: policyDescription,
    url: policyUrl,
  },
  twitter: {
    card: "summary",
    title: policyTitle,
    description: policyDescription,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar sectionLinksOnHome />
      <main className="bg-ink text-white">
        <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
          <Container className="relative max-w-[980px] pb-12 sm:pb-16">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-orange/60 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              Strona główna
            </Link>
            <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-orange">
              Dokumenty SwimCore
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black leading-[1.08] tracking-[-0.06em] text-white sm:text-6xl">
              Polityka prywatności
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Dowiedz się, jak wykorzystujemy dane przekazane przy kontakcie ze SwimCore,
              przez stronę oraz formularze reklamowe Facebooka i Instagrama, i jak możesz
              korzystać ze swoich praw.
            </p>
            <p className="mt-5 text-sm text-muted">
              Ostatnia aktualizacja: <time dateTime="2026-11-06">6 listopada 2026 r.</time>
            </p>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20" aria-label="Treść polityki prywatności">
          <Container className="max-w-[980px]">
            <nav aria-label="Spis treści polityki prywatności" className="mb-8 rounded-[1.5rem] border border-line bg-card p-5 sm:p-7">
              <h2 className="text-lg font-black text-white">Spis treści</h2>
              <ol className="mt-4 grid list-decimal gap-x-8 gap-y-3 pl-5 text-sm leading-6 marker:font-bold marker:text-orange sm:grid-cols-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="rounded-sm text-muted transition-colors hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-5 sm:space-y-6">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-tytul`}
                  className="rounded-[1.5rem] border border-line bg-card p-5 [overflow-wrap:anywhere] sm:p-7"
                >
                  <h2 id={`${section.id}-tytul`} className="text-2xl font-black leading-snug tracking-[-0.04em] text-white">
                    <span className="text-orange">{index + 1}.</span> {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                    {section.items ? (
                      <ul className="list-disc space-y-3 pl-5 marker:text-orange">
                        {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer sectionLinksOnHome />
    </>
  );
}

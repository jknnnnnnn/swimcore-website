import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const questions = [
  {
    question: "Od jakiego wieku można rozpocząć naukę?",
    answer:
      "Zajęcia dobieramy indywidualnie do wieku, poziomu i gotowości dziecka. Najlepiej skontaktować się z nami, a doradzimy odpowiednią formę zajęć.",
  },
  {
    question: "Czy prowadzicie zajęcia dla dorosłych od zera?",
    answer:
      "Tak. Pracujemy również z dorosłymi, którzy zaczynają od podstaw albo chcą przełamać strach przed wodą.",
  },
  {
    question: "Gdzie odbywają się zajęcia?",
    answer:
      "Zajęcia odbywają się w Tarnowie. Dokładną lokalizację i termin ustalamy indywidualnie po kontakcie.",
  },
  {
    question: "Czy przygotowujecie do egzaminów do straży, policji lub wojska?",
    answer:
      "Tak. Pomagamy w przygotowaniu techniki, wytrzymałości i pewności w wodzie pod konkretne wymagania egzaminacyjne.",
  },
  {
    question: "Czy cena obejmuje wejście na basen?",
    answer:
      "Nie. Cena dotyczy lekcji. Bilet wejścia na basen może być dodatkowo płatny, zależnie od obiektu.",
  },
  {
    question: "Jak zapisać się na pierwszą lekcję?",
    answer:
      "Wypełnij formularz na stronie albo napisz do nas bezpośrednio. Oddzwonimy i dobierzemy najlepszą formę zajęć.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 bg-light py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Najczęstsze pytania."
          description="Krótko i konkretnie. Jeśli potrzebujesz dodatkowych informacji, napisz do nas przez formularz."
          centered
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 lg:mt-14">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-all duration-300 open:border-orange/40 open:shadow-glow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-sm font-black leading-6 text-ink transition-colors duration-300 hover:text-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-orange/20 bg-orange/10 text-xl font-light text-orange transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-ink/10 px-5 py-5 text-sm leading-7 text-muted sm:px-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

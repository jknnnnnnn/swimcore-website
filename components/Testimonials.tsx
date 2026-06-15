import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    name: "Ewelina Sroka",
    rating: 5,
    text: "Pełen profesjonalizm i super podejście do dzieci. Polecam z całego serca lekcje z panem Igorem.",
  },
  {
    name: "Dagmara Fudalej",
    rating: 5,
    text: "Bardzo polecam Pana Igora. Ma świetne podejście do dzieci, syn nie może się doczekać lekcji i robi super postępy.",
  },
  {
    name: "Lucyna",
    rating: 5,
    text: "Polecam — świetnie uczą zarówno dzieci, jak i dorosłych. Instruktorzy mają dobre podejście do kursantów, tworzą przyjazną atmosferę i skutecznie zachęcają do nauki. Dzięki temu dzieci szybko oswajają się z wodą, rozwijają umiejętności i dobrze się bawią. Duży plus za zajęcia dla osób w każdym wieku.",
  },
  {
    name: "Monika Pytka",
    rating: 5,
    text: "Z całego serca polecam instruktora pływania Igora. Dzięki jego profesjonalnemu podejściu, cierpliwości i zaangażowaniu nasze dziecko nie tylko robi postępy, ale również nabrało pewności siebie w wodzie. Zajęcia są prowadzone w przyjaznej atmosferze, a metody nauczania są doskonale dostosowane do wieku i umiejętności dziecka. Instruktor potrafi zmotywować, zachęcić do pokonywania własnych ograniczeń i sprawić, że każda lekcja jest przyjemnością. Jesteśmy bardzo zadowoleni z postępów i z pełnym przekonaniem polecamy współpracę.",
  },
  {
    name: "Monika Hebda",
    rating: 5,
    text: "Polecam! Super podejście do dzieci. Syn zrobił duże postępy dzięki naprawdę ogromnemu zaangażowaniu i cierpliwości Pana Igora, który potrafi skutecznie zmotywować i zachęcić dziecko do pływania.",
  },
  {
    name: "Olimpia Zygadło",
    rating: 5,
    text: "Bardzo polecam zajęcia nauki pływania w SwimCore. Z zajęć korzystają aktualnie 7 i 9 latek. Dzięki wspaniałej kadrze chłopcy robią błyskawiczne postępy. Ponadto uczą się zasad zachowania w wodzie i budują odporność :)",
  },
  {
    name: "mati",
    rating: 5,
    text: "Polecam naukę pływania u Igora. Bardzo szybkie efekty.",
  },
  {
    name: "Mikołaj Grabowski",
    rating: 5,
    text: "Bardzo fajne podejście do treningu, odpowiednia organizacja, duże doświadczenie i wiedza. Zdecydowanie polecam.",
  },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=SwimCore+Tarn%C3%B3w+opinie";

const truncateText = (text: string, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
};

const visibleReviews = reviews.slice(0, 6);

export function Testimonials() {
  return (
    <section id="opinie" className="scroll-mt-16 bg-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Opinie Google"
          title="5.0 w Google — opinie klientów SwimCore"
          description="Zobacz, co mówią osoby po zajęciach pływania w Tarnowie."
          centered
        />

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex min-h-[255px] flex-col rounded-[1.75rem] border border-line bg-card p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/55 hover:shadow-glow sm:p-7"
            >
              <div>
                <h3 className="text-lg font-black tracking-[-0.035em] text-white">
                  {review.name}
                </h3>
                <p className="mt-1 text-xs font-bold text-muted">Ocena {review.rating}/5</p>
              </div>

              <div className="mt-5 flex gap-1 text-orange" aria-label={`Ocena ${review.rating} na 5`}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <span key={starIndex} aria-hidden="true" className="text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">„{truncateText(review.text)}”</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">
            5.0 w Google — 8 opinii klientów
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-orange/45 bg-ink px-6 py-3.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-orange hover:text-ink hover:shadow-glow"
          >
            Zobacz opinie w Google
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}

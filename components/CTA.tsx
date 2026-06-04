"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icons";

const formspreeEndpoint = "https://formspree.io/f/xgobvklp";

const goalOptions = [
  "Nauka pływania dziecka",
  "Nauka pływania dorosłego",
  "Doskonalenie techniki",
  "Egzaminy straż / policja / wojsko",
  "Triathlon / Ironman",
  "Trening zawodniczy",
];

type SubmitStatus = "idle" | "success" | "error";

export function CTA() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-12 bg-ink py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-card px-6 py-12 shadow-none sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-orange/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-orange/8 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,90,0,0.12),transparent_48%,rgba(255,255,255,0.03))]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange">Kontakt</p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-5xl lg:text-[3.8rem]">
                Zacznij trenować z konkretnym celem.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Wypełnij krótki formularz. Oddzwonimy, dobierzemy poziom i ustalimy pierwszy termin.
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-ink/70 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-orange">
                  Szybki kontakt
                </p>
                <div className="mt-4 grid gap-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-between gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-orange/50 hover:text-orange"
                  >
                    <span>Zadzwoń: {siteConfig.phone}</span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-between gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-orange/50 hover:text-orange"
                  >
                    <span>Email: {siteConfig.email}</span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0" />
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram SwimCore"
                    className="inline-flex items-center justify-between gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-orange/50 hover:text-orange"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon name="instagram" className="h-5 w-5" />
                      Instagram: {siteConfig.social.instagramHandle}
                    </span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-[1.5rem] border border-line bg-ink/80 p-5 shadow-none backdrop-blur-xl sm:grid-cols-2 sm:p-6"
            >
              <input type="hidden" name="_subject" value="Nowe zgłoszenie SwimCore" />
              <label className="grid gap-2 text-xs font-bold text-white/75">
                Imię
                <input
                  required
                  name="imię"
                  autoComplete="name"
                  className="min-w-0 rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Twoje imię"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75">
                Telefon
                <input
                  required
                  type="tel"
                  name="telefon"
                  autoComplete="tel"
                  inputMode="tel"
                  className="min-w-0 rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Numer telefonu"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Wiek uczestnika
                <input
                  required
                  name="wiek uczestnika"
                  className="min-w-0 rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="np. 8 lat lub dorosły"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Cel zajęć
                <select
                  required
                  name="cel zajęć"
                  defaultValue=""
                  className="min-w-0 rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                >
                  <option value="" disabled>
                    Wybierz cel
                  </option>
                  {goalOptions.map((goal) => (
                    <option key={goal}>{goal}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Wiadomość
                <textarea
                  name="wiadomość"
                  rows={4}
                  className="min-w-0 resize-y rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Opcjonalnie: napisz, czego potrzebujesz."
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-orange px-6 py-3.5 text-sm font-black text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                </button>
                {submitStatus === "success" ? (
                  <p className="mt-4 rounded-2xl border border-orange/25 bg-orange/10 px-4 py-3 text-center text-xs font-bold leading-6 text-white">
                    Dziękujemy! Odezwiemy się w sprawie pierwszej lekcji.
                  </p>
                ) : null}
                {submitStatus === "error" ? (
                  <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-xs font-bold leading-6 text-white">
                    Coś poszło nie tak. Zadzwoń: {siteConfig.phone}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

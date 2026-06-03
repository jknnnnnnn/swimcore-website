"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icons";

const contactEmail = siteConfig.email;

export function CTA() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const age = String(formData.get("age") ?? "");
    const goal = String(formData.get("goal") ?? "");
    const message = String(formData.get("message") ?? "").trim();
    const subject = `Zapis na lekcję SwimCore - ${name}`;
    const body = [
      "Dzień dobry,",
      "",
      "chcę zapisać się na pierwszą lekcję SwimCore.",
      "",
      `Imię: ${name}`,
      `Telefon: ${phone}`,
      `Wiek uczestnika: ${age}`,
      `Cel zajęć: ${goal}`,
      `Wiadomość: ${message || "brak dodatkowej wiadomości"}`,
      "",
      "Proszę o kontakt w sprawie terminu.",
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="kontakt" className="scroll-mt-12 bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink px-6 py-12 shadow-soft sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-orange/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(241,90,36,0.18),transparent_48%,rgba(255,255,255,0.06))]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange">Start your progress</p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-5xl lg:text-[3.8rem]">
                Zacznij trenować z konkretnym celem.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Wypełnij krótki formularz. Oddzwonimy, dobierzemy poziom i ustalimy pierwszy termin.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-7 inline-block text-sm font-bold text-white/55 transition-colors hover:text-orange"
              >
                {contactEmail}
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram SwimCore"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/55 transition-colors hover:text-orange"
              >
                <Icon name="instagram" className="h-5 w-5" />
                Instagram SwimCore
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-card backdrop-blur-xl sm:grid-cols-2 sm:p-6"
            >
              <label className="grid gap-2 text-xs font-bold text-white/75">
                Imię
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="min-w-0 rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Twoje imię"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75">
                Telefon
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  className="min-w-0 rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Numer telefonu"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Wiek uczestnika
                <input
                  required
                  name="age"
                  className="min-w-0 rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="np. 8 lat lub dorosły"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Cel zajęć
                <select
                  required
                  name="goal"
                  defaultValue=""
                  className="min-w-0 rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                >
                  <option value="" disabled>
                    Wybierz cel
                  </option>
                  <option>Nauka pływania dziecka</option>
                  <option>Nauka pływania dorosłego</option>
                  <option>Doskonalenie techniki</option>
                  <option>Egzaminy straż / policja / wojsko</option>
                  <option>Triathlon / Ironman</option>
                  <option>Trening zawodniczy</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs font-bold text-white/75 sm:col-span-2">
                Wiadomość
                <textarea
                  name="message"
                  rows={4}
                  className="min-w-0 resize-y rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
                  placeholder="Opcjonalnie: napisz, czego potrzebujesz."
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange px-6 py-3.5 text-sm font-black text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-navy"
                >
                  Wyślij zgłoszenie
                </button>
                <p className="mt-3 text-center text-[11px] font-semibold leading-5 text-white/50">
                  Przycisk otworzy Twój program pocztowy z gotową wiadomością.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

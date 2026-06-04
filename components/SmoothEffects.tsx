"use client";

import { useEffect } from "react";

const revealSelector = [
  "main > section",
  "main section .shadow-card",
  "main section .shadow-soft",
  "footer",
].join(", ");

export function SmoothEffects() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.dataset.reveal = "true";
      element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 55, 220)}ms`);
    });

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => {
      const { top } = element.getBoundingClientRect();

      if (top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
        return;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

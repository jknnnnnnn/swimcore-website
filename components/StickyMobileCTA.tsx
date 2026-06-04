"use client";

import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const contactSection = document.getElementById("kontakt");

    if (!contactSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.01,
      },
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#kontakt"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? undefined : -1}
      className={`fixed inset-x-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-orange px-5 py-4 text-sm font-black text-ink shadow-[0_0_34px_rgba(255,90,0,0.24)] transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110 lg:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      Umów pierwszą lekcję
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#kontakt"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? undefined : -1}
      className={`fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[60] flex items-center justify-center rounded-full border border-orange bg-orange px-5 py-4 text-sm font-black text-ink shadow-[0_0_34px_rgba(255,90,0,0.26)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-7 opacity-0"
      }`}
    >
      Umów pierwszą lekcję
    </a>
  );
}

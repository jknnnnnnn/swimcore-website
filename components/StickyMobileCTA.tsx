"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

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
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-x-3 bottom-[calc(0.85rem+env(safe-area-inset-bottom))] z-[60] grid grid-cols-2 gap-2 rounded-[1.35rem] border border-line bg-card/95 p-2 shadow-[0_0_34px_rgba(255,90,0,0.24)] backdrop-blur-xl transition-all duration-500 ease-out lg:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-7 opacity-0"
      }`}
    >
      <a
        href={siteConfig.phoneHref}
        tabIndex={isVisible ? undefined : -1}
        className="flex min-h-12 items-center justify-center rounded-full bg-orange px-4 text-sm font-black text-ink transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Zadzwoń
      </a>
      <a
        href="#kontakt"
        tabIndex={isVisible ? undefined : -1}
        className="flex min-h-12 items-center justify-center rounded-full border border-orange/45 bg-ink px-4 text-sm font-black text-white transition-all duration-300 hover:border-orange hover:bg-orange/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Napisz
      </a>
    </div>
  );
}

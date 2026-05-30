import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081120",
        navy: "#0B1730",
        purple: "#7C3AED",
        cyan: "#22D3EE",
        muted: "#94A3B8",
        surface: "#101D36",
        line: "rgba(148, 163, 184, 0.16)",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.28)",
        card: "0 14px 36px rgba(0, 0, 0, 0.18)",
        glow: "0 14px 36px rgba(124, 58, 237, 0.35), 0 8px 28px rgba(34, 211, 238, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        navy: "#050505",
        card: "#0E0E0E",
        flame: "#FF5A00",
        orange: "#FF5A00",
        tangerine: "#FF5A00",
        light: "#050505",
        muted: "#A3A3A3",
        surface: "#0E0E0E",
        line: "#1F1F1F",
      },
      boxShadow: {
        soft: "0 18px 58px rgba(0, 0, 0, 0.34)",
        card: "0 12px 34px rgba(0, 0, 0, 0.22)",
        glow: "0 0 34px rgba(255, 90, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;

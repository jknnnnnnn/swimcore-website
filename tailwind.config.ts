import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        navy: "#111111",
        flame: "#F15A24",
        orange: "#FF6B00",
        light: "#F8FAFC",
        muted: "#64748B",
        surface: "#FFFFFF",
        line: "rgba(17, 17, 17, 0.1)",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 17, 17, 0.14)",
        card: "0 14px 36px rgba(17, 17, 17, 0.08)",
        glow: "0 16px 42px rgba(241, 90, 36, 0.28), 0 10px 28px rgba(255, 107, 0, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;

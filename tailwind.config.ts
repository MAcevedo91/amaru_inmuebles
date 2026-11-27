import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento cálido bronce-ámbar — único acento cromático en todo el sistema
        gold: {
          50: "#FEF8EC",
          100: "#FDECCB",
          200: "#FBD896",
          300: "#F8C364",
          400: "#F5B03B",
          500: "#EEA024",
          600: "#C57C11",
          700: "#965B0A",
        },
        // Escala piedra cálida (travertino) — fondos claros, bordes y texto accesible
        ink: {
          50: "#F7F5F0",
          100: "#EFECE4",
          200: "#E2DDD2",
          300: "#C8C2B4",
          400: "#8A8478",
          500: "#68635A",
          600: "#4F4B43",
          700: "#3A3731",
          800: "#262420",
          900: "#151412",
          950: "#0D0D0C",
        },
        // Pizarra arquitectónica nocturna — navbar, hero backdrop, banners oscuros
        dark: {
          600: "#2A3447",
          700: "#1E2636",
          800: "#141B29",
          900: "#0D121D",
          950: "#080B12",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13, 18, 29, 0.05)",
        "card-hover": "0 8px 24px rgba(13, 18, 29, 0.08)",
        "card-lg": "0 16px 40px rgba(8, 11, 18, 0.22)",
      },
      transitionTimingFunction: {
        architecture: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

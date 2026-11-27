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
        // Acento único — amber cálido de la imagen de referencia
        gold: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F5A623", // ← acento principal: botones, links activos
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Ramp neutral cálida (grafito levemente cálido)
        ink: {
          50:  "#F9F8F7",
          100: "#F2F0EE",
          200: "#E5E1DC",
          300: "#CCC5BC",
          400: "#A89E92",
          500: "#857870",
          600: "#6B5E55",
          700: "#4A3F38",
          800: "#2D2520",
          900: "#1A1310",
          950: "#0F0C09",
        },
        // Superficie oscura del hero y la banner
        dark: {
          900: "#0F1114",
          800: "#15181E",
          700: "#1E2229",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px 0 rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;

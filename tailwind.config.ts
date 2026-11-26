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
        amaru: {
          50: "#FAF7F2",
          100: "#F4EFE6",
          200: "#E6DBCF",
          300: "#D3BEA7",
          400: "#B89975",
          500: "#9B764B", // Color base exacto del logo Amaru Inmuebles
          600: "#86623C",
          700: "#6B4D2F",
          800: "#543C25",
          900: "#3E2C1B",
          950: "#22170E",
        },
        executive: {
          900: "#111215",
          800: "#1A1C21",
          700: "#272A32",
          600: "#4B5262",
          500: "#6E7787",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
        champagne: {
          50: "#FCFAF7",
          100: "#F8F4EE",
          200: "#EFE8DC",
          300: "#E3D5C0",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "Cambria", "serif"],
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
      },
      boxShadow: {
        luxury:
          "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 20px 40px -15px rgba(155, 118, 75, 0.07)",
        "luxury-hover":
          "0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 25px 50px -12px rgba(155, 118, 75, 0.15)",
      },
      letterSpacing: {
        widest: ".2em",
        luxury: ".15em",
      },
    },
  },
  plugins: [],
};
export default config;

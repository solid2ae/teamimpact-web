import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx,js,json}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#f7f1df",
          100: "#e8dcc2",
          200: "#d6c59c",
          300: "#c2aa74",
          400: "#b08f4f",
          500: "#9a7b35",   // primary antique gold
          600: "#7d6229",
          700: "#5f4a1f",
          800: "#433316",
          900: "#2a200e",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;

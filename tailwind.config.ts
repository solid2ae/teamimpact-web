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
          50: "#fff7cc",
          100: "#ffef99",
          200: "#ffe366",
          300: "#ffd433",
          400: "#f6c20f",
          500: "#d4a406",
          600: "#b38503",
          700: "#8c6601",
          800: "#624700",
          900: "#3d2b00",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cbPrimary: "#0EA5E9",     // azul tech (CTA)
        cbPrimaryDark: "#2563EB", // azul cobalto
        cbInk: "#111827",         // grafite
        cbPaper: "#F8FAFC",       // fundo claro
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      container: { center: true, padding: "1rem" },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [],
};
export default config;

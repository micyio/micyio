import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1296px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway-sans)"],
        lato: ["var(--font-lato-sans)"],
      },
      colors: {
        primary: "#FFAF00",
        deepOrange: "#E28500",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B06A",
          dark: "#A8883F",
        },
        olive: {
          DEFAULT: "#8B8673",
          dark: "#736F5F",
          light: "#9A9685",
        },
        muted: "#A1A1AA",
        card: "#111111",
        "card-border": "#1F1F1F",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.25em",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

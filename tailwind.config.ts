import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4F8", 100: "#D9E2EC", 200: "#BCCCDC", 300: "#9FB3C8",
          400: "#829AB1", 500: "#627D98", 600: "#486581", 700: "#334E68",
          800: "#243B53", 900: "#102A43",
        },
        teal: {
          50: "#F0FAFA", 100: "#CCEFEF", 200: "#99DFDF", 300: "#66CFCF",
          400: "#33BFBF", 500: "#00AFAF", 600: "#008C8C", 700: "#006969",
          800: "#004646", 900: "#002323",
        },
        warm: {
          50: "#FDFAF5", 100: "#F5EDD8", 200: "#ECDABB", 300: "#E2C79E",
          400: "#D9B481", 500: "#CFA164", 600: "#A67E47", 700: "#7D5C2A",
          800: "#533A0D", 900: "#2A1800",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(16,42,67,0.06)",
        card: "0 4px 20px rgba(16,42,67,0.08)",
        "card-hover": "0 8px 30px rgba(16,42,67,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;

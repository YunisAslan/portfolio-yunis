/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mm: "324px",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(141deg, #969699, #1e1e22)",
      },
      colors: {
        taxonomyBlack: "#030711",
        btnHover: "#0a111d",
        lightBorder: "#E2E8F0",
        darkBorder: "#1D283A",
      },
      boxShadow: {
        menuShadow: "0 9px 30px 0 rgba(0, 0, 0, 0.1)",
        circleShadow: "0 8px 48px 0 rgba(0, 0, 0, 0.12)",
        formShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.04)",
      },
      transitionTimingFunction: {
        btnCubic: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*');
    }),
  ],
};

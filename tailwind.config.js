/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "mm": "324px"
      },
      colors: {
        "taxonomyBlack": "#030711",
        "lightBorder": "#E2E8F0",
        "darkBorder":"#1D283A"
      },
      boxShadow: {
        "mainShadow": "0 9px 30px 0 rgba(0, 0, 0, 0.1)",
        "containerShadow": "rgba(0, 0, 0, 0.1) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        "circleShadow": "0 8px 48px 0 rgba(0, 0, 0, 0.12)"
      }
    },
  },
  plugins: [],
}


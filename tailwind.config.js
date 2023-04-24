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
        "mm":"324px"
      },
      colors: {
        "textColor": '#323235',
        "footer-bg": "#F1F1F1",
        "testimonialBg": "rgb(22, 11, 87)",
        "fromColorTestimonial": "#141E30",
        "toColorTestimonial": "#243B55",
        "BgFrom":"#d3cce3",
        "BgTo": "#e9e4f0",
        "taxonomyBlack": "#030711"
      },
      boxShadow: {
        "mainShadow": "0 4px 48px 0 rgb(0 0 0 / 20%)"
      }
    },
  },
  plugins: [],
}


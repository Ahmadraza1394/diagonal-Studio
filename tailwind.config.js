// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Montserrat", "Arial", "sans-serif"], // Substitute for Monument Grotesk
        museo: ["Montserrat", "Arial", "sans-serif"], // Substitute for Museo Intl
        cardinal: ["Playfair Display", "serif"], // Substitute for Cardinal Classic
        supreme: ["Montserrat", "Arial", "sans-serif"], // Substitute for Supreme Jumbo
      },
      colors: {
        "pantone-719": "#edc7a2",
        "pantone-7515": "#c68b66",
        "pantone-283": "#92c0e9",
        "pantone-2935": "#0055b8",
        "pantone-black": "#222222",
      },
    },
  },
  plugins: [],
};

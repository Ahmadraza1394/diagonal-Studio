// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Main Titles / Hero Text
        "monument-extended": ["Monument Kaleidoscope", "Arial", "sans-serif"], // Monument Extended Bold/Extra Bold
        // Section Titles / Projects
        monument: ["ABC Monument Grotesk", "Arial", "sans-serif"], // Monument Grotesk Bold
        // Body Text / Paragraphs
        "abc-monument": ["ABC Monument Grotesk", "Arial", "sans-serif"], // ABC Monument Grotesk Regular/Medium
        // Footers / Captions / Secondary
        cardinal: ["Cardinal Classic", "serif"], // Cardinal Classic Regular/Italic
        // "Diagonal" logo references
        supreme: ["Supreme", "Arial", "sans-serif"], // Supreme Regular (logo only)

        // Legacy aliases for compatibility
        museo: ["ABC Monument Grotesk", "Arial", "sans-serif"], // Map to ABC Monument for body text
      },
      colors: {
        "pantone-719": "#edc7a2",
        "pantone-7515": "#c68b66",
        "pantone-283": "#0055b8", // This is the blue color
        "pantone-2935": "#0055b8",
        "pantone-black": "#222222",
        "accent-purple": "#5C2F80", // New purple accent color for better contrast
      },
    },
  },
  plugins: [],
};

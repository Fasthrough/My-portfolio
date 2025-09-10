/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],               // look for Tailwind classes in every HTML file
  theme: {
    extend: {
      colors: {
        primary: "#0831e7",
        primaryDark: "#0248e0",
        secondary: "#ca8a04",
        mayaBlue: "#70bdfb",
        textDark: "#1f2937",
        textLight: "#6b7280",
        extraLight: "#faf5ff",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "screen-xl": "1200px", // same as your --max-width variable
      },
    },
  },
  plugins: [],
};

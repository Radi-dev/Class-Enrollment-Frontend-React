const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primColor: "#F7F4F9",
      },
      height: {
        screen80: "80vh",
      },
      width: { screenHalf: "50vw" },
      fontFamily: {
        Comfortaa: ["Comfortaa", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mini: "250px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1100px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        lineirMix_1: "#903AFF",
        lineirMix_2: "FE34B9",
        primaryClor: "#150E28",
        secondarColor: "#D434FE",
        small_textColor: "#FF26B9",
        extra: "#A866FD",
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "mobile": "url('/images/pattern-background-mobile.svg')",
        "desktop": "url('/images/pattern-background-desktop.svg')",
      },

      colors: {
        paleBlue: "hsl(225,100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desarutadedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
}

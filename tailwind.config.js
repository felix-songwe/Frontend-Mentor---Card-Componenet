/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "810px",
      lg: "1280px",
      xl: "1440px",
    },
    colors: {
      dark_blue1: "#090b1a",
      dark_blue2: "#1b1938",
      violet: "#aa5cdb",
    },
    textColor: {
      white: "#ffffff",
      white1: "#ffffffbf",
      white2: "#ffffff99",
      dark_blue1: "#090b1a",
      dark_blue2: "#1b1938",
      violet: "#aa5cdb",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    plugins: [],
  },
};

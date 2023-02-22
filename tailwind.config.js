/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my: {
          black: "#150C07",
          orange: "#E8865C",
          white: "#F1E9E6",
          skin: "#EDE1DC",
        },
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)", ...fontFamily.sans],
      },
      screens: {
        wide: "2560px",
      },
    },
  },
  plugins: [],
};

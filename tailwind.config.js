/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "36rem",
        md: "98vw",
        lg: "90vw",
        xl: "75rem",
      },
    },
    screens: {
      xs: "100%",
      sm: `${576 / 16}rem`,
      md: `${768 / 16}rem`,
      lg: `${992 / 16}rem`,
      xl: `${1200 / 16}rem`,
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "36rem",
          md: "98vw",
          lg: "90vw",
          xl: "75rem",
        },
      },
    },
  },
  plugins: [],
};

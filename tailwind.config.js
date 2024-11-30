/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark_blue: "#304484",
        light_blue: "#6086BD",
        sky_blue: "#579EE0",
        text: "#828282",
        green: "#174515",
        light_green: "#44A5B5",
        brown: "#AD8E54",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

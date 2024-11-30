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
      screens: {
        'custom': '1360px',
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["16px"],
        "heading-md": ["14px"],
        "heading-sm": ["12px"], 

        "desc-lg": ["14px"],
        "desc-md": ["12px"], 
        "desc-sm": ["10px"],

        "table-lg": ["14px"],
        "table-md": ["12px"], 
        "table-sm": ["10px"],
      },
    },
  },
  plugins: [],
};

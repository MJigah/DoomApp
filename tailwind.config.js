/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2658A5",
        btnPrimary: "#003B95",
        lightGrey: "#808080",
        darkBlue: "#0c1825",
        darkGrey: "#d9d9d9",
        lightBlack: "#110000",
        textGreen: "#28a745",
        textRed: "#dc3545",
      },
      fontFamily: {
        roboto: ['"Roboto"'],
      },
    },
  },
  plugins: [],
};

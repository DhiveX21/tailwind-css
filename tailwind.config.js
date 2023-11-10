/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        s_darkPurple: "#170312",
        s_deepPurple: "#33032F",
        s_purple: "#531253",
        s_spaceBlue: "#2E31C7",
        s_yellow: "#F3B61F",
        s_textGray: "#333",
      },
    },
  },
  plugins: [],
};

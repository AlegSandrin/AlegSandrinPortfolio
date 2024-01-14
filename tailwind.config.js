/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('src/assets/img/background.png')",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      },
    },
  },
  plugins: [],
};

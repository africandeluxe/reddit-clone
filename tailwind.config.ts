/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redditOrange: "#FF4500",
        redditDark: "#1A1A1B",
        redditLight: "#D7DADC",
      },
    },
  },
  plugins: [],
};

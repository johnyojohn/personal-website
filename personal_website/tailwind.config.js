/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#e43a46",
        customBlue: "#0a93a8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)"],
        body: ["var(--font-inter)"],
        gilroyLight: "Gilroy-Light",
        gilroyBold: "Gilroy-ExtraBold",
        rische: "rische",
      },
    },
  },
  plugins: [],
};

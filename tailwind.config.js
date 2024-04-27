/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        uregular: ["Urbanist-Regular", "sans-serif"],
        umedium: ["Urbanist-Medium", "sans-serif"],
        usemibold: ["Urbanist-SemiBold", "sans-serif"],
        ubold: ["Urbanist-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}


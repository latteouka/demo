/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loading: "moveup 2s ease-in-out infinite",
      },
      keyframes: {
        moveup: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-8px)" },
          "40%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

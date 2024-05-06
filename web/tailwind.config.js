/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hunger: "#2FB44C",
        thirst: "#1B9BD3",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./lib/components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

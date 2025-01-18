/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-300': '#93C5FD',
        'purple-400': '#A78BFA',
        'yellow-300': '#FACC15',
      },
    },
  },
  plugins: [],
}
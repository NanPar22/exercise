/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        thai: ['Prompt', 'sans-serif'], // เพิ่มฟอนต์ Prompt
      },
    },
  },
  plugins: [],
}


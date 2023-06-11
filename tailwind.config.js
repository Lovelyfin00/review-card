/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",],
  theme: {
    extend: {
      colors: {
        'grey-500': '#f8fafc',
        'grey-600': '#475569',
        'primary-100': '#e2e0ff',
        'primary-200': '#c1beff',
        'primary-300': '#a29dff',
        'primary-400': '#837dff',
        'primary-500': '#645cff',
        'primary-600': '#504acc',
        'primary-700': '#3c3799',
        'primary-800': '#282566',
        'primary-900': '#141233',
      },
    },
  },
  plugins: [],
}


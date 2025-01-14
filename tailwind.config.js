/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'custom-sm': '500px',
        'custom-md': '1000px', // Custom breakpoint
        'custom-lg': '1215px', // Another custom breakpoint
      },
    },
  },

  plugins: [],
}


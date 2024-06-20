/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#6db3f2',
          DEFAULT: '#282c34',
          dark: '#2b6cb0',
        }, // Add more custom colors as needed
      },
      fontFamily: {
        'curly': ['Dancing Script', 'cursive'],
        'playwrite': ['Playwrite NZ']
      },
    },
  },
  plugins: [],
}

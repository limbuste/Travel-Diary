// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        title: ['Lato', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#611bf8',
          500: '#7341ff',
          600: '#631bff',
        },
        accent: {
          DEFAULT: '#ff632c',
          light: '#fffaf6',
        },
        neutral: {
          100: '#f7f7f7',
          200: '#eeeeee',
          300: '#e0e0e0',
          800: '#545454',
        },
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      borderRadius: {
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '72px',
      },
    },
  },
  plugins: [],
}
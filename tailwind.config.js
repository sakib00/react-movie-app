module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#221F1F',
          dark: '#222222',
        },
        secondary: {
          DEFAULT: '#E50914',
          dark: '#B81D24',
        },
        light: {
          DEFAULT: '#F5F5F1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

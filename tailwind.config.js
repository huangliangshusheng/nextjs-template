module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("nightwind")],
};

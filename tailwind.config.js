const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        100: '#e49e4c',
      },
    },
  },
  plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer],
  experimental: { optimizeUniversalDefaults: true },
  corePlugins: { preflight: false },
};

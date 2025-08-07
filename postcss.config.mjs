
const config = {
   content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        metal: ['var(--font-metal-mania)', 'var(--font-merienda)', 'cursive'],
      },
      backgroundImage: {
        'hour-glass': "url('/images/hour-glass.jpg')",
        'earth-drought':"url('/images/earth-drought.jpg')",
        'nature-drought':"url('/images/nature-drought.jpg')",
        'Twilight': "url('/images/Twilight.jpg')"
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

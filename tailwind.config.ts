/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        metal: ['var(--font-metal-mania)', 'var(--font-merienda)', 'cursive'],
      },
      backgroundImage: {
        'hour-glass': "url('/public/images/hour-glass.jpg')",
        'earth-drought':"url('/public/images/earth-drought.jpg')",
        'nature-drought':"url('/public/images/nature-drought.jpg')",
        'Twilight': "url('/public/images/Twilight.jpg')"
      },
    },
  },
  plugins: [],
};

export default config;

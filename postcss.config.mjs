const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
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
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

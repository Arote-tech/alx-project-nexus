import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        metal: ['var(--font-metal-mania)', 'var(--font-merienda)', 'cursive'],
      }, 
    },
  },
  plugins: [],
};

export default config;

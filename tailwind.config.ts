import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '2200px',
        '3xl': '2400px',
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          900: 'rgb(12, 12, 12)',
        },
      },
    },
  },
  plugins: [],
};
export default config;

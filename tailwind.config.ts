import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2C5F6E',
          accent:  '#2DAA6E',
          bright:  '#1ECAA3',
          light:   '#F4F7F6',
          dark:    '#1A1A2E',
          text:    '#3A4A47',
          muted:   '#6B7B78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

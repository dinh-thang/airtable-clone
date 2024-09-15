import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'at-promo-banner': '#f0f6ff',
        'at-btn-primary': '#1b61c9',
        'at-btn-primary-hover': '#254fad',
        'at-btn-primary-active': '#1a3866',
        'at-btn-primary-focus': '#254fad',
        'at-btn-primary-loading': '#1a3866',
        'at-btn-primary-disabled': '#e0e2e6',
        'at-banner-text-gray': '#070c14d1',
      },
      textColors: {
        'at-primary-disabled': '#41454d',
      },
      lineHeight: {
        'at-p': '1.3',
      },
      borderColors: {
        'at-border-': '#040e20b0',
        'at-border-weak': '#0114351f',
      },
      fontSize: {
        sm: ['14px', '1.3'],  // 14px font size with 20px line height
        base: ['16px', '1.3'], // 16px font size with 24px line height
        lg: ['18px', '1.3'],   // 18px font size with 28px line height
      },
      fontFamily: {
        sans: [
          'Haas',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      screens: {
        'lg': '1080px',
        'xl': '1440px'
      },
    },
  },
  plugins: [],
} satisfies Config;

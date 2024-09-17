import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'promo-banner': '#f0f6ff',
        'at-btn-primary': '#1b61c9',
        'at-btn-primary-hover': '#254fad',
        'at-btn-primary-active': '#1a3866',
        'at-btn-primary-focus': '#254fad',
        'at-btn-primary-loading': '#1a3866',
        'at-btn-primary-disabled': '#e0e2e6',
        'at-banner-text-gray': '#070c14d1',
        'at-btn-secondary-hover': '#0d52ac14'
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
        'md2': '1024px',
        'lg': '1080px',
        'xl': '1440px'
      },
      backgroundImage: {
        'main-hero': "url('/Homepage-Hero.jpeg')",
        'main-hero-bg': "url('/Homepage_Blue_BG.jpeg')",
      },
      boxShadow: {
        'at-btn-shadow-primary-focused': `
          rgba(7, 104, 248, 0.5) 0px 0px 0px 2px,
          rgba(0, 0, 0, 0.32) 0px 0px 1px 0px,
          rgba(0, 0, 0, 0.08) 0px 0px 2px 0px,
          rgba(45, 127, 249, 0.28) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset,
          rgb(255, 255, 255) 0px 0px 0px 1px inset
        `,
        'at-btn-shadow-primary-hover': `
          0px 0px 1px #00000052, 
          0px 0px 3px #0000001c, 
          0px 1px 4px #2d7ff97a, 
          inset 0px 0px 0px 0.5px #0000001f
        `,
        'at-btn-shadow-secondary': `
          0px 0px 1px #00000052, 
          0px 0px 2px #00000014, 
          0px 1px 3px #00000014, 
          inset 0 0 0 1px #0114351f
        `,
        'at-btn-shadow-secondary-hover': `
          0px 0px 1px #00000052, 
          0px 0px 2px #00000014, 
          0px 1px 3px #00000014, 
          inset 0 0 0 1px #458fff
        `,
      }
    },
  },
  plugins: [],
} satisfies Config;

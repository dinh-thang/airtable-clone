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
        'at-btn-secondary-hover': '#0d52ac14',
        'at-half-black': '#1f1f1f',
        'at-table-bot-gray': 'hsl(0, 0%, 82%)',
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
        'auth-sans': [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        'main-sans': [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'sans-serif',
        ],
        'main-content-sans': [
          '"Inter Display"', // Inter Display font
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'sans-serif',
        ],
        'base-sans': [
          'system-ui',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'sans-serif',

        ]
      },
      screens: {
        'md2': '1024px',
        'lg': '1080px',
        'xl': '1440px'
      },
      backgroundImage: {
        'rainbow-btn': `linear-gradient(91.6deg, #f5620c -3.95%, #fc4777 14.34%, #e848c0 28.2%, #9b67f0 52.43%, #458fff 68.27%, #0ab2fa 86.46%, #0dbdb4 101.9%)`,
        'homepage-blue': "url('/homepage-blue-bg.webp')",
      },
      boxShadow: {
        'at-view-top-bar': 'rgba(200, 200, 200, 1) 0 1px 0 0',
        'at-btn-primary-focused': `
          rgba(7, 104, 248, 0.5) 0px 0px 0px 2px,
          rgba(0, 0, 0, 0.32) 0px 0px 1px 0px,
          rgba(0, 0, 0, 0.08) 0px 0px 2px 0px,
          rgba(45, 127, 249, 0.28) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset,
          rgb(255, 255, 255) 0px 0px 0px 1px inset
        `,
        'at-btn-primary-shadow': `
          rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, 
          rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, 
          rgba(45, 127, 249, 0.28) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset`,
        'at-btn-primary-hover': `
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
        'at-rainbow-shadow': `
          rgba(24, 29, 38, 0.32) 0px 0px 1px 0px, 
          rgba(24, 29, 38, 0.08) 0px 0px 2px 0px, 
          rgba(24, 29, 38, 0.08) 0px 1px 3px 0px
        `,
        'at-auth-white-btn':
          '0px 1px 3px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.32)'
        ,
        'at-main-nav': `
          rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px
        `,
        'at-main-nav-hover': `
          0 0 1px 0 rgba(0, 0, 0, 0.48), 0 0 2px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 8px 0 rgba(0, 0, 0, 0.08);
        `,
      }
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F9FF", // Very light blue background
        foreground: "#0F2B56", // Dark navy blue from logo
        primary: {
          DEFAULT: "#0074C7", // Bright blue from logo
          dark: "#005a9c",
        },
        surface: "#FFFFFF",
        surfaceBorder: "#E2E8F0"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ribbon-flow': 'ribbonFlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ribbonFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}

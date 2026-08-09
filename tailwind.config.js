/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // Pure white
        foreground: "#0F2B56", // Dark navy blue from logo
        primary: {
          DEFAULT: "#0074C7", // Bright blue from logo
          dark: "#005a9c",
          neon: "#00E5FF", // Electric Cyan for holograms
        },
        surface: "rgba(255, 255, 255, 0.4)", // Frosted glass surface
        surfaceBorder: "rgba(255, 255, 255, 0.6)"
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 116, 199, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 116, 199, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ribbon-flow': 'ribbonFlow 20s linear infinite',
        'draw-path': 'drawPath 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ribbonFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}

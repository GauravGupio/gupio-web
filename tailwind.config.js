/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'gupio': {
          'dark-blue': '#00021a',
          'blue': '#011c33',
          'yellow': '#ffbf00',
          'white': '#fff',
          'gray': '#d3d3d3',
        },
        // Additional Blues
        'blue': {
          'dark': '#010f27',
          'navy': '#012970',
          'light': '#0d376f',
          'accent': '#1f2348',
        },
        // Yellow Variants
        'yellow': {
          'primary': '#ffbf00',
          'light': '#fde404fb',
          'accent': '#facc15',
          'transparent': '#ffbf0050',
          'overlay': '#ffbf0061',
        },
        // Gray Scale
        'gray': {
          'light': '#d3d3d3',
          'medium': '#5f6980',
          'dark': '#444444',
          'text': '#213547',
        },
        // White Variants
        'white': {
          'pure': '#fff',
          'transparent-50': '#ffffff50',
          'transparent-70': '#ffffff70',
          'transparent-90': '#ffffffb2',
        },
        // Dashboard
        'dashboard': {
          'primary': '#4154f1',
          'secondary': '#717ff5',
          'background': '#f6f9ff',
          'text': '#444444',
          'border': '#eaedf1',
          'card': '#ebeef4',
          'success': '#cfe2ff',
          'warning': '#e2e3e5',
        },
        // Misc
        'misc': {
          'black': '#000',
          'shadow': '#222',
          'overlay': '#2e2e2e',
          'border-light': '#ffffff66',
          'border-dark': '#ffffff50',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'sarabun': ['Sarabun', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'oxanium': ['Oxanium', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(120deg, #fde404fb 0%, rgba(255, 255, 255, 0.927) 50%, rgba(235, 212, 4, 0.941) 100%)',
        'shimmer-gradient': 'linear-gradient(to right, #222 0%, #fff 50%, #222 100%)',
        'overlay-gradient': 'linear-gradient(rgba(0, 2, 26, 0.7), rgba(0, 2, 26, 0.7))',
      },
      boxShadow: {
        'yellow-glow': '0px -2px 12px 1px #ffbf00',
        'yellow-hover': '12px 9px 18px -6px #facc15',
        'navbar': '0 0 5px #1f2348',
        'card': '0px 0 30px rgba(1, 41, 112, 0.1)',
        'dropdown': '0 5px 30px 0 rgba(82, 63, 105, 0.2)',
        'button': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'slide': '0 8px 20px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'button': '10px',
        'card': '20px',
        'icon': '50%',
      },
      spacing: {
        '70': '70px',
        'section': '70px',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'bounce': 'bounce 2s infinite',
        'scroll-marquee': 'scroll-marquee 40s linear infinite',
        'dropdown': 'dropdown-animate 0.2s',
          'float': 'float 3s ease-in-out infinite',
          'slide-in-left': 'slideInFromLeft 0.8s ease-out both',
          'slide-in-right': 'slideInFromRight 0.8s ease-out both',
          'fade-in-up': 'fadeInUp 0.8s ease-out both',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200px 100%' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'scroll-marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'dropdown-animate': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          slideInFromLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInFromRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
      },
      fontSize: {
        'heading-xl': ['44px', { lineHeight: '58px', fontWeight: '700' }],
        'heading-lg': ['34px', { lineHeight: '44px', fontWeight: '500' }],
        'heading-md': ['28px', { lineHeight: '40px', fontWeight: '700' }],
        'heading-sm': ['22px', { lineHeight: '30px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '26px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
      textStroke: {
        'yellow': '2px #ffbf00',
        'white': '1px white',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-yellow': {
          '-webkit-text-stroke': '2px #ffbf00',
          'text-stroke': '2px #ffbf00',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
          'text-stroke': '1px white',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

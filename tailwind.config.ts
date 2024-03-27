import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-rev':
          'infinite-scroll-rev 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-rev': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animationPlayState: {
        paused: 'paused',
        running: 'running',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navy: "#014466",
        link: "#0077b6",
        link_hover: "#02689e",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.animate-paused': { animationPlayState: 'paused' },
        '.animate-running': { animationPlayState: 'running' },
      });
    },
  ],
};
export default config;
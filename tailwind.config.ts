import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        'section-in': 'fadeInUp 1s ease-out',
        'gradient-x': 'gradient-x 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'fade-in': 'fadeIn 1.5s ease-in',
        'glow': 'glow 2s linear infinite',
        'glow-border': 'glow-border 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-x": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { filter: "blur(8px) brightness(1.1)" },
          "50%": { filter: "blur(12px) brightness(1.5)" },
          "100%": { filter: "blur(8px) brightness(1.1)" },
        },
        'glow-border': {
          '0%, 100%': { boxShadow: '0 0 16px 4px #60a5fa, 0 0 32px 8px #2563eb' },
          '50%': { boxShadow: '0 0 32px 8px #60a5fa, 0 0 64px 16px #2563eb' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
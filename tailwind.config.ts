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
        'float1': 'float1 7s ease-in-out infinite',
        'float2': 'float2 9s ease-in-out infinite',
        'float3': 'float3 11s ease-in-out infinite',
        'gradient-y': 'gradient-y 8s ease-in-out infinite',
        'sparkle1': 'sparkle1 2.5s linear infinite',
        'sparkle2': 'sparkle2 3.2s linear infinite',
        'sparkle3': 'sparkle3 4.1s linear infinite',
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
        "gradient-y": {
          "0%": { "background-position": "50% 0%" },
          "50%": { "background-position": "50% 100%" },
          "100%": { "background-position": "50% 0%" },
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
        sparkle1: {
          '0%': { opacity: '0', transform: 'scale(0.7) translateY(0)' },
          '50%': { opacity: '1', transform: 'scale(1.2) translateY(-10px)' },
          '100%': { opacity: '0', transform: 'scale(0.7) translateY(0)' },
        },
        sparkle2: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(0)' },
          '50%': { opacity: '1', transform: 'scale(1.1) translateY(-16px)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateY(0)' },
        },
        sparkle3: {
          '0%': { opacity: '0', transform: 'scale(0.6) translateY(0)' },
          '50%': { opacity: '1', transform: 'scale(1.3) translateY(-8px)' },
          '100%': { opacity: '0', transform: 'scale(0.6) translateY(0)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-40px) scale(1.1)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-60px) scale(1.15)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
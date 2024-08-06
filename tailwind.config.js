/** @type {import('tailwindcss').Config} */
export const content = [
  "./layouts/**/*.{html,js,css}",
  "./static/**/*.{html,js,css}",
  "./assets/**/*.{html,js,css}",
];
export const theme = {
  extend: {
    colors: {
      theme: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        600: '#6d6d6d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#1e1e1e'
      }
    },
    keyframes: {
      "border-wave": {
        "0%": {
          "border-radius": "50%",
        },
        "25%": {
          "border-radius": "58% 42% 69% 31% / 38% 61% 39% 62%",
        },
        "50%": {
          "border-radius": "71% 29% 38% 62% / 56% 61% 39% 44%",
        },
        "75%": {
          "border-radius": "41% 59% 66% 34% / 55% 50% 50% 45%",
        },
        "100%": {
          "border-radius": "50%",
        },
      },
    },
    animation: {
      hover: "pulse 2s linear",
      bw: "border-wave 8s ease-in-out infinite 0s",
    }
  },
};
export const plugins = [require("@tailwindcss/typography")];

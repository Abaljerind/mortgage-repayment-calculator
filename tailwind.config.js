/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        lime: "#d7da2e",
        red: "#d73327",
        "neutral-slate-100": "#e2f3fc",
        "neutral-slate-300": "#9abed4",
        "neutral-slate-500": "#6b93a8",
        "neutral-slate-700": "#4d6e7e",
        "neutral-slate-900": "#122e3f",
      },
      fontFamily: {
        "jakarta-sans": ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};

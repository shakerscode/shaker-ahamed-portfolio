/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#3b82f6",

          "secondary": "#a5f3fc",

          "accent": "#06b6d4",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#f43f5e",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}

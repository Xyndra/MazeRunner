/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mainTheme: {
          "primary": "yellow",
          "secondary": "#0b4",
          "accent": "#f48",
          "neutral": "#1e1f22",
          "base-100": "#2b2b30",
          "info": "#00c2ff",
          "success": "#00ce83",
          "warning": "#ffa754",
          "error": "#e1625e",
        }
      }
    ]
  },
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],darkMode: "class",
  theme: {
    colors: {
      main: "#FF5800",
      secondary: "#24292B",
      tertiary: "rgba(36, 41, 43, 0.5)",
      main_white: "#ffffff",
      gray_t: '#9B9D9E',
      main_bg: "#E9E9E9",
      main_red: 'red'
    },
  },
  plugins: [import("tw-elements-react/dist/plugin.cjs")]
}

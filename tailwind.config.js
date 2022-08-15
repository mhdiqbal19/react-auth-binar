/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-01": "#fff",
        "neutral-02": "#d0d0d0",
        "neutral-03": "#8a8a8a",
        "neutral-04": "#3c3c3c",
        "neutral-05": "#000",
        "dark-blue-00": "#f1f3ff",
        "dark-blue-01": "#cfd4ed",
        "dark-blue-02": "#aeb7e1",
        "dark-blue-03": "#5e70c4",
        "dark-blue-04": "#0d28a6",
        "dark-blue-05": "#091b6f",
        "lime-green-01": "#def1df",
        "lime-green-02": "#c9e7ca",
        "lime-green-03": "#92d094",
        "lime-green-04": "#5cb85f",
        "lime-green-05": "#3d7b3f",
        success: "#73ca5c",
        warning: "#f9cc00",
        danger: "#fa2c5a",
      },
    },
  },
  plugins: [],
}
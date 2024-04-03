/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        md: "700px",
        lg: "800px",
      }
    },
  },
  plugins: [],
}


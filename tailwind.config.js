/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add more here
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkMode: "#131620",
      },
      colors: {
        light: "#C4D1EC",
      },
      maxWidth: {
        screenWidth: "1366px",
      },
      maxHeight: {
        screenHeight: "768px",
      },
    },
  },
  plugins: [],
};

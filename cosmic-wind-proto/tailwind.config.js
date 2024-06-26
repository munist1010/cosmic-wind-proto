/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      backgroundGrey: '#202124',
      midgroundGrey: '#3c4042',
      foregroundGrey: '#606368',
      backgroundBlue: '#0a192e',
      foregroundBlue: '#172b46',
      highlightGreen: '#4fc3b7',
      highlighPink: '#bb86fc',
      highlightPurple: '#3700b4'
    }
  },
  plugins: [],
};

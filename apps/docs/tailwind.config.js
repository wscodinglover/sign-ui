/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
    './node_modules/sign-ui/dist/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

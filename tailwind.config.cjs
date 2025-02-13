/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0066CC', // Adjust this to match CloudWaze's blue
        }
      }
    },
  },
  plugins: [],
} 
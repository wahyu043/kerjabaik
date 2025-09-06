/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px" } },
      fontFamily: { display: ['"Montserrat Alternates"', "ui-sans-serif", "system-ui"] }
    },
  },
  plugins: [],
}


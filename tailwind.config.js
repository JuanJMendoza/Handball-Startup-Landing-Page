/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./LandingPage/index.html'],
    theme: {
        backgroundImage: {
            hero: "url(resources/HandballCourtImage.jpeg)",
        },
        extend: {},
        fontFamily: {
            'display': ['Roboto', 'sans-serif']
        }
    },
    plugins: [],
}


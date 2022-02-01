// craco.config.js
module.exports = {
  style: {
    postoptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

// postcss.config.js

// sambungkan plugin ke file
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  // sambungkan plugin ke PostCSS
  plugins: [
    // sambungkan autoprefixer
    autoprefixer,
    // teruskan objek dengan opsi saat menghubungkan cssnano:
    cssnano({ preset: "default" }) // atur pengaturan minifikasi default
  ]
};
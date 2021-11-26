

const applyCss = require("./framework/lib/expandApplyAtRules");

module.exports = {
  plugins: [
    applyCss()
    // require("tailwindcss"),
    // require("autoprefixer"),
  ],
};

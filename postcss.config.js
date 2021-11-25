

const expandApplyAtRules = require("./framework/lib/expandApplyAtRules");

module.exports = {
  plugins: [
    (root)=> expandApplyAtRules(root)
    // require("tailwindcss"),
    // require("autoprefixer"),
  ],
};

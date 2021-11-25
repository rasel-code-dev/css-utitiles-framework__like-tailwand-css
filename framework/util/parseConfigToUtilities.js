const postcss = require("postcss");

const config =  require("../../tailwind.config");
const parseColorsUtilities = require("./parseColorsUtilities")

const createOpacity = require("./parseOpacity");
const createBorderColorOpacity = require("./createBorderColorOpacity");

module.exports = function (root){

  // let cssString = parseColorsUtilities(config.theme.colors)
  // cssString += createOpacity(config.theme.opacity)
  // let cssString = createBorderColorOpacity(config.theme.colors)
  // root.append( postcss.parse(cssString))
}


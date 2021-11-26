
// module.exports =  function () {
//   return {
//     themeKey: "colors", // value take from...
//     cssPropName: 'background-color',
//     classes: null, // these class property/value inside config file..
//     prefixCls: "bg",
//     prefixOpacityCls: "--rsl-bg-opacity",
//     variable: "--rsl-bg-opacity",
//     opacityCssPropName: "opacity",
//     mediaQueries: "screens",
//     hover: true
//   }
// }

const flattenColorPalette = require("../lib/flattenColorPalette")
const getThemeObj = require("../lib/getThemeObj")

const config = require("../../variable.config");
const hexToRGB = require("../util/hexToRGB");
const matchUtilities = require("../lib/matchUtilities");
const withAlphaVariable = require("../lib/withAlphaVariable");

module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        'placeholder-opacity': (value) => {
          return {
            '&::placeholder': { '--rsl-placeholder-opacity': value }
          }
        },
      },
      {
        values: flattenColorPalette(theme('placeholderOpacity')),
        type: 'color',
      }
    )
  }
}

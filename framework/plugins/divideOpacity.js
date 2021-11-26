//
// module.exports =  function () {
//   return {
//     themeKey: "divideOpacity",
//     cssPropName: '--rsl-divide-opacity',
//     classes: null, // these class property/value inside config file..
//     prefixCls: "divide-opacity",
//     hover: true
//   }
// }


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
        'divide-opacity': (value) => {
          return {
            '& > :not([hidden]) ~ :not([hidden])': {
              '--rsl-divide-opacity': value
            }
          }
        },
      },
      {
        values: flattenColorPalette('divideOpacity'),
        type: 'any',
      }
    )
  }
}



// .divide-opacity-50 > :not([hidden]) ~ :not([hidden]) {
//   --tw-divide-opacity: 0.5;
// }

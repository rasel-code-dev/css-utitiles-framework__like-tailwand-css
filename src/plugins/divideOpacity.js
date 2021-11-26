

const flattenColorPalette = require("../util/flattenColorPalette")
const matchUtilities = require("../util/matchUtilities");

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

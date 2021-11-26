
const flattenColorPalette = require("../lib/flattenColorPalette")
const matchUtilities = require("../lib/matchUtilities");
const withAlphaVariable = require("../lib/withAlphaVariable");


module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        text: (value, withOpacity) => {
          if (withOpacity) {
            return withAlphaVariable({
              color: value,
              property: 'color',
              variable: '--rsl-text-opacity',
            })
          } else {
            return {'color': value,}
          }
        }
      },
      {
        values: flattenColorPalette(theme('textColor')),
        type: 'color',
        hover: true
      },
      forMedia
    )
  }
}
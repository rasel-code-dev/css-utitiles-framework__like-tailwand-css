
const flattenColorPalette = require("../util/flattenColorPalette")
const matchUtilities = require("../util/matchUtilities");
const withAlphaVariable = require("../util/withAlphaVariable");


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
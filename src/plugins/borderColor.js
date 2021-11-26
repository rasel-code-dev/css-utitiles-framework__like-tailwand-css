
const flattenColorPalette = require("../util/flattenColorPalette")

const matchUtilities = require("../util/matchUtilities");
const withAlphaVariable = require("../util/withAlphaVariable");


module.exports =  function (forMedia) {
  return function (theme){
    return matchUtilities(
      {
        border: (value, withOpacity) => {
          if(withOpacity) {
            return withAlphaVariable({
              color: value,
              property: 'border-color',
              variable: '--rsl-border-opacity',
            })
          } else {
            return {'border-color': value}
          }
        }
      },
      {
        values: flattenColorPalette(theme('borderColor')),
        //   variants: variants('backgroundColor'),
        type: 'color',
        hover: true
      },
      forMedia
    )
  }
}

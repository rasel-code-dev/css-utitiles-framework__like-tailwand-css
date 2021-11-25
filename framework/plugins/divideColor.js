const flattenColorPalette = require("../lib/flattenColorPalette")
const matchUtilities = require("../lib/matchUtilities");
const withAlphaVariable = require("../lib/withAlphaVariable");

module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        divide: (value, withOpacity) => {
          // if (withOpacity) {
            return {
              '& > :not([hidden]) ~ :not([hidden])':  withAlphaVariable({
                color: value,
                property: 'border-color',
                variable: '--rsl-divide-opacity',
              })
            }
          
          // return withAlphaVariable({
          //     color: value,
          //     property: 'border-color',
          //     variable: '--rsl-divide-opacity',
          //   })
          // } else {
            // return {'background-color': value}
          // }
        }
      },
      {
        values: flattenColorPalette('divideColor'),
        //   variants: variants('backgroundColor'),
        type: 'color',
        breakpoint: true
      },
      forMedia
    )
  }
}
  
  
//
//   module.exports =  function () {
//   return {
//     themeKey: "divideColor", // value take from...
//     classes: null, // these class property/value inside config file..
//     prefixCls: "divide-"
//   }
// }
//
//
//
// let css_like = `
// .divide-pink-500 > :not([hidden]) ~ :not([hidden]) {
//   --tw-divide-opacity: 1;
//   border-color: rgba(236, 72, 153, var(--tw-divide-opacity));
// }
//   `
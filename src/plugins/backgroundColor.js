
// import flattenColorPalette from '../util/flattenColorPalette'
// import withAlphaVariable from '../util/withAlphaVariable'
//
// export default function () {
//   return function ({ matchUtilities, theme, variants, corePlugins }) {
//     matchUtilities(
//       {
//         bg: (value) => {
//           if (!corePlugins('backgroundOpacity')) {
//             return {
//               'background-color': value,
//             }
//           }
//
//           return withAlphaVariable({
//             color: value,
//             property: 'background-color',
//             variable: '--tw-bg-opacity',
//           })
//         },
//       },
//       {
//         values: flattenColorPalette(theme('backgroundColor')),
//         variants: variants('backgroundColor'),
//         type: 'color',
//       }
//     )
//   }
// }



const flattenColorPalette = require("../util/flattenColorPalette")
const matchUtilities = require("../util/matchUtilities");
const withAlphaVariable = require("../util/withAlphaVariable");



module.exports =  function (forMedia) {
  return function (theme){
    return matchUtilities(
      {
          bg: (value, withOpacity) => {
            if(withOpacity) {
              return withAlphaVariable({
                color: value,
                property: 'background-color',
                variable: '--rsl-bg-opacity',
              })
            } else {
              return {'background-color': value}
            }
          }
        },
      {
        values: flattenColorPalette(theme('backgroundColor')),
        //   variants: variants('backgroundColor'),
        type: 'color',
        hover: true
      },
      forMedia
    )
  }
  
  
  
  // let obj = {
  //   themeKey: "colors", // value take from...
  //   cssPropName: 'background-color',
  //   classes: null, // these class property/value inside config file..
  //   prefixCls: "bg",
  //   prefixOpacityCls: "--rsl-bg-opacity",
  //   variable: "--rsl-bg-opacity",
  //   opacityCssPropName: "opacity",
  //   mediaQueries: "screens",
  //   hover: true
  // }
  // return {
  //   ...obj,
  //   fn: (color)=>{
  //
  //     withAlphaVariable({color})
  //   },
  // }
}

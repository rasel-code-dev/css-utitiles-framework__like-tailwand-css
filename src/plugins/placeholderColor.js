
const matchUtilities = require("../util/matchUtilities");
const withAlphaVariable = require("../util/withAlphaVariable");
const flattenColorPalette = require("../util/flattenColorPalette");



// module.exports =  function () {
//   return {
//     themeKey: "colors", // value take from...
//     cssPropName: '',
//     classes: null, // these class property/value inside config file..
//     prefixCls: "bg",
//     fn: (color)=>{
//       console.log(this)
//       withAlphaVariable({color})
//     },
//     prefixOpacityCls: "--rsl-bg-opacity",
//     variable: "--rsl-bg-opacity",
//     opacityCssPropName: "opacity",
//     mediaQueries: "screens",
//     hover: true
//   }
// }
//
//

module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        placeholder: (value, withOpacity) => {
          // if (withOpacity) {
          //   return withAlphaVariable({
          //     color: value,
          //     property: 'background-color',
          //     variable: '--rsl-bg-opacity',
          //   })
          // } else {
          //   return {'background-color': value}
          // }
          
          return {
            '&::placeholder': withAlphaVariable({
              color: value,
              property: 'color',
              variable: '--rsl-placeholder-opacity',
            }),
           
          }
        }
      },
      {
        values: flattenColorPalette(theme('placeholderColor')),
        type: 'color'
      },
      forMedia
    )
  }
  
}
  
  
//   export default function () {
//   return function ({ matchUtilities, theme, variants, corePlugins }) {
//     matchUtilities(
//       {
//         placeholder: (value) => {
//           if (!corePlugins('placeholderOpacity')) {
//             return {
//               '&::placeholder': {
//                 color: value,
//               },
//             }
//           }
//
//           return {
//             '&::placeholder': withAlphaVariable({
//               color: value,
//               property: 'color',
//               variable: '--tw-placeholder-opacity',
//             }),
//           }
//         },
//       },
//       {
//         values: flattenColorPalette(theme('placeholderColor')),
//         variants: variants('placeholderColor'),
//         type: ['color', 'any'],
//       }
//     )
//   }
// }






//  .placeholder-white::placeholder {
//   --tw-placeholder-opacity: 1;
//   color: rgba(255, 255, 255, var(--tw-placeholder-opacity));
// }
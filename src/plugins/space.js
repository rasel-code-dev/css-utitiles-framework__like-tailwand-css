


// module.exports =  function () {
//   return {
//     themeKey: "space",
//     classes: null,
//     mediaQueries: "screens",
//   }
// }
//


const flattenColorPalette = require("../util/flattenColorPalette")
const matchUtilities = require("../util/matchUtilities");

module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        'space-x': (value) => {
          value = value === '0' ? '0px' : value

          return {
            '& > :not([hidden]) ~ :not([hidden])': {
              '--rsl-space-x-reverse': '0',
              'margin-right': `calc(${value} * var(--rsl-space-x-reverse))`,
              'margin-left': `calc(${value} * calc(1 - var(--rsl-space-x-reverse)))`,
            },
          }
        },
        'space-y': (value) => {
          value = value === '0' ? '0px' : value

          return {
            '& > :not([hidden]) ~ :not([hidden])': {
              '--rsl-space-y-reverse': '0',
              'margin-top': `calc(${value} * calc(1 - var(--rsl-space-y-reverse)))`,
              'margin-bottom': `calc(${value} * var(--rsl-space-y-reverse))`,
            },
          }
        },
      },
      {
        values: flattenColorPalette(theme('space')),
        type: 'any',
      }
    )
  }
}


/** better implement ---------- */
// function parseSuffixUnit(u){
//   let r = ""
//   let info = getInfo(u)
//   if(info.isDot){
//     let arr = u.split(".")
//     if(arr.length > 1){
//       let splitter = getScapeSign(".")
//       r = `-${arr[0]}${splitter}${arr[1]}`
//     }
//   } else {
//     let empty = u === "px" || u === "DEFAULT"
//     if(empty){
//       r = ``
//     } else {
//       r = `-${u}`
//     }
//   }
//   return r
// }
// module.exports =  function (forMedia) {
//   return function (theme) {
//     return matchUtilities(
//       {
//         return (suffixUnit){
//           let suffixCls = parseSuffixUnit(suffixUnit)
//           return {
//             [`.space-x${suffixCls}`]: (value) => {
//               value = value === '0' ? '0px' : value
//
//               return {
//                 '& > :not([hidden]) ~ :not([hidden])': {
//                   '--rsl-space-x-reverse': '0',
//                   'margin-right': `calc(${value} * var(--rsl-space-x-reverse))`,
//                   'margin-left': `calc(${value} * calc(1 - var(--rsl-space-x-reverse)))`,
//                 },
//               }
//             },
//             [`.space-y${suffixCls}`]: (value) => {
//               value = value === '0' ? '0px' : value
//
//               return {
//                 '& > :not([hidden]) ~ :not([hidden])': {
//                   '--rsl-space-y-reverse': '0',
//                   'margin-top': `calc(${value} * var(--rsl-space-y-reverse))`,
//                   'margin-bottom': `calc(${value} * calc(1 - var(--rsl-space-y-reverse)))`,
//                 },
//               }
//             },
//           }
//         }
//       },
//       {
//         values: flattenColorPalette(theme('space')),
//         type: 'any',
//       }
//     )
//   }
// }
//






// .space-x-4 > :not([hidden]) ~ :not([hidden]) {
//   --tw-space-x-reverse: 0;
//   margin-right: calc(1rem * var(--tw-space-x-reverse));
//   margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
// }

// .space-x-2 > :not([hidden]) ~ :not([hidden]) {
//   --tw-space-x-reverse: 0;
//   margin-right: calc(0.5rem * var(--tw-space-x-reverse));
//   margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
// }
//
// .space-x-3 > :not([hidden]) ~ :not([hidden]) {
//   --tw-space-x-reverse: 0;
//   margin-right: calc(0.75rem * var(--tw-space-x-reverse));
//   margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
// }

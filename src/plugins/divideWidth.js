const matchUtilities = require("../util/matchUtilities");

module.exports =  function (forMedia) {
  return function (theme) {
    return matchUtilities(
      {
        'divide-x': (value) => {
          value = value === '0' ? '0px' : value
    
          return {
            '& > :not([hidden]) ~ :not([hidden])': {
              '--rsl-divide-x-reverse': '0',
              'border-right-width': `calc(${value} * var(--rsl-divide-x-reverse))`,
              'border-left-width': `calc(${value} * calc(1 - var(--rsl-divide-x-reverse)))`,
            },
          }
        },
        'divide-y': (value) => {
          value = value === '0' ? '0px' : value
    
          return {
            '& > :not([hidden]) ~ :not([hidden])': {
              '--rsl-divide-y-reverse': '0',
              'border-top-width': `calc(${value} * calc(1 - var(--rsl-divide-y-reverse)))`,
              'border-bottom-width': `calc(${value} * var(--rsl-divide-y-reverse))`,
              // 'border-top-width': `calc(${value} * var(--rsl-divide-y-reverse))`,
              // 'border-bottom-width': `calc(${value} * calc(1 - var(--rsl-divide-y-reverse)))`,
            },
          }
        },
      },
      {
        values: theme('divideWidth'),
        type: 'any'
      },
      forMedia
    )
  }
}



// module.exports =  function () {
//   return {
//     themeKey: "divideWidth", // value take from config.js ...
//     classes: null,
//     axis: {
//       'divide-x': ['border-left-width', 'border-right-width'],
//       'divide-y': ['border-top-width', 'border-bottom-width']
//     }
//   }
// }


// `
// .divide-y-2 > :not([hidden]) ~ :not([hidden]) {
//     -rsl-divide-y-reverse: 0;
//     border-top-width: calc(2px * calc(1 - var(-rsl-divide-y-reverse)));
//     border-bottom-width: calc(2px * var(-rsl-divide-y-reverse));
// }
//
// `

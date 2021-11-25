
const createUtilityPlugin = require('../lib/createUtilityPlugin')

module.exports = function (forMedia) {
  return function () {
    return createUtilityPlugin(
      'translate',
      {
        'translate-x': ['--tw-translate-x'],
        'translate-y': ['--tw-translate-y'],
      },
      { forMedia  }
    )
  }
}



// module.exports =  function () {
//   return {
//     themeKey: "translate",
//     cssPropNamePrefix: '--rsl-translate',
//     axis: {
//       x: 'translate-x',
//       y: 'translate-y'
//     },
//     prefixCls: "translate",
//     mediaQueries: "screens"
//   }
// }
//


// .translate-y-4 {
//   --tw-translate-y: 1rem;
// }



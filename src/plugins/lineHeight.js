// module.exports =  function () {
//   return {
//     classes: null, // these class property given in config file..
//     themeKey: "lineHeight",
//     cssPropName: "line-height",
//     prefixCls: "leading"
//   }
// }


const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "lineHeight",
      {
        'leading': 'line-height',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


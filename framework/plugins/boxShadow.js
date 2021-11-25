

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "boxShadow",
      {
        'shadow': 'box-shadow',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

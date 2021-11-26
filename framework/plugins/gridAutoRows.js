

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridAutoRows",
      {
        'auto-rows': 'grid-auto-rows',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}



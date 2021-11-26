
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridTemplateRows",
      {
        'grid-temp-rows': 'grid-template-rows',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}



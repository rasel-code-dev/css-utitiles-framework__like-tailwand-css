

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridRow",
      {
        'row': 'grid-row',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}



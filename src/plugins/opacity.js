
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "opacity",
      {
        'opacity': 'opacity',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


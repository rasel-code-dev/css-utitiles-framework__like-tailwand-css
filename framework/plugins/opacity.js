
const createUtilityPlugin = require("../lib/createUtilityPlugin");

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


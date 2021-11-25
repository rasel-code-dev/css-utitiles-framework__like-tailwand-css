
const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "textOpacity",
      {
        'text-opacity': '--rsl-text-opacity',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


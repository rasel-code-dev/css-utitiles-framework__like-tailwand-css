
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "textOpacity",
      {
        'text-opacity': '--rsl-text-opacity',
      },
      {
        forMedia,
        hover: true
      }
    )
  }
}


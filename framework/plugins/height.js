
const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "height",
      {
        'h': 'height',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

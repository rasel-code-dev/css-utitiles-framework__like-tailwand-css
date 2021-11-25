
const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "width",
      {
        'w': 'width',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

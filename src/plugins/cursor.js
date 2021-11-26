const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "cursor",
      {
        'cursor': 'cursor',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

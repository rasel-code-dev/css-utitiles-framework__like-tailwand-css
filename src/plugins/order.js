const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "order",
      {
        'order': 'order',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


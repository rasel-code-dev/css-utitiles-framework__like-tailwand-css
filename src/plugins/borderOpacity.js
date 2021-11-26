



const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "borderOpacity",
      {
        'border-opacity': '--rsl-border-opacity'
      },
      {
        forMedia,
        hover: true
      }
    )
  }
}


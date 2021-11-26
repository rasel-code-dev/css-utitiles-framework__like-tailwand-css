

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "fontWeight",
      {
        'font': 'font-weight',
      },
      {
        forMedia,
        hover: true
      }
    )
  }
}


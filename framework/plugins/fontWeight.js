

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "fontWeight",
      {
        'font': 'font-weight',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


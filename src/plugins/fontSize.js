

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "fontSize",
      {
        'font': 'font-size',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


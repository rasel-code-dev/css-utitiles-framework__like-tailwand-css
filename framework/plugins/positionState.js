
const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "translate",
      {
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

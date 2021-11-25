

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridRowStart",
      {
        'row-start': 'grid-row-start',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

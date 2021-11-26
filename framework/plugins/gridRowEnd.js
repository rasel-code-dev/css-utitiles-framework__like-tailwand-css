

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridRowEnd",
      {
        'row-end': 'grid-row-end',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

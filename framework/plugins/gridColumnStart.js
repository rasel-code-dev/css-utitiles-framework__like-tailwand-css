

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridColumnStart",
      {
        'col-start': 'grid-column-start',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

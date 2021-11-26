

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridColumnEnd",
      {
        'col-end': 'grid-column-end',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

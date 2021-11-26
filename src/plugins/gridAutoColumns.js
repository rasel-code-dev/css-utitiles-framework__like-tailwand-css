
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridAutoColumns",
      {
        'auto-cols': 'grid-auto-columns',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}


// row-span-2 --> grid-row: 2 span / 2 span

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridColumn",
      {
        'col': 'grid-column',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

//   col-span-2 --> grid-column: 2 span / 2 span

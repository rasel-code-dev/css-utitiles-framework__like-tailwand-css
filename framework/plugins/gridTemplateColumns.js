

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "gridTemplateColumns",
      {
        'grid-temp-cols': 'grid-template-columns',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}



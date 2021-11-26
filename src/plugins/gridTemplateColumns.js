

const createUtilityPlugin = require("../util/createUtilityPlugin");

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



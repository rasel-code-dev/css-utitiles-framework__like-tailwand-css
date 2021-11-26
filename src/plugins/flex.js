
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "flex",
      {
        'flex': 'flex',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}



const createUtilityPlugin = require("../lib/createUtilityPlugin");

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


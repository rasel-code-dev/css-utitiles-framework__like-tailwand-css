

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "maxWidth",
    {
      "max-w": "max-width"
    },
    {
      forMedia
    }
  )
}

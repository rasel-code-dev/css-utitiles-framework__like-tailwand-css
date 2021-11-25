

const createUtilityPlugin = require("../lib/createUtilityPlugin");

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

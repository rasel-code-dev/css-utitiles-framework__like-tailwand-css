

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "maxHeight",
    {
      "max-h": "max-height"
    },
    {
      forMedia
    }
  )
}

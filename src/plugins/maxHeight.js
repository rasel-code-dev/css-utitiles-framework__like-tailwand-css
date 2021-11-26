

const createUtilityPlugin = require("../util/createUtilityPlugin");

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

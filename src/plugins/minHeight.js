

const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "minHeight",
    {
      "min-h": "min-height"
    },
    {
      forMedia
    }
  )
}



const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "minWidth",
    {
      "min-w": "min-width"
    },
    {
      forMedia
    }
  )
}


const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "borderRadius",
    {
      "radius": "border-radius"
    },
    forMedia
  )
}

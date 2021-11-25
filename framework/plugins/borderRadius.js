
const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  
  return createUtilityPlugin(
    "borderRadius",
    {
      "radius": "border-radius"
    },
    forMedia
  )
}

const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {

  return createUtilityPlugin(
    "borderWidth",
    {
      "border": "border-width",
      "border-t": "border-top-width",
      "border-b": "border-bottom-width",
      "border-l": "border-left-width",
      "border-r": "border-right-width"
    },
    forMedia
  )
}





const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.outline-none': 'none'
    },
    "outline",
    forMedia
  )
}

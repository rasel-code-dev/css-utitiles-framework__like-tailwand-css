



const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.outline-none': 'none'
    },
    "outline",
    forMedia
  )
}

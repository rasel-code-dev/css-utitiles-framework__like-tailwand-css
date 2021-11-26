
const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.pointer-events-none': 'none',
      '.pointer-events-auto':  'auto',
    },
    "pointer-events",
    forMedia
  )
}




const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.flex-wrap': 'wrap',
      '.flex-wrap-reverse': 'wrap-reverse',
      '.flex-nowrap': 'nowrap',
    },
    "flex-wrap",
    forMedia
  )
}



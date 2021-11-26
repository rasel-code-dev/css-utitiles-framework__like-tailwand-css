
const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.flex-row': 'row',
      '.flex-row-reverse': 'row-reverse',
      '.flex-col': 'column',
      '.flex-col-reverse': 'column-reverse',
    },
    "flex-direction",
    forMedia
  )
}



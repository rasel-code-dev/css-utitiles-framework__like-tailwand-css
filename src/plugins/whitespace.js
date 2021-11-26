
const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.whitespace-normal': 'normal',
      '.whitespace-nowrap': 'nowrap',
      '.whitespace-pre': 'pre',
      '.whitespace-pre-line': 'pre-line',
      '.whitespace-pre-wrap': 'pre-wrap',
    },
    "white-space",
    forMedia
  )
}





const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.box-border': 'border-box',
      '.box-content': 'content-box'
    },
    "box-sizing",
    forMedia
  )
}



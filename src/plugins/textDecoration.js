
const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.underline': 'underline' ,
      '.line-through': 'line-through' ,
      '.no-underline': 'none'
    },
    "text-decoration",
    forMedia,
    true
  )
}


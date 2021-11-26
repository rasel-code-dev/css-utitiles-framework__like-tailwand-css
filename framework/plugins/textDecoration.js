
const addUtilities = require("../lib/addUtilities");

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


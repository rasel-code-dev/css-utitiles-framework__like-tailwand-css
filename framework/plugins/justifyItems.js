
const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.justify-items-start': 'start',
      '.justify-items-end': 'end',
      '.justify-items-center': 'center',
      '.justify-items-stretch': 'stretch'
    },
    "justify-items",
    forMedia
  )
}



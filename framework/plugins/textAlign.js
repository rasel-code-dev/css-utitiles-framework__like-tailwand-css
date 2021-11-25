
const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.text-left': 'left' ,
      '.text-center': 'center' ,
      '.text-right': 'right' ,
      '.text-justify': 'justify',
    },
    "text-align",
    forMedia
  )
}


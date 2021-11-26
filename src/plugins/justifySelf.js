
const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.justify-self-auto': 'auto',
      '.justify-self-start': 'start',
      '.justify-self-end': 'end',
      '.justify-self-center': 'center',
      '.justify-self-stretch': 'stretch'
    },
    "justify-self",
    forMedia
  )
}




const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.justify-start': 'flex-start',
      '.justify-end': 'flex-end',
      '.justify-center': 'center',
      '.justify-between': 'space-between',
      '.justify-around': 'space-around',
      '.justify-evenly': 'space-evenly'
    },
    "justify-content",
    forMedia
  )
}



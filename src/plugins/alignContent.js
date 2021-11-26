const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.align-content-start': 'flex-start',
      '.align-content-end': 'flex-end',
      '.align-content-center': 'center',
      '.align-content-baseline': 'baseline',
      '.align-content-stretch': 'stretch',
      '.align-content-around': 'space-around',
      '.align-content-between': 'space-between',
      '.align-content-evenly': 'space-evenly'
    },
    "align-content",
    forMedia
  )
}



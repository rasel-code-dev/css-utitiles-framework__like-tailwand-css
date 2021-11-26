const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.align-self-auto': 'auto',
      '.align-self-start': 'flex-start',
      '.align-self-end': 'flex-end',
      '.align-self-center': 'center',
      '.align-self-stretch': 'stretch',
      '.align-self-baseline': 'baseline'
    },
    "align-self",
    forMedia
  )
}



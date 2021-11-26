
const addUtilities = require("../lib/addUtilities");
module.exports = function (forMedia){
  return addUtilities(
    {
     '.align-start': 'flex-start',
     '.align-end': 'flex-end',
     '.align-center': 'center',
     '.align-baseline': 'baseline',
     '.align-stretch': 'stretch'
   },
    "align-items",
    forMedia
  )
}



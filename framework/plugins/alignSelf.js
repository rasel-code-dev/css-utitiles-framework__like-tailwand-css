// module.exports = function (){
//   return {
//     classes: {
//       '.align-self-auto': 'auto',
//       '.align-self-start': 'flex-start',
//       '.align-self-end': 'flex-end',
//       '.align-self-center': 'center',
//       '.align-self-stretch': 'stretch',
//       '.align-self-baseline': 'baseline'
//     },
//     cssPropName: "align-self",
//     mediaQueries: "screens"
//   }
// }


const addUtilities = require("../lib/addUtilities");

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



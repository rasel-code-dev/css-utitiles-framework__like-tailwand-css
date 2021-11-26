
const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.static': 'static',
      '.fixed': 'fixed',
      '.absolute': 'absolute',
      '.relative': 'relative',
      '.sticky': 'sticky'
    },
    "position",
    forMedia
  )
}


// module.exports =  function (matchUtilities) {
//     return function (){
//       matchUtilities({
//        '.static': {position: 'static'},
//        '.fixed': {position: 'fixed'},
//        '.absolute': {position: 'absolute'},
//        '.relative': {position: 'relative'},
//        '.sticky': {position: 'sticky'},
//      })
//       matchUtilities({
//         top: (value) => {return { top: value }},
//         right: (value) => {return { right: value }},
//         bottom: (value) => { return { bottom: value }},
//         left: (value) => {return { left: value }}
//       })
//     }
//   }
//
//
//
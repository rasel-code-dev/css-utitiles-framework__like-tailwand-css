const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.grid-flow-row': 'row',
      '.grid-flow-col': 'column',
      '.grid-flow-row-dense': 'row dense',
      '.grid-flow-col-dense': 'column dense'
    },
    "grid-auto-flow",
    forMedia
  )
}




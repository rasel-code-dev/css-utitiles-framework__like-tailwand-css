const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.select-none': 'none',
      '.select-text': 'text',
      '.select-all': 'all',
      '.select-auto': 'auto'
    },
    "user-select",
    forMedia
  )
}



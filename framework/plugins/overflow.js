
const addUtilities = require("../lib/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.overflow-auto':  'auto' ,
      '.overflow-hidden': 'hidden',
      '.overflow-visible': 'visible',
      // '.overflow-scroll':  'scroll' },
      // '.overflow-x-auto': { 'overflow-x': 'auto' },
      // '.overflow-y-auto': { 'overflow-y': 'auto' },
      // '.overflow-x-hidden': { 'overflow-x': 'hidden' },
      // '.overflow-y-hidden': { 'overflow-y': 'hidden' },
      // '.overflow-x-visible': { 'overflow-x': 'visible' },
      // '.overflow-y-visible': { 'overflow-y': 'visible' },
      // '.overflow-x-scroll': { 'overflow-x': 'scroll' },
      // '.overflow-y-scroll': { 'overflow-y': 'scroll' }
    },
    "overflow",
    forMedia
  )
}

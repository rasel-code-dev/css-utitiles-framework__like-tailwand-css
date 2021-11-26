
const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.block': 'block',
      '.flex': 'flex',
      // '.inline-block': 'inline-block',
      // '.inline': 'inline',
      // '.inline-flex': 'inline-flex',
      // '.table': 'table',
      // '.inline-table': 'inline-table',
      // '.table-caption': 'table-caption',
      // '.table-cell': 'table-cell',
      // '.table-column': 'table-column',
      // '.table-column-group': 'table-column-group',
      // '.table-footer-group': 'table-footer-group',
      // '.table-header-group': 'table-header-group',
      // '.table-row-group': 'table-row-group',
      // '.table-row': 'table-row',
      // '.flow-root': 'flow-root',
      '.grid': 'grid',
      // '.inline-grid': 'inline-grid',
      '.hidden': 'none',
    },
    "display",
    forMedia
  )
}



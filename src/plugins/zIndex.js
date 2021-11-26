
const createUtilityPlugin = require("../util/createUtilityPlugin");

module.exports =  function (forMedia) {
  return function () {
    return createUtilityPlugin(
      "zIndex",
      {
        'z': 'z-index',
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
}

// output:
// .z-40 {
//   z-index: 40;
// }

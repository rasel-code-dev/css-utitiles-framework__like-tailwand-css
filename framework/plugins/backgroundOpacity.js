
const createUtilityPlugin = require("../lib/createUtilityPlugin");


module.exports =  function (forMedia) {
  return function (){
    return createUtilityPlugin(
      "backgroundOpacity",
      {
        'bg-opacity': '--rsl-bg-opacity'
      },
      {
        forMedia,
        isHover: true
      }
    )
  }
  
  
  
  
  // return {
  //   themeKey: "backgroundOpacity",
  //   cssPropName: '--rsl-bg-opacity',
  //   classes: null, // these class property/value inside config file..
  //   prefixCls: "bg-opacity",
  //   hover: true
  // }
}

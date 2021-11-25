const config = require("../../tailwind.config");
const postcss = require("postcss");


module.exports = function ({allUnit, prefixCls, cssPropName, hover, mediaQueries, forMedia}){
  
  let result = ''
  
  /// nested function like dividerOpacity return borderOpacity fn borderOpacity return another Fn

    let hoverCss = ''
    
    if(typeof allUnit === "object"){
      // string or int  class name like opacity 0, 1, 2, 4, 5
      for (const allUnitKey in allUnit) {
        let eachRule = `.${prefixCls}-${allUnitKey}> :not([hidden]) ~ :not([hidden]){ ${cssPropName}: ${allUnit[allUnitKey]} }`
        if(hover){
          hoverCss+=`.hover\\:${prefixCls}-${allUnitKey}> :not([hidden]) ~ :not([hidden]):hover{ ${cssPropName}: ${allUnit[allUnitKey]} }`
        }
        result += eachRule
        if(mediaQueries){
          forMedia(eachRule, mediaQueries)
        }
      }
    }
    
  return { result, hoverCss }
  
  //   `
  // .divide-opacity-50 > :not([hidden]) ~ :not([hidden]) {
  //     --tw-divide-opacity: 0.5;
  // }
  // `
}



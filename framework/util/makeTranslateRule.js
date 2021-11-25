
const config = require("../../tailwind.config")

function makeTranslateRule(item, root, forMedia) {
  let result = ''
  
  const { themeKey, prefixCls, cssPropName,  mediaQueries, hover, axis } = item
  
  if(typeof config.theme[themeKey] === "function"){
    let allUnit = config.theme[themeKey]((param)=> config.theme[param] )
    for (const allUnitKey in allUnit) {
      let arrKey = allUnitKey.split("/")
      if(arrKey.length > 1){      ///  key like 1/3  -2/3
        if(arrKey[0][0] === "-"){
          //  negative number like -1/2 -3/4
          result += doubleRuleName({axis, arrKey, allUnit, allUnitKey, forMedia, mediaQueries}, true)
          /*
            .-translate-y-1\/2 {
              --rsl-translate-y: -50%;
            }
          */
          
        } else {
        
        //  positive number like 1/2 3/4
          let f = doubleRuleName({axis, arrKey, allUnit, allUnitKey, forMedia, mediaQueries}, false)
         result+= f
        }
        
      } else {
       
        let dotSplit = allUnitKey.split(".")
        if(dotSplit.length > 1) {
          if(dotSplit[0][0] === "-") {
            result += doubleRuleDotSplit({axis, dotSplit, allUnit, allUnitKey, forMedia, mediaQueries}, true)
          } else {
            result += doubleRuleDotSplit({axis, dotSplit, allUnit, allUnitKey, forMedia, mediaQueries}, false)
          }
          
        } else {
          if (allUnitKey[0] === "-") { /// handler negative unit  -px -full -2 -3 like this
    
            /*
            .-translate-x-px {
              --rsl-translate-x: -1px;
            }
            */
    
            for (let axisKey in axis) {
              let v = singleRuleName(axis, axisKey, allUnit, allUnitKey, true)
              result += v
              if (mediaQueries) {
                forMedia(v, mediaQueries)
              }
            }
    
          } else {       /// handler positive unit
    
            for (let axisKey in axis) {
              let v = singleRuleName(axis, axisKey, allUnit, allUnitKey, false)
              result += v
              if (mediaQueries) {
                forMedia(v, mediaQueries)
              }
            }
          }
        }
      }
    }
  }
  root.append(result)
  return result
}

function singleRuleName(axis, axisKey, allUnit, allUnitKey, isNegative){
  let ruleName = `${isNegative ? "-" : ""}${axis[axisKey]}-${ isNegative ? allUnitKey.slice(1) : allUnitKey}`
  let v =`.${ruleName}{
      --rsl-${axis[axisKey]}: ${allUnit[allUnitKey]}
    }`
  return v
}

function doubleRuleName({axis, arrKey, allUnit, allUnitKey, forMedia, mediaQueries}, isNegative){
  let result = ''
  for (let axisKey in axis) {
    let ruleName = `${isNegative ? "-" : ''}${axis[axisKey]}-${ isNegative ? arrKey[0].slice(1) : arrKey[0]}\\/${arrKey[1]}`
    let v =`.${ruleName}{
                  --rsl-${axis[axisKey]}: ${allUnit[allUnitKey]}
                }`
    result += v
    if(mediaQueries){
      forMedia(v, mediaQueries)
    }
  }
  return result
}

function doubleRuleDotSplit({axis, dotSplit, allUnit, allUnitKey, forMedia, mediaQueries}, isNegative){
  let result = ''
  for (let axisKey in axis) {
    let ruleName = `${isNegative ? "-" : ''}${axis[axisKey]}-${ isNegative ? dotSplit[0].slice(1) : dotSplit[0]}\\.${dotSplit[1]}`
    let v =`.${ruleName}{
              --rsl-${axis[axisKey]}: ${allUnit[allUnitKey]}
            }`
    result += v
    if(mediaQueries){
      forMedia(v, mediaQueries)
    }
  }
  return result
}


module.exports = makeTranslateRule


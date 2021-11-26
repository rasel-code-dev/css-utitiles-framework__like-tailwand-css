const getScapeSign = require("./getScapeSign");
const objectToCSSProperty = require("./objectToCSSProperty");
const hasStringColor = require("./hasStringColor");
const getInfo = require("./getInfo");




// interface configValue {
//   type: string,
//   values: {}[]
//   breakpoint: boolean
// }


function matchUtilities(utilityVariations, configValue, forMedia){
  let result = ''
  let hoverResult = ''

  let { values, type, hover } = configValue
  
  
  let ruleName = Object.keys(utilityVariations)[0]
  
  for(let valueKey in values) {
    if(type === "color") {
      let ruleStr = ''
      let css;
      
      let cssString = ''
      
      let ruleName = Object.keys(utilityVariations)[0]
      if(hasStringColor(values[valueKey])){
        css = utilityVariations[ruleName](values[valueKey], false)
      } else {
        css = utilityVariations[ruleName](values[valueKey], true)
      }
      
      let cssMap = new Map() // here key is css ruleName and value is css string...
      
      for (const cssKey in css) {

        // like
        if(cssKey.startsWith("&::")){
          // [placeholderOpacity, placeholderColor]
          /*{
            '--rsl-placeholder-opacity': 1,
            color: 'rgba(116, 42, 42, var(--rsl-placeholder-opacity))'
          }*/
          if(typeof css[cssKey] === "object") {
            let cssObj =  css[cssKey]
            cssString = objectToCSSProperty(cssObj)
            let clsName = `.${ruleName}-${valueKey}${cssKey.slice(1)}`
            cssMap.set(clsName, cssString)
          } else {
        
            cssMap.set(`${ruleName}-${valueKey}`, cssString)
            ruleStr += `${ruleName}-${valueKey}: ${objectToCSSProperty(css[cssKey])}; `
          }
          
          /* like divideColor */
        }
        else if(cssKey.startsWith("& >")) {

          if(typeof css[cssKey] === "object") {
            let cssObj =  css[cssKey]
            cssString = objectToCSSProperty(cssObj)

            let clsName = `.${ruleName}-${valueKey}${cssKey.slice(1)}`
            cssMap.set(clsName, cssString)
          }
        }
        else{
          cssString = objectToCSSProperty(css)
          let clsName = `.${ruleName}-${valueKey}`
          cssMap.set(clsName, cssString)
        }
      }
      
      
      
      // outside of loop in css properties
      cssMap.forEach((val, key)=>{
        let rule = `${key}{${val}}`
        if(hover) {
          let hoverRule = `.hover\\:${key.slice(1)}:hover{${val}}`
          hoverResult += hoverRule
        }
        result += rule
        forMedia && forMedia(rule)
      })
    }
    
    // type any without color
    else {
      
      /* handle for margin padding borderWidth placeholder-opacity */
      for (let utilityVariationsKey in utilityVariations) {
        /* also handle here
          'mx': ['margin-left', 'margin-right'],
          'my': ['margin-top', 'margin-bottom'],
        */

        if (typeof utilityVariations[utilityVariationsKey] === "object") {
          let info = getInfo(valueKey)
          if(info.isDot){
            let splitter = getScapeSign(".")
            let CSSString = ''
            let pairCSSObj = utilityVariations[utilityVariationsKey]

            for (const pairCSSItem of pairCSSObj) {
              CSSString += `${pairCSSItem}: ${values[valueKey]};`
            }
            let valueKeySplit = valueKey.split(".")
            if(info.isNegative){
              let rule = createDoubleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                valueKeySplit,
                true,
                splitter,
                CSSString,
              )
              result += rule
            } else {
              let rule = createDoubleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                valueKeySplit,
                false,
                splitter,
                CSSString
              )
              // forMedia && forMedia(rule)
              result += rule
            }
          }
          else if(info.isSlash){
            let splitter = getScapeSign("/")
          }
          else {
            
            let CSSString = ''
            let pairCSSObj = utilityVariations[utilityVariationsKey]
            
            for (const pairCSSItem of pairCSSObj) {
              CSSString += `${pairCSSItem}: ${values[valueKey]};`
            }
            
            if(info.isNegative) {
              let { rule, hoverRule }  = createSimpleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                true,
                CSSString
              )
              result += rule
            } else {
              let { rule, hoverRule } = createSimpleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                false,
                CSSString
              )
              result += rule
            }
          }

        // matchUtilities.utilityVariations Object Key are return a function like [space]
        }
        else if(typeof utilityVariations[utilityVariationsKey] === "function") {
          
          /// complex pseudo class like placeholder-opacity
          let utilityVariationObj = utilityVariations[utilityVariationsKey](values[valueKey])
          for (const utilityVariationObjKey in utilityVariationObj) {

            if(utilityVariationObjKey.startsWith("&::")){
              let s = objectToCSSProperty(utilityVariationObj[utilityVariationObjKey])
              let rule = `.${ruleName}-${valueKey}${utilityVariationObjKey.slice(1)}{${s}}`
              // .placeholder-opacity-5::placeholder{--rsl-placeholder-opacity: 0.05;}
              result += rule
            } else if(utilityVariationObjKey.startsWith("& >")) {
              
              // .divide-x-2 > :not([hidden]) ~ :not([hidden]) {}
              
              // .space-x-4 > :not([hidden]) ~ :not([hidden]) {
              //   --tw-space-x-reverse: 0;
              //   margin-right: calc(1rem * var(--tw-space-x-reverse));
              //   margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
              // }

              let cssObjString = objectToCSSProperty(utilityVariationObj[utilityVariationObjKey])
              let info = getInfo(valueKey)
              
              if (info.isDot) {
                let splitter = getScapeSign(".")
                let valueKeySplit =  valueKey.split(".")
                if (info.isNegative) {
                  let r = createDoubleRuleName(
                    utilityVariations,
                    utilityVariationsKey,
                    values,
                    valueKey,
                    valueKeySplit,
                    true,
                    splitter,
                    cssObjString
                  )
                  // let rule = `.${utilityVariationsKey}${empty ? "" : "-"}${valueKey}${utilityVariationObjKey.slice(1)} {
                  //   ${cssObjString}
                  // }`
                  result += r
                } else {
                  let r = createDoubleRuleName(
                    utilityVariations,
                    utilityVariationsKey,
                    values,
                    valueKey,
                    valueKeySplit,
                    false,
                    splitter,
                    cssObjString
                  )
                 
                  // let rule = `.${utilityVariationsKey}${empty ? "" : "-"}${valueKey}${utilityVariationObjKey.slice(1)} {
                  //   ${cssObjString}
                  // }`
                  
                  result += r
                }


              } else {
                if(info.isNegative) {
                  let { rule, hoverRule }  = createSimpleRuleName(
                    utilityVariations,
                    utilityVariationsKey,
                    values,
                    valueKey,
                    true,
                    cssObjString
                  )
  
                  result += rule
                } else {
                  let { rule, hoverRule }  = createSimpleRuleName(
                    utilityVariations,
                    utilityVariationsKey,
                    values,
                    valueKey,
                    false,
                    cssObjString
                  )
  
                  result += rule
                }
              }

            } else {
              let s = objectToCSSProperty(utilityVariationObj[utilityVariationObjKey])
              let rule = `.${ruleName}-${valueKey}{${s}}`
              result += rule
            }
          }

        }
        else if(typeof utilityVariations[utilityVariationsKey] === "string" || typeof utilityVariations[utilityVariationsKey] === "number"){
          // like width  margin marginTop borderWidth textOpacity
          
          let info = getInfo(valueKey)
          if (info.isDot){
            let splitter = getScapeSign(".")
            if(info.isNegative){
              
              let valueKeySplit =  valueKey.split(".")
              let r = createDoubleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                valueKeySplit,
                true,
                splitter
              )
              result += r
              forMedia && forMedia(r)
            } else {

              let valueKeySplit =  valueKey.split(".")
              let r = createDoubleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                valueKeySplit,
                false,
                splitter
              )
              forMedia && forMedia(r)
              result += r
            }
          }
          else if(info.isSlash) {
            let splitter = getScapeSign("/")
            if(info.isNegative){
              // let rule = createSimpleRuleName(
              //   utilityVariations,
              //   utilityVariationsKey,
              //   values,
              //   valueKey,
              //   true,
              //   undefined,
              //   splitter
              // )
              // console.log(rule)
            } else {
              
              let valueKeySplit = valueKey.split("/")
              let rule = createDoubleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                valueKeySplit,
                false,
                splitter
              )
              result += rule
            }

          }
          else {
            
            // handle plugin like maxWidth textOpacity
            if(info.isNegative) {
              let { rule, hoverRule }  = createSimpleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                true
              )
              forMedia && forMedia(rule)
              result += rule
            } else {
              
              let { rule, hoverRule } = createSimpleRuleName(
                utilityVariations,
                utilityVariationsKey,
                values,
                valueKey,
                false,
                "",
                true
              )
             
              forMedia && forMedia(rule)
              result += rule
              hoverResult += hoverRule
            }
          }
        }
      }
    }
  }
  
  return JSON.stringify({ result: result, hoverResult: hoverResult })
}

module.exports  = matchUtilities


function trimPxDefault(val, isNegative){
  if(val === "px"){
    return ''
  } else if(val === "Default" || val === "DEFAULT") {
    return  ''
  } else {
    return isNegative ?  `${val}` : `-${val}`
  }
}

function createSimpleRuleName(utilityVariations, utilityVariationsKey, values, valueKey, isNegative, CSSString, isHoverAble){
  let rule = ''
  let hoverRule = ''
  
  let css = `${utilityVariations[utilityVariationsKey]}: ${values[valueKey]}`
  if(isHoverAble){
    hoverRule =  `.hover\\:${isNegative ? "-" : ''}${utilityVariationsKey}${trimPxDefault(valueKey, isNegative)}:hover{
        ${CSSString ? CSSString : css}
    } `
  }
  
  rule = `.${isNegative ? "-" : ''}${utilityVariationsKey}${trimPxDefault(valueKey, isNegative)}{
      ${CSSString ? CSSString : css}
  } `
  
  return { rule, hoverRule }
}


function createDoubleRuleName(utilityVariations, utilityVariationsKey, values, valueKey, valueKeySplit, isNegative, splitter, CSSString){
  let css = `${utilityVariations[utilityVariationsKey]}: ${values[valueKey]}`
  const isEmpty = valueKey === ""

  return `.${isNegative ? "-" : ''}${utilityVariationsKey}${isNegative ? '' : isEmpty ? "" : '-'}${valueKeySplit[0]}${splitter}${valueKeySplit[1]}{
    ${CSSString ? CSSString : css}
  }`
}


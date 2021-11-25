

const hexToRGB = require("./hexToRGB");

const config = require("../../tailwind.config")


module.exports =  function ({themeKey, prefixCls, cssPropName, variable, mediaQueries, hover}, forMedia){
  let colorsProps = config.theme[themeKey]
    // themeKey: "colors", // value take from...
    // cssPropName: 'background-color',
    // classes: null, // these class property/value inside config file..
    // prefixCls: "bg",
    // variable: "--rsl-bg-opacity",
    // variable: "--rsl-bg-opacity",
    // opacityCssPropName: "opacity",
    // mediaQueries: "screens",
    // hover: true
  
  
  let result = ""
  let hoverRes = ""
  
  if(typeof colorsProps === "function" ) {
    
    let colors = colorsProps((themeKey)=>{
      return config.theme[themeKey]
    })

    for (let colorsKey in colors) {

      /// nested color... like {red: {100: "#ff0000"}}
      if(typeof colors[colorsKey] === "object"){
        let colorObj = colors[colorsKey]
        for (const colorObjKey in colorObj) {
          let eachRule= `.${prefixCls}-${colorsKey}-${colorObjKey}{
            ${variable}: 1;
            ${cssPropName}: ${colorObj[colorObjKey] ? hexToRGB(colorObj[colorObjKey], `var(${variable})`) : colorObj[colorObjKey]}
          }`
          if(hover) {
            hoverRes += createHoverClassForObjectValue({
              prefixCls,
              cssPropName,
              colorsKey,
              colorObjKey,
              variable,
              colorObj
            })
          }
          result += eachRule
          if(mediaQueries){
            forMedia(eachRule, mediaQueries)
          }
        }

      } else if(typeof colors[colorsKey] === "string") {
        let eachRule = ''
        let hoveEachRule = ''

        if(colorsKey === "transparent"){
          eachRule += `.${prefixCls}-${colorsKey}{
            ${variable}: 0;
            ${cssPropName}: ${colors[colorsKey] ? hexToRGB(colors[colorsKey], `var(${variable})`) : colors[colorsKey]}
          }`
          if(hover) {
            hoverRes += createHoverClassForString({prefixCls, cssPropName, colors, colorsKey, variable})
          }
        } else {
          if(hover) {
            hoverRes += createHoverClassForString({prefixCls, cssPropName, colors, colorsKey, variable})
          }
          eachRule += `.${prefixCls}-${colorsKey}{
            ${variable}: 1;
            ${cssPropName}: ${colors[colorsKey] ? hexToRGB(colors[colorsKey], `var(${variable})`) : colors[colorsKey]}
          }`
        }
        result += eachRule
        hoverRes += hoveEachRule
        if(mediaQueries){
          forMedia(eachRule, mediaQueries)
        }
      }
    }
  } else {
    
    let colors = config.theme[themeKey]
  
    for (let colorsKey in colors) {
      if (typeof colors[colorsKey] === 'string') {
   
        let eachRule = ''
        if(colorsKey === "transparent") {
          eachRule = `.${prefixCls}-${colorsKey}{
            ${variable}: 0;
            ${cssPropName}: ${hexToRGB(colors[colorsKey], `var(${variable})`)};
          }`
          if(hover) {
            hoverRes += createHoverClassForString({prefixCls, cssPropName, colors, colorsKey, variable})
          }
        } else {
          eachRule += `.${prefixCls}-${colorsKey}{
            ${variable}: 1;
            ${cssPropName}: ${hexToRGB(colors[colorsKey], `var(${variable})`)};
          }`
          if(hover) {
            hoverRes +=  createHoverClassForString({prefixCls, cssPropName, colors, colorsKey,  variable})
          }
        }
        result += eachRule
        
        if (mediaQueries) {
          forMedia(eachRule, mediaQueries)
        }
        
      } else {
        let colorObj = colors[colorsKey]
        for (const colorObjKey in colorObj) {
          let eachRule = `.${prefixCls}-${colorsKey}-${colorObjKey}{
            ${variable}: 1;
            ${cssPropName}: ${colorObj[colorObjKey] ? hexToRGB(colorObj[colorObjKey], `var(${variable})`) : colorObj[colorObjKey]}
          }`
          if(hover) {
            hoverRes += createHoverClassForObjectValue({
              prefixCls,
              cssPropName,
              colorsKey,
              colorObjKey,
              variable,
              colorObj
            })
          }
          result += eachRule
          if(mediaQueries){
            forMedia(eachRule, mediaQueries)
          }
        }
      }
    }
  }
  
  return { result, hover: hoverRes}
}

function createHoverClassForObjectValue({prefixCls, cssPropName, colorsKey, colorObjKey, variable, colorObj}){
  return `.hover\\:${prefixCls}-${colorsKey}-${colorObjKey}:hover{
    ${variable}: 1;
    ${cssPropName}: ${colorObj[colorObjKey] ? hexToRGB(colorObj[colorObjKey], `var(${variable})`) : colorObj[colorObjKey]}
  }`
}
function createHoverClassForString({prefixCls, cssPropName, colors, colorsKey,  variable}){
  return `.hover\\:${prefixCls}-${colorsKey}:hover{
    ${variable}: 1;
    ${cssPropName}: ${hexToRGB(colors[colorsKey], `var(${variable})`)};
   }`
}
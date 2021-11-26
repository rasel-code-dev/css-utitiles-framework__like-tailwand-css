const objectToCSSProperty = require("./objectToCSSProperty");


function addUtilities(utilities, cssPropName, forMedia, hover){
  let result = ''
  let hoverResult = ''
  for (const utilitiesKey in utilities) {
    let rule;
    if(typeof utilities[utilitiesKey] === "object") {   // like transform
      let objToStringCss = objectToCSSProperty(utilities[utilitiesKey])
      rule = `${utilitiesKey}{${objToStringCss}}`
      if(hover){ hoverResult += `.hover\\:${utilitiesKey.slice(1)}:hover{${objToStringCss}}`}
      
    } else {  // like [textAlign, transform]
      if(hover){ hoverResult += `.hover\\:${utilitiesKey.slice(1)}:hover{${cssPropName}: ${utilities[utilitiesKey]}}`}
      rule = `${utilitiesKey}{${cssPropName}: ${utilities[utilitiesKey]}}`
    }
    
    forMedia && forMedia(rule)
    result += rule
  }
  return JSON.stringify({ result, hoverResult})
}

module.exports = addUtilities


const objectToCSSProperty = require("./objectToCSSProperty");


function addUtilities(utilities, cssPropName, forMedia){
  let result = ''
  for (const utilitiesKey in utilities) {
    let rule;
    if(typeof utilities[utilitiesKey] === "object") {   // like transform
      let objToStringCss = objectToCSSProperty(utilities[utilitiesKey])
      rule = `${utilitiesKey}{${objToStringCss}}`
    } else {  // like [textAlign, transform]
      rule = `${utilitiesKey}{${cssPropName}: ${utilities[utilitiesKey]}}`
    }
    forMedia && forMedia(rule)
    result += rule
  }
  return result
}

module.exports = addUtilities


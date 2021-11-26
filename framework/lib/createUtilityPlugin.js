const getThemeObj = require("../lib/getThemeObj");
const matchUtilities = require("../lib/matchUtilities");
const parseUnit = require("./parseUnit");

function prefixNegativeModifiers(base, modifier) {
  if (modifier === '-') {
    return `-${base}`
  } else if ("s".startsWith(modifier, '-')) {
    return `-${base}-${modifier.slice(1)}`
  } else {
    return `${base}-${modifier}`
  }
}

const config = require("../../variable.config")


function asClass(name) {
  // return escapeCommas(`.${escapeClassName(name)}`)
}

function nameClass(classPrefix, key) {
  if (key === 'DEFAULT') {
    return asClass(classPrefix)
  }
  
  if (key === '-') {
    return asClass(`-${classPrefix}`)
  }
  
  if (key.startsWith('-')) {
    return asClass(`-${classPrefix}${key}`)
  }
  
  return asClass(`${classPrefix}-${key}`)
}


// type options = {
//   forMedia: ()=>:any,
// }

function flatten(key, values){
  let flat = {}
  for (let valuesKey in values) {
    flat[`${key.slice(0, key.length - 1)}-${valuesKey}`] = values[valuesKey]
  }
  return flat
}

function createUtilityPlugin(themeKey, utilityVariations, options){
  
  let result = ''
  let f = getThemeObj(themeKey)
  if(typeof f === "function"){
    let values = f((key)=>  {
      if(key === "screens") {
        return flatten(key, getThemeObj(key))
      } else {
        return getThemeObj(key)
      }
    })
      
      result += matchUtilities(
        utilityVariations,
        { values: parseUnit(values), type: "any", hover: options.hover },
        options.forMedia
      )
    } else {

      result += matchUtilities(
        utilityVariations,
        { values: parseUnit(f), type: "any", hover: options.hover },
        options.forMedia
      )
  }
  
  return result
}



module.exports = createUtilityPlugin
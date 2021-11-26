
const hexToRGB = require("../util/hexToRGB");
const makeSpaceRule = require("../util/makeSpaceRule");

function makeDivideWidthRule({axis, allWidth, mediaQueries, hover}) {
  let result = ''
  
  for (let allWidthKey in allWidth) {
    let pair = {}
    let pairAxisKey = {}
    if(allWidthKey === "DEFAULT"){     // handle classname like DEFAULT
      for (let axisKey in axis) {
        let clsName = axisKey
        pairAxisKey[clsName] = axisKey
  
  
        if (pair[clsName]) {
          pair[clsName] += `
             ${axis[axisKey][0]}: calc(1px * calc(1 - var(--rsl-${axisKey}-reverse)));` +
            `${axis[axisKey][1]}: calc(1px * var(--rsl-${axisKey}-reverse));
          `
        } else {
          pair[clsName] = `
              ${axis[axisKey][0]}: calc(1px * calc(1 - var(--rsl-${axisKey}-reverse)));` +
            `${axis[axisKey][1]}: calc(1px * var(--rsl-${axisKey}-reverse));
          `
        }
      }
    } else {
      // handle classname like 0, 1, 3, 4, 5
      for (let axisKey in axis) {
    
        let clsName = axisKey + '-' + allWidthKey
        pairAxisKey[clsName] = axisKey
        if (pair[clsName]) {
          pair[clsName] += `
              ${axis[axisKey][0]}: calc(${allWidth[allWidthKey]} * calc(1 - var(--rsl-${axisKey}-reverse)));` +
            `${axis[axisKey][1]}: calc(${allWidth[allWidthKey]} * var(--rsl-${axisKey}-reverse));
             `
        } else {
          pair[clsName] = `
              ${axis[axisKey][0]}: calc(${allWidth[allWidthKey]} * calc(1 - var(--rsl-${axisKey}-reverse)));` +
            `${axis[axisKey][1]}: calc(${allWidth[allWidthKey]} * var(--rsl-${axisKey}-reverse));
             `
        }
      }
    }
    
    
    for (let pairKey in pair) {
      let rule = `.${pairKey} > :not([hidden]) ~ :not([hidden]) {
        --rsl-${pairAxisKey[pairKey]}-reverse: 0;
        ${pair[pairKey]}
      }`
      result += rule
    }
  }
  
  return result
  
  //     `
  //     .divide-y-2 > :not([hidden]) ~ :not([hidden]) {
  //         --tw-divide-y-reverse: 0;
  //         border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));
  //         border-bottom-width: calc(2px * var(--tw-divide-y-reverse));
  //     }
  //
  // `
}

module.exports = makeDivideWidthRule


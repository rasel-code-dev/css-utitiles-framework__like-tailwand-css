const hexToRGB = require("../util/hexToRGB");

function makeDividerColor({prefixCls, colors, mediaQueries, hover}) {
  let result = ''
  for (let colorsKey in colors) {
    if (typeof colors[colorsKey] === "string") {
      let eachRule = `.${prefixCls}${colorsKey} > :not([hidden]) ~ :not([hidden]) {
        --rsl-divide-opacity: 1;
        border-color: ${hexToRGB(colors[colorsKey], 'var(--rsl-divide-opacity)')}
       }`
      result += eachRule
    }
  }
  
  return result

//   return `.${prefixCls}pink-500 > :not([hidden]) ~ :not([hidden]) {
//       --tw-divide-opacity: 1;
//       border-color: rgba(236, 72, 153, var(--tw-divide-opacity));
//     }
// `
}

module.exports = makeDividerColor
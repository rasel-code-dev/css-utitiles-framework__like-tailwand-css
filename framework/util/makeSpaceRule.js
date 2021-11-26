
function makeSpaceRule({splitViaSlash, allWidth, allWidthKey}){
  return `.space-x-${splitViaSlash[0]} > :not([hidden]) ~ :not([hidden]) {
     --rsl-space-x-reverse: 0;
     margin-right: calc(${allWidth[allWidthKey]} * var(--rsl-space-x-reverse));
     margin-left: calc(${allWidth[allWidthKey]} * calc(1 - var(--rsl-space-x-reverse)));
   }`
}
module.exports = makeSpaceRule

function createOpacity(opacity){
  let result = ''
  for (const opacityKey in opacity) {
    result += `
    .text-opacity-${opacityKey}{--rsl-text-opacity: ${opacity[opacityKey] / 1}}
    .bg-opacity-${opacityKey}{--rsl-bg-opacity: ${opacity[opacityKey] / 1}}
    .opacity-${opacityKey}{opacity: ${opacity[opacityKey] / 1}}
    `
  }
  return result
}

module.exports = createOpacity
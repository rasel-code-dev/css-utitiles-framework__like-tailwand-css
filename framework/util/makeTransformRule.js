const postcss = require("postcss");
module.exports = function (itemO, root, forMedia){
  
  let defaults_transform = itemO.defaults_transform

  let item = ''
  let transformCssProp = ''
  for (const defaultsTransformKey in defaults_transform) {

    if(!Array.isArray(defaults_transform[defaultsTransformKey])) {
      item += `${defaultsTransformKey}: ${defaults_transform[defaultsTransformKey]}; \n`
    } else {
      for(let val of defaults_transform[defaultsTransformKey]){
        transformCssProp += `${val} \n`
      }
    }
  }
  root.append(postcss.parse(`.transform{ ${item} transform: ${transformCssProp} }`))
}
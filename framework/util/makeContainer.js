const config  = require("../../tailwind.config");



function makeContainer(pluginObj, root, forMedia){
  
  
  // let containerStore = ''
  // const { themeKey, classes, prefixCls, mediaQueries } = pluginObj
  // let container =  config.theme[themeKey]
  // if(typeof container === "function"){
  //   let containerValues = container((themeKey1)=>config.theme[themeKey1] )
  //   for (const containerValuesKey in containerValues) {
  //     let eachContainer = `.${containerValuesKey}\\:container{
  //         max-width: ${containerValues[containerValuesKey]};
  //         padding-left: 10px;
  //         padding-right: 10px;
  //      } `
  //
  //       containerStore += `@media (min-width: ${containerValues[containerValuesKey]}) {
  //         ${eachContainer}
  //       }
  //       `
  //     if(mediaQueries){
  //     }
  //   }
  //   root.append(containerStore)
  // }
}

module.exports =  makeContainer
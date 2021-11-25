// const isFloat = require("./isFloat");
//
// const config =  require("../../tailwind.config");
//
//
// let  { spacing, margin } = config.theme
//
//
//
//
//
// module.exports = function createMarginPadding({themeKey, classes}){
//
//   let negativeUnitObj = {}
//   let unitObj = margin((spacing)=>{
//     return config.theme["spacing"]
//   }, {
//     negative: (spacing)=>{
//       for (const spacingKey in spacing) {
//         negativeUnitObj[`${spacingKey}`] = `-${spacing[spacingKey]}`
//       }
//     }
//   })
//
//   let result = create(classes, unitObj)
//   if(themeKey === "margin") {
//     result += createNegative(classes, unitObj)
//   }
//   return result
// }
//
//
// function create(classes, unitObj){
//
//   let result = ""
//   for (const unitObjKey in unitObj) {
//
//
//     let float = isFloat(unitObjKey)
//
//     let isNumber =  !isNaN(Number(unitObjKey))
//
//
//     for (let classesKey in classes) {
//       // dual prop
//       if(Array.isArray(classes[classesKey])){
//         if(isNumber) {
//           if (float) {
//             let floatArr = unitObjKey.split(".")
//             let pair = ''
//             for (let item of classes[classesKey]) {
//               pair += `${item}: ${unitObj[unitObjKey]};`
//             }
//             result += `.${classesKey}-${floatArr[0]}\\.${floatArr[1]}{${pair}}`
//           } else {
//             let pair = ''
//             for (let item of classes[classesKey]) {
//               pair += `${item}: ${unitObj[unitObjKey]};`
//             }
//             result += `.${classesKey}-${unitObjKey}{${pair} }`
//           }
//         } else {
//           let pair = ''
//           for (let item of classes[classesKey]) {
//             pair += `${item}: ${unitObj[unitObjKey]};`
//           }
//           result += `.${classesKey}-${unitObjKey}{ ${pair} }`
//         }
//       } else{
//         // single prop
//         if(isNumber) {
//           if(float) {
//             let floatArr = unitObjKey.split(".")
//             result += `.${classesKey}-${floatArr[0]}\\.${floatArr[1]}{ ${classes[classesKey]}: ${unitObj[unitObjKey]} }`
//           } else {
//             result += `.${classesKey}-${unitObjKey}{ ${classes[classesKey]}: ${unitObj[unitObjKey]} }`
//           }
//         } else {
//           // console.log(unitObjKey)
//           result += `.${classesKey}-${unitObjKey}{ ${classes[classesKey]}: ${unitObj[unitObjKey]} }`
//         }
//       }
//
//     }
//   }
//   return result
// }
//
//
// function createNegative(classes, unitObj){
//
//   let result = ""
//   for (const unitObjKey in unitObj) {
//
//     let float = isFloat(unitObjKey)
//
//     let isNumber =  !isNaN(Number(unitObjKey))
//
//     for (let classesKey in classes) {
//       // dual prop
//       if(Array.isArray(classes[classesKey])){
//         if(isNumber) {
//           if (float) {
//             let floatArr = unitObjKey.split(".")
//             let pair = ''
//             for (let item of classes[classesKey]) {
//               pair += `${item}: -${unitObj[unitObjKey]};`
//             }
//             result += `.-${classesKey}-${floatArr[0]}\\.${floatArr[1]}{${pair}}`
//           } else {
//             let pair = ''
//             if(unitObjKey !== "0") {
//               for (let item of classes[classesKey]) {
//                 pair += `${item}: -${unitObj[unitObjKey]};`
//               }
//               result += `.-${classesKey}-${unitObjKey}{${pair} }`
//             }
//           }
//         }
//       } else{
//         // single prop
//         if(isNumber) {
//           if(float) {
//             let floatArr = unitObjKey.split(".")
//             result += `.-${classesKey}-${floatArr[0]}\\.${floatArr[1]}{ ${classes[classesKey]}: -${unitObj[unitObjKey]} }`
//           } else {
//             if(unitObjKey !== "0"){
//               result += `.-${classesKey}-${unitObjKey}{ ${classes[classesKey]}: -${unitObj[unitObjKey]} }`
//             }
//           }
//         }
//       }
//     }
//   }
//   return result
// }
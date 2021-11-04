const variables  = require("./variables");
const fs  = require("fs");


for (const key in variables) {
  
  if(key === "colors"){
    let colorsObj = variables[key]
    let buildDir = variables.out || "scss"
    let isDir = fs.existsSync(buildDir)
    if(!isDir){
      fs.mkdirSync(buildDir)
    }
    let colorsScss =  ``
    let scssObj = ``
    for (const vKey in colorsObj) {
      if(typeof colorsObj[vKey] === "string"){
        colorsScss += `$${vKey}: ${colorsObj[vKey]};` + '\n'
        scssObj += ` ${vKey}: ${colorsObj[vKey]}, \n`
      } else{
        let variantColor = colorsObj[vKey]
        for (const variantColorKey in variantColor) {
          colorsScss += `$${vKey}-${variantColorKey}: ${variantColor[variantColorKey]}; \n`
          scssObj += ` ${vKey}-${variantColorKey}: ${variantColor[variantColorKey]}, \n`
        }
      }
    };
  
    scssObj = `$${key}_obj: ( \n ${scssObj} \n )`
    
    
    let fileName = `${buildDir}/${variables.filePrefix ? variables.filePrefix : ''}${key}.scss`
    fs.writeFile(fileName, colorsScss+=scssObj, (err, res)=>{
      if(!err) return console.info(`${fileName} file created.`)
      console.error(err);
    })
  }
}



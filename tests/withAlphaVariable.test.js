const withAlphaVariable  = require('../src/util/withAlphaVariable')



test("hex color to make css", ()=>{
  let result = withAlphaVariable({color:"#fff", property:"color", variable:'--bg-opacity'})

  let o = {
    '--bg-opacity': 1,
    color: 'rgba(255, 255, 255, var(--bg-opacity))'
  }
  expect(result).toStrictEqual(o)
})

test("string color make css", ()=>{
  let result = withAlphaVariable({color:"red", property:"color", variable:'--bg-opacity'})
  
  let o = {
    color: 'red'
  }
  expect(result).toStrictEqual(o)
})
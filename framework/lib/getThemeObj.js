const config = require("../../tailwind.config");


function getThemeObj(prop){
  return config.theme[prop]
}

module.exports = getThemeObj
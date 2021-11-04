const postCssPurge = require('@fullhuman/postcss-purgecss');
const jsxFile = /\.jsx(\?.+)?$/;

module.exports = {
  // plugins: [
  //   postCssPurge({
  //     contentFunction: (sourceInputFile) => {
  //       if (jsxFile.test(sourceInputFile)) {
  //         return [sourceInputFile.replace(jsxFile, '.jsx')];
  //       }
  //       return ['src/**/*.jsx', 'index.html'];
  //     },
  //     defaultExtractor(content) {
  //       return content.match(/[\w-/:]+(?<!:)/g) || [];
  //     },
  //   }),
  // ],
};
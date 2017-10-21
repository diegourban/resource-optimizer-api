const htmlminifier = require("html-minifier");

module.exports = class HtmlMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      try {
        var result = htmlminifier.minify(input, {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        });
        
        resolve(result);
      } catch(error) {
        reject(error);
      }
    });
  }

}

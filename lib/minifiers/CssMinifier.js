const crass = require("crass");

module.exports = class CssMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      try {
        var result = crass.parse(input).optimize({ o1: true });

        resolve(String(result));
      } catch(error) {
        reject(error);
      }
    });
  }

}

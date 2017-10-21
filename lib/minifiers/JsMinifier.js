const uglifyjs = require("uglify-js");

module.exports = class JsMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      try {
        var result = uglifyjs.minify(input);

        resolve(result);
      } catch(error) {
        reject(error);
      }
    });
  }

}

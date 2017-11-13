const babelminify = require("babel-minify");

module.exports = class JsMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      try {
        var result = babelminify(input).code;

        resolve(result);
      } catch(error) {
        reject(error);
      }
    });
  }

}

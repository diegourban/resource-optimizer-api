const babelminify = require("babel-minify");

module.exports = class JsMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      var result = babelminify(input).code;
      resolve(result);
    });
  }

}

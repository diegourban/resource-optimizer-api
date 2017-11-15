const babelminify = require("babel-minify");

exports.minify = function(input) {
  return new Promise(function(resolve, reject) {
    var result = babelminify(input).code;
    resolve(result);
  });
}

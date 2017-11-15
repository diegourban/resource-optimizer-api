const htmlminifier = require("html-minifier");

exports.minify = function(input) {
  return new Promise(function(resolve, reject) {
    var result = htmlminifier.minify(input, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeEmptyAttributes: true
    });

    resolve(result);
  });
}

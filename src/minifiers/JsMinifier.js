const uglifyjs = require("uglify-js");

module.exports = class JsMinifier {

  minify(input) {
    return uglifyjs.minify(input);
  }

}

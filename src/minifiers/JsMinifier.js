const uglifyjs = require("uglify-js");

module.exports = class JsMinifier {

  minify(input) {
    console.log("JsMinifier");
    return uglifyjs.minify(input);
  }

}

const uglifyjs = require("uglify-js");

module.exports = class JsMinifier {

  constructor() {
    // no opp
  }

  minify(input) {
    console.log("minify js");
    return uglifyjs.minify(input);
  }

}

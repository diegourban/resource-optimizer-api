const uglifyjs = require("uglify-js");

module.exports = class JsMinifier {

  constructor() {
    // no opp
  }

  minify(content) {
    console.log("minify js");
    return uglifyjs.minify(content);
  }

}

const cleancss = require("clean-css");

module.exports = class CssMinifier {

  constructor() {
    this.strategy = new cleancss({returnPromise : true});
  }

  minify(input) {
    console.log("CssMinifier");
    return this.strategy.minify(input);
  }

}

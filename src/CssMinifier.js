const cleancss = require('clean-css');

module.exports = class CssMinifier {

  constructor() {
    this.strategy = new cleancss({returnPromise : true});
  }

  minify(content) {
    console.log("minify css");
    return this.strategy.minify(content);
  }

}

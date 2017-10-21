const cleancss = require("clean-css");

module.exports = class CssMinifier {

  minify(input) {
    return new cleancss({returnPromise : true}).minify(input);
  }

}

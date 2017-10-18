const htmlminifier = require("html-minifier");

module.exports = class HtmlMinifier {

  constructor() {
    this.options = {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    };
  }

  minify(input) {
    console.log("HtmlMinifier");
    return htmlminifier.minify(input, this.options);
  }

}

const htmlminifier = require('html-minifier');

module.exports = class HtmlMinifier {

  constructor() {
    this.options = {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    };
  }

  minify(content) {
    console.log("minify html");
    return htmlminifier.minify(content, this.options);
  }

}

const crass = require("crass");
const cssnano = require("cssnano");

module.exports = class CssMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      resolve(crass.parse(input).optimize({ o1: true }).toString());
    });
  }

  fallback(input) {
    return cssnano.process(input, { safe: true });
  }

}

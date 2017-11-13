const crass = require("crass");
const csso = require("csso");

module.exports = class CssMinifier {

  minify(input) {
    return new Promise(function(resolve, reject) {
      resolve(crass.parse(input).optimize({o1: true}).toString());
    });
  }

  fallback(input) {
    return new Promise(function(resolve, reject) {
      resolve(csso.minify(input).css);
    });
  }

}

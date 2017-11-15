const crass = require("crass");
const cssnano = require("cssnano");

exports.minify = function(input) {
  return new Promise(function(resolve, reject) {
    resolve(crass.parse(input).optimize({ o1: true }).toString());
  });
}

exports.fallback = function(input) {
  return cssnano.process(input, { safe: true });
}

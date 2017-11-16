const imagemin = require("imagemin");
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require("imagemin-pngquant");
const PNGOptions = require("./PNGOptions");
const JPEGOptions = require("./JPEGOptions");

exports.optimize = function(input, options) {
  options = options || {};

  var jpegOptions = {
    quality: JPEGOptions.qualityFrom(options.jpegQuality)
  }

  var pngOptions = {
    quality: PNGOptions.qualityFrom(options.pngQuality),
    speed: PNGOptions.speedFrom(options.pngQuality),
    floyd: PNGOptions.floydFrom(options.pngQuality)
  }

  return imagemin.buffer(input, {
    plugins: [
      imageminMozjpeg(jpegOptions),
      imageminPngquant(pngOptions)
    ]
  });
}

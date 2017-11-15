const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const PNGOptions = require("./PNGOptions");
const JPEGOptions = require("./JPEGOptions");

exports.optimize = function(input, options) {
  options = options || {};

  var jpegOptions = {
    progressive: JPEGOptions.progressiveFrom(options.lossless)
  }

  var pngOptions = {
    quality: PNGOptions.qualityFrom(options.quality),
    speed: PNGOptions.speedFrom(options.quality),
    floyd: PNGOptions.floydFrom(options.quality)
  }

  return imagemin.buffer(input, {
    plugins: [
      imageminJpegtran(jpegOptions),
      imageminPngquant(pngOptions)
    ]
  });
}

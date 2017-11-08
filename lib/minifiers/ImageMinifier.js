const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

module.exports = class ImageMinifier {

  minify(input, opts) {
    opts = opts || {};

    var jpegOptions = {
      progressive: this.progressiveFrom(opts.lossless)
    }

    var pngOptions = {
      quality: this.qualityFrom(opts.quality),
      speed: this.speedFrom(opts.quality),
      floyd: this.floydFrom(opts.quality)
    }

    return imagemin.buffer(input, {
      plugins: [
        imageminJpegtran(jpegOptions),
        imageminPngquant(pngOptions)
      ]
    });
  }

  progressiveFrom(lossless) {
    return lossless == "true" ? false : true;
  }

  qualityFrom(quality) {
    if(quality === "low") {
      return "0-30";
    } else if (quality === "med") {
      return "30-70";
    } else if(quality === "high") {
      return "70-100";
    } else {
      return "65-80";
    }
  }

  speedFrom(quality) {
    if(quality === "low") {
      return 1
    } else if (quality === "med") {
      return 5;
    } else if(quality === "high") {
      return 10;
    } else {
      return 3;
    }
  }

  floydFrom(quality) {
    if(quality === "low") {
      return 0.1
    } else if(quality === "high") {
      return 1.0;
    } else {
      return 0.5;
    }
  }

}

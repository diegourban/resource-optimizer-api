const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

module.exports = class ImageMinifier {

  minify(input) {
    return imagemin.buffer(input, {
      plugins: [
        imageminJpegtran({progressive: true}),
        imageminPngquant({quality: "65-80"})
      ]
    });
  }

}

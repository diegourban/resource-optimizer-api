const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = class ImageMinifier {

  constructor() {
    this._plugins = [
      imageminJpegtran(),
      imageminPngquant({quality: '65-80'})
    ]
  }

  minify(input) {
    console.log('minify image');
    return imagemin.buffer(input, this._plugins);
  }

}

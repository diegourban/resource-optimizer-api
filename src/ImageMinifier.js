const imagemin = require('imagemin');

module.exports = class ImageMinifier {

  constructor() {

  }

  minify(input) {
    console.log('minify image');
    return imagemin(input);
  }

}

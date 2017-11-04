const logger = require("winston");
const router = require("express").Router();
const ImageMinifier = require("../minifiers/ImageMinifier");

/**
 * @api {post} /api/minify Minify PNG
 * @apiVersion 0.1.0
 * @apiName MinifyPNG
 * @apiGroup Minify
 *
 * @apiExample Example usage:
 * curl -X POST -H "Content-Type: image/png" --data-binary "@/home/urban/inputs/input.png" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.png
 *
 * @apiHeader (Request Headers) {String} Content-Type image/png
 *
 * @apiHeader (Response Headers) {String} Content-Type image/png
 *
 * @apiSuccess {Buffer} body Content minified
 */

 /**
  * @api {post} /api/minify Minify JPEG
  * @apiVersion 0.1.0
  * @apiName MinifyJPEG
  * @apiGroup Minify
  *
  * @apiExample Example usage:
  * curl -X POST -H "Content-Type: image/jpeg" --data-binary "@/home/urban/inputs/input.jpg" http://localhost:3000/api/minify >> /home/urban/outputs/output.jpg
  *
  * @apiHeader (Request Headers) {String} Content-Type image/jpeg
  *
  * @apiHeader (Response Headers) {String} Content-Type image/jpeg
  *
  * @apiSuccess {Buffer} body Content minified
  */
router.post("/image", function(req, res) {

  var buffers = [];

  req.on("data", function(chunk) {
    buffers.push(chunk);
  })

  req.on("end", function() {
    var buffer = Buffer.concat(buffers);

    new ImageMinifier().minify(buffer)
      .then(function(output) {
        res.setHeader("Content-Type", req.get("Content-Type"));
        res.send(output);
      })
      .catch(function(err) {
        logger.error("Ocorreu um erro na minificação: " + err);
        res.status(500).send(err);
      })
  });

});

module.exports = router;

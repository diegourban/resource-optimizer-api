const logger = require("winston");
const router = require("express").Router();
const ImageOptimizer = require("../minifiers/image/ImageOptimizer");

/**
 * @api {post} /api/minify Optimize PNG
 * @apiVersion 0.1.0
 * @apiName OptimizePNG
 * @apiGroup API
 *
 * @apiParam {String} pngQuality ?pngQuality=high para definir que a qualidade da imagem deve permanecer alta. Opções possíveis são: low, average ou high
 *
 * @apiExample Exemplo:
 * curl -X POST -H "Content-Type: image/png" --data-binary "@/home/urban/inputs/input.png" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.png
 *
 * @apiHeader {String} Content-Type image/png
 *
 * @apiSuccess {Buffer} body Conteúdo otimizado.
 */

 /**
  * @api {post} /api/minify Optimize JPEG
  * @apiVersion 0.1.0
  * @apiName OptimizeJPEG
  * @apiGroup API
  *
  * @apiParam {Boolean} jpegQuality ?jpegQuality=high para definir que a qualidade da imagem deve permanecer alta. Opções possíveis são: low, average ou high
  *
  * @apiExample Exemplo:
  * curl -X POST -H "Content-Type: image/jpeg" --data-binary "@/home/urban/inputs/input.jpg" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.jpg
  *
  * @apiHeader {String} Content-Type image/jpeg
  *
  * @apiSuccess {Buffer} body Conteúdo minificado.
  */
router.post("/image", function(req, res) {

  var buffers = [];

  req.on("data", function(chunk) {
    buffers.push(chunk);
  })

  req.on("end", function() {
    var buffer = Buffer.concat(buffers);

    ImageOptimizer.optimize(buffer, req.query)
      .then(function(output) {
        res.setHeader("Content-Type", req.get("Content-Type"));
        res.send(output);
      })
      .catch(function(err) {
        logger.error("Ocorreu um erro na otimização: " + err);
        res.status(500).send(err);
      })
  });

});

module.exports = router;

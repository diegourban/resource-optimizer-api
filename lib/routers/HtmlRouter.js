const logger = require("winston");
const router = require("express").Router();
const HtmlMinifier = require("../minifiers/HtmlMinifier");

/**
 * @api {post} /api/minify Minify HTML
 * @apiVersion 0.1.0
 * @apiName MinifyHTML
 * @apiGroup Minify
 *
 * @apiExample Exemplo:
 * curl -X POST -H "Content-Type: text/html" --data-binary "@/home/urban/inputs/input.html" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.html
 *
 * @apiHeader {String} Content-Type text/html
 *
 * @apiSuccess {String} body Conteúdo minificado.
 */
router.post("/html", function(req, res) {

  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    HtmlMinifier.minify(buffer)
      .then(function(output) {
        res.setHeader("Content-Type", req.get("Content-Type"));
        res.send(output);
      })
      .catch(function(err) {
        logger.error("Ocorreu um erro na minificação: \n" + err);
        res.status(500).send(err);
      })
  });

});

module.exports = router;

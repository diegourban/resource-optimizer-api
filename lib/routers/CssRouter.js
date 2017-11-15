const logger = require("winston");
const router = require("express").Router()
const CssMinifier = require("../minifiers/CssMinifier");

/**
 * @api {post} /api/minify Minify CSS
 * @apiVersion 0.2.0
 * @apiName MinifyCSS
 * @apiGroup Minify
 *
 * @apiExample Exemplo:
 * curl -X POST -H "Content-Type: text/css" --data-binary "@/home/urban/inputs/input.css" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.css
 *
 * @apiHeader {String} Content-Type text/css
 *
 * @apiSuccess {String} body Conteúdo minificado.
 */
router.post("/css", function(req, res) {

  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    res.setHeader("Content-Type", req.get("Content-Type"));

    CssMinifier.minify(buffer).then(function(output) {
      res.send(output);
    })
    .catch(function(err) {
      logger.warn("Ocorreu um erro na minificação, tentanto o fallback...");
      CssMinifier.fallback(buffer).then(function(fallbackOutput) {
        res.send(fallbackOutput.css);
      })
      .catch(function(errFallback) {
        logger.error("Ocorreu um erro na minificação de fallback: \n" + errFallback);
        res.status(500).send(err);
      })
    })
  });

});

module.exports = router;

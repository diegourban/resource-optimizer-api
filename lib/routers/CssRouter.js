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
    new CssMinifier().minify(buffer)
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

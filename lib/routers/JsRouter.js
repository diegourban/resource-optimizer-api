const logger = require("winston");
const router = require("express").Router();
const JsMinifier = require("../minifiers/JsMinifier");

/**
 * @api {post} /api/minify Minify JS
 * @apiVersion 0.1.0
 * @apiName MinifyJS
 * @apiGroup Minify
 *
 * @apiExample Exemplo:
 * curl -X POST -H "Content-Type: text/javascript" --data-binary "@/home/urban/inputs/input.js" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.js
 *
 * @apiHeader {String} Content-Type text/javascript
 *
 * @apiSuccess {String} body Conteúdo minificado.
 */
router.post("/js", function(req, res) {

  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    new JsMinifier().minify(buffer)
      .then(function(output) {
        res.setHeader("Content-Type", req.get("Content-Type"));
        res.send(output.code);
      })
      .catch(function(err) {
        logger.error("Ocorreu um erro na minificação: \n" + err);
        res.status(500).send(err);
      })
  });

});

module.exports = router;

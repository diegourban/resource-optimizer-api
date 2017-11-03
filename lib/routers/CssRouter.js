const logger = require("winston");
const router = require("express").Router()
const CssMinifier = require("../minifiers/CssMinifier");

/**
 * @api {post} /api/minify Minify CSS
 * @apiVersion 0.1.0
 * @apiName MinifyCSS
 * @apiGroup Minify
 *
 * @apiExample Example usage:
 * curl -X POST -H "Content-Type: text/css" --data-binary "@/home/urban/inputs/input.css" http://localhost:3000/api/minify >> /home/urban/outputs/output.css
 *
 * @apiHeader (Request Headers) {String} Content-Type text/css
 *
 * @apiHeader (Response Headers) {String} Content-Type text/css
 *
 * @apiSuccess {String} body Content minified
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
        res.send(output.styles);
      })
      .catch(function(err) {
        logger.error("Ocorreu um erro na minificação: \n" + err);
        res.status(500).send(err);
      })
  });

});

module.exports = router;

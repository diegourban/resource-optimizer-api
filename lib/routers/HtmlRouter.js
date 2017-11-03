const logger = require("winston");
const router = require("express").Router();
const HtmlMinifier = require("../minifiers/HtmlMinifier");

/**
 * @api {post} /api/minify Minify HTML
 * @apiVersion 0.1.0
 * @apiName MinifyHTML
 * @apiGroup Minify
 *
 * @apiExample Example usage:
 * curl -X POST -H "Content-Type: text/html" --data-binary "@/home/urban/inputs/input.html" http://localhost:3000/api/minify >> /home/urban/outputs/output.html
 *
 * @apiHeader (Request Headers) {String} Content-Type text/html
 *
 * @apiHeader (Response Headers) {String} Content-Type text/html
 *
 * @apiSuccess {String} body Content minified
 */
router.post("/html", function(req, res) {

  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    new HtmlMinifier().minify(buffer)
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

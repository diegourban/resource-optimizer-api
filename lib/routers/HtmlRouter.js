const logger = require("winston");
const router = require("express").Router();
const HtmlMinifier = require("../minifiers/HtmlMinifier");

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

const logger = require("winston");
const router = require("express").Router();
const ImageMinifier = require("../minifiers/ImageMinifier");

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

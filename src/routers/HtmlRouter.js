const router = require("express").Router();
const HtmlMinifier = require("../minifiers/HtmlMinifier");

router.post("/html", function(req, res) {
  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    var result = new HtmlMinifier().minify(buffer);
    res.setHeader("Content-Type", req.get("Content-Type"));
    res.send(result);
  });

});

module.exports = router;

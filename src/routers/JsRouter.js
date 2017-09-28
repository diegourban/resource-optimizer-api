const router = require("express").Router();
const JsMinifier = require("../minifiers/JsMinifier");

router.post("/js", function(req, res) {
  var buffer = "";

  req.on("data", function(chunk) {
    buffer += chunk;
  });

  req.on("end", function() {
    var result = new JsMinifier().minify(buffer);
    res.setHeader("Content-Type", req.get("Content-Type"));
    res.send(result.code);
  });

});

module.exports = router;

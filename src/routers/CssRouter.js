const express = require('express');
const router = express.Router();
const CssMinifier = require('../minifiers/CssMinifier');

router.post("/", function(req, res) {

  var buffer = '';

  req.on('data', function(chunk) {
    buffer += chunk;
  });

  req.on('end', function() {
    new CssMinifier().minify(buffer)
      .then(function(output) {
        console.log(output);
        res.setHeader('Content-Type', req.get('Content-Type'));
        res.send(output.styles);
      })
      .catch(function(err) {
        console.log('Ocorreu um erro na minificação: \n' + err);
        res.status(500).send(err);
      })
  });
  
});

module.exports = router;

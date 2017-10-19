const express = require("express");
const load = require("express-load");
const bodyParser = require("body-parser");

module.exports = function() {
  var app = express();

  app.use(bodyParser.raw());

  load("routes", {cwd : "lib"}).into(app);

  return app;
}

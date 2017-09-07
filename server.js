const express = require('express');
const bodyParser = require('body-parser');

const CleanCSS = require('clean-css');
const UglifyJS = require("uglify-js");
const HtmlMinifier = require('html-minifier');

var app = express();

app.use(bodyParser.raw());

var routerCSS = express.Router();
var routerHTML = express.Router();
var routerJS = express.Router();

app.use(function(req, res, next) {
    if(checkCSSContent(req)) {
      req.url = "/css" + req.url;
    } else if (checkJSContent(req)) {
      req.url = "/js" + req.url;
    } else if (checkHTMLContent(req)) {
      req.url = "/html" + req.url;
    } else {
      res.status(400).send('Invalid Content-Type');
    }

    next();
});

app.use("/css/", routerCSS);
app.use("/js/", routerJS);
app.use("/html/", routerHTML);

function checkCSSContent(req) {
  return checkContentType(req, 'text/css');
}

function checkJSContent(req) {
  return checkContentType(req, 'text/javascript');
}

function checkHTMLContent(req) {
  return checkContentType(req, 'text/html');
}

function checkContentType(req, contentType) {
  return contentType === req.get('Content-Type');
}

routerCSS.post("/", function(req, res) {
  console.log('minify css');

  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);
    new CleanCSS({ returnPromise: true })
      .minify(req.rawBody)
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

routerJS.post("/", function(req, res) {
  console.log('minify js');

  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);

    var result = UglifyJS.minify(req.rawBody);
    console.log(result.code);
    res.setHeader('Content-Type', req.get('Content-Type'));
    res.send(result.code);
  });
});

routerHTML.post("/", function(req, res) {
  console.log('minify html');

  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);

    var result = HtmlMinifier.minify(req.rawBody, {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    });
    console.log(result);
    res.setHeader('Content-Type', req.get('Content-Type'));
    res.send(result);
  });
});

var server = app.listen(3000, function(){
  console.log('Servidor iniciado, ouvindo na porta 3000');
});

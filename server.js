const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');

const CssMinifier = require('./src/CssMinifier');
const JsMinifier = require('./src/JsMinifier');
const HtmlMinifier = require('./src/HtmlMinifier');
const ImageMinifier = require('./src/ImageMinifier');

var uploadDir = '/uploads';

var app = express();

app.use(bodyParser.raw());

app.post('/upload', function(req, res){
  var form = new formidable.IncomingForm();

  // define que é possível fazer upload de múltiplos arquivos num único request
  form.multiples = true;

  // armazenar os arquivos no diretório /uploads
  form.uploadDir = path.join(__dirname, uploadDir);

  // para cada arquivo feito upload com sucesso,
  // renomeia para seu nome original,
  // minifica e armazena no arquivo .min
  form.on('file', function(field, file) {
    var extension = path.extname(file.name);
    console.log(extension);
    var basename = path.basename(file.name, extension);
    console.log(basename);
    var newPath = path.join(form.uploadDir, file.name);
    fs.rename(file.path, newPath);
    console.log(newPath);

/*
    new CleanCSS({ returnPromise: true })
      .minify([newPath])
      .then(function(output) {
        var basename_min = basename + '.min' + extension;
        console.log(output);
        fs.writeFile(path.join(form.uploadDir, basename_min), output.styles, function(err) {
          if(err) {
            return console.log(err);
          }
          console.log("Arquivo salvo");
        });
      })
      .catch(function(err) {
        console.log('Ocorreu um erro na minificação: \n' + err);
      })
      */
  });

  form.on('error', function(err) {
    console.log('Ocorreu em erro: \n' + err);
  });

  form.on('end', function() {
    res.end('Sucesso');
  });

  form.parse(req);
});

var routerCSS = express.Router();
var routerHTML = express.Router();
var routerJS = express.Router();
var routerImage = express.Router();

app.use(function(req, res, next) {
    if(checkCSSContent(req)) {
      req.url = "/css" + req.url;
    } else if (checkJSContent(req)) {
      req.url = "/js" + req.url;
    } else if (checkHTMLContent(req)) {
      req.url = "/html" + req.url;
    } else if(checkImageContent(req)) {
      req.url = "/image" + req.url;
    } else {
      res.status(400).send('Invalid Content-Type');
    }

    next();
});

app.use("/css", routerCSS);
app.use("/js", routerJS);
app.use("/html", routerHTML);
app.use("/image", routerImage);

function checkCSSContent(req) {
  return checkContentType(req, 'text/css');
}

function checkJSContent(req) {
  return checkContentType(req, 'text/javascript');
}

function checkHTMLContent(req) {
  return checkContentType(req, 'text/html');
}

function checkImageContent(req) {
  return checkContentType(req, 'image/jpeg', 'image/png');
}

function checkContentType(req, ...contentType) {
  return contentType.includes(req.get('Content-Type'));
}

routerCSS.post("/", function(req, res) {
  console.log('css router');

  req.rawBody = '';

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);

    new CssMinifier().minify(req.rawBody)
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
  console.log('js router');

  req.rawBody = '';

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);

    var result = new JsMinifier().minify(req.rawBody);
    console.log(result.code);
    res.setHeader('Content-Type', req.get('Content-Type'));
    res.send(result.code);
  });
});

routerHTML.post("/", function(req, res) {
  console.log('html router');

  req.rawBody = '';

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    console.log(req.rawBody);

    var result = new HtmlMinifier().minify(req.rawBody);
    console.log(result);
    res.setHeader('Content-Type', req.get('Content-Type'));
    res.send(result);
  });
});

routerImage.post("/", function(req, res) {
  console.log("image router");

  var buffers = [];

  req.on('data', function(chunk) {
    buffers.push(chunk);
  })

  req.on('end', function() {
    var buffer = Buffer.concat(buffers);

    new ImageMinifier().minify(buffer)
      .then(function(output) {
        res.setHeader('Content-Type', req.get('Content-Type'));
        res.send(output);
      })
      .catch(function(err) {
        console.log('Ocorreu um erro na minificação: \n' + err);
        res.status(500).send(err);
      })
  })
});

var server = app.listen(3000, function() {
  var uploadPath = path.join(process.cwd(), uploadDir);
  if (!fs.existsSync(uploadPath)) {
    console.log('Criando diretório de upload ' + uploadPath);
    fs.mkdirSync(uploadPath);
  }
  console.log('Servidor iniciado, ouvindo na porta 3000');
});

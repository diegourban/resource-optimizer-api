const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');

const CssRouter = require('./src/routers/CssRouter');
const HtmlRouter = require('./src/routers/HtmlRouter');
const JsRouter = require('./src/routers/JsRouter');
const ImageRouter = require('./src/routers/ImageRouter');

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

app.use(function(req, res, next) {
    if(checkCSSContent(req)) {
      req.url = "/css" + req.url;
    } else if (checkHTMLContent(req)) {
      req.url = "/html" + req.url;
    } else if (checkJSContent(req)) {
      req.url = "/js" + req.url;
    } else if(checkImageContent(req)) {
      req.url = "/image" + req.url;
    } else {
      res.status(400).send('Invalid Content-Type');
    }

    next();
});

app.use("/css", CssRouter);
app.use("/html", HtmlRouter);
app.use("/js", JsRouter);
app.use("/image", ImageRouter);

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

var server = app.listen(3000, function() {
  var uploadPath = path.join(process.cwd(), uploadDir);
  if (!fs.existsSync(uploadPath)) {
    console.log('Criando diretório de upload ' + uploadPath);
    fs.mkdirSync(uploadPath);
  }
  console.log('Servidor iniciado, ouvindo na porta 3000');
});

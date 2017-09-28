const WEB_ENDPOINT = "/web/upload";

const path = require('path');
const fs = require('fs');

const formidable = require("formidable");

module.exports = function(app) {

  /*
  const UPLOAD_DIR = path.join(process.cwd(), "/uploads");
  if (!fs.existsSync(UPLOAD_DIR)) {
    console.log('Criando diretório de upload ' + UPLOAD_DIR);
    fs.mkdirSync(UPLOAD_DIR);
  }
  */

  app.post(WEB_ENDPOINT, function(req, res, next){
    res.send("sucesso");
    /*
    var form = new formidable.IncomingForm();

    // define que é possível fazer upload de múltiplos arquivos num único request
    form.multiples = true;

    // armazenar os arquivos no diretório de upload
    form.uploadDir = path.join(__dirname, UPLOAD_DIR);

    // para cada arquivo feito upload com sucesso,
    // renomeia para seu nome original,
    // minifica e armazena no arquivo .min
    form.on("file", function(field, file) {
      var extension = path.extname(file.name);
      console.log(extension);
      var basename = path.basename(file.name, extension);
      console.log(basename);
      var newPath = path.join(form.uploadDir, file.name);
      fs.rename(file.path, newPath);
      console.log(newPath);
    });

    form.on("error", function(err) {
      console.log("Ocorreu em erro: \n" + err);
    });

    form.on("end", function() {
      res.end("Sucesso");
    });

    form.parse(req);
    */
  });

}

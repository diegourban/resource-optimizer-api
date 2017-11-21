const logger = require("./config/log");
const app = require("./config/express")();
const config = require("./config/config");

var server = app.listen(config.express.port, function(error) {
  if (error) {
    logger.error("Não foi possível iniciar a conexão", error);
    process.exit(10);
  }

  logger.info(`Servidor iniciado na porta ${server.address().port}`);
})
.on("error", function(error) {
  logger.error("Erro inesperado : " + error);
});

app.get("/", function(req, res, next) {
  res.redirect('/doc/index.html');
});

module.exports = server;

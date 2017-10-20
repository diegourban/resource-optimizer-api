const logger = require('./config/log');
const app = require('./config/express')();

var server = app.listen(3000, function(error) {
  if (error) {
    logger.error("Não foi possível iniciar a conexão", error);
    process.exit(10);
  }
  
  logger.info("Servidor iniciado, ouvindo na porta 3000");
})
.on("error", function(err){
  logger.error("Erro inesperado : " + err);
});

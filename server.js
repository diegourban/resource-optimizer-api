const logger = require('./config/log');
const app = require('./config/express')();

var server = app.listen(3000, function() {
  logger.info("Servidor iniciado, ouvindo na porta 3000");
})
.on("error", function(err){
  logger.error("Erro inesperado : " + err);
});

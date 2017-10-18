const app = require('./src/config/express')();

var server = app.listen(3000, function() {
  console.log('Servidor iniciado, ouvindo na porta 3000');
})
.on('error', function(err){
    console.log('on error handler');
    console.log(err);
});

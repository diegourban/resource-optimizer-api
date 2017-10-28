const fs = require("fs");
const winston = require("winston");
const logfile = "api.log";

if(!fs.existsSync(logfile)) {
  fs.writeFile(logfile, "", (err) => {
    if (err) throw err;
    console.log("arquivo criado");
  });
}
winston.add(winston.transports.File, { filename: logfile });

if (process.env.NODE_ENV === "production") {
  winston.remove(winston.transports.Console);
}

module.exports = winston;

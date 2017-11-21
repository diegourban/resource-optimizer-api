const fs = require("fs");
const winston = require("winston");
const logfile = "api.log";

winston.add(winston.transports.File, { filename: logfile });

if (process.env.NODE_ENV === "test") {
  winston.remove(winston.transports.Console);
}

module.exports = winston;

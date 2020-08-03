/**
 * @summary Logger configuration.
 */
const fs = require("fs");
const path = require("path");
const bunyan = require("bunyan");
const bformat = require("bunyan-format");
const morgan = require("morgan");

const formatOut = bformat({ outputMode: "short" });

// Custom application logs.
const log = bunyan.createLogger({
  name: "template-nodejs-express",
  streams: [
    {
      level: "debug",
      stream: formatOut, // log DEBUG and above to stdout
    },
    {
      level: "error",
      path: "/var/log/template-nodejs-express.log", // log ERROR to a file
    },
  ],
});

// stout logger for HTTP request.
const morganStdoutLogger = morgan("tiny");

// file logger for HTTP request.
const morganFileLogger = morgan("common", {
  stream: fs.createWriteStream(path.join("/var/log/", "access.log"), {
    flags: "a",
  }),
});

module.exports = {
  log,
  morganStdoutLogger,
  morganFileLogger,
};

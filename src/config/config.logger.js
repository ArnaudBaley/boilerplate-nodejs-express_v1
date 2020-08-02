/**
 * @summary Logger configuration.
 */

const bunyan = require("bunyan");
const bformat = require("bunyan-format");

const formatOut = bformat({ outputMode: "short" });

// Application logs.
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

// Express dedicated logs.
const expressLog = require("express-bunyan-logger")({
  name: "template-nodejs-express.log",
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

module.exports = {
  log,
  expressLog,
};

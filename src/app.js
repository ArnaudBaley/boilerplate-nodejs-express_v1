const express = require("express");
const bunyan = require("bunyan");
const bformat = require("bunyan-format");
// Import all routes from config.
const routes = require("./config/config.routes");

const formatOut = bformat({ outputMode: "short" });

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

const app = express();

// Specific log of express.
app.use(
  require("express-bunyan-logger")({
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
  })
);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  log.info("Example app listening on port 3000!");
});

app.use("/api", routes.router);

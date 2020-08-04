const express = require("express");
const { log } = require("./config/config.logger");
const {
  morganStdoutLogger,
  morganFileLogger,
} = require("./config/config.logger");
// Import all routes from config.
const routes = require("./config/config.routes");
const { dbConnect } = require("./config/config.bd");

const app = express();

// stout logger for HTTP request.
app.use(morganStdoutLogger);
app.use(morganFileLogger);

// Connect to MongoDB.
dbConnect();

// Routes.
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  log.info("Example app listening on port 3000!");
});

app.use("/api", routes.router);

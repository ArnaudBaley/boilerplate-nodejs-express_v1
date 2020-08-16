const express = require("express");
const bodyParser = require("body-parser");
const { log } = require("./config/config.logger");
const { connectToDB } = require("./config/config.bd");
const {
  morganStdoutLogger,
  morganFileLogger,
} = require("./config/config.logger");
// Import all routes from config.
const routes = require("./config/config.routes");

const app = express();

// stout logger for HTTP request.
app.use(morganStdoutLogger);
app.use(morganFileLogger);

// MongoDB connection.
connectToDB();

// parse requests application/json -> req.body
app.use(bodyParser.json());
// parse requests application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Routes.
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  log.info("Example app listening on port 3000!");
});

app.use("/api", routes.router);

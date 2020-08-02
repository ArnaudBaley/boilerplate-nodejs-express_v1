const express = require("express");
const { log } = require("./config/config.logger");
const { expressLog } = require("./config/config.logger");
// Import all routes from config.
const routes = require("./config/config.routes");

const app = express();

// Specific log of express.
app.use(expressLog);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  log.info("Example app listening on port 3000!");
});

app.use("/api", routes.router);

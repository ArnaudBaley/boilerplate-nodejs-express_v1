const express = require("express");
// Import all routes from config.
const routes = require("./config/config.routes");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

app.use("/api", routes.router);

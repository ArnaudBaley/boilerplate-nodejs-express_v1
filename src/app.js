const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { OpenApiValidator } = require("express-openapi-validator");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
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

const apiSpec = YAML.load(path.join(__dirname, "api.yaml"));

// Serve OpenAPI UI (https://www.npmjs.com/package/swagger-ui-express)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiSpec));
log.info("OpenAPI UI : http://localhost:3000/api-docs");

// (optionally) Serve the OpenAPI spec
app.use("/spec", express.static(path.join(__dirname, "api.yaml")));

// OpenAPI validator (https://www.npmjs.com/package/express-openapi-validator)
new OpenApiValidator({
  apiSpec,
  validateResponses: true,
})
  .install(app)
  .then(
    () => {
      log.info("OpenAPI Validator loaded.");

      // Routes.
      app.get("/", function (req, res) {
        res.send("Hello World!");
      });

      app.use("/v1", routes.router);

      app.listen(3000, function () {
        log.info("Example app listening on port 3000!");
      });
    },
    (error) => {
      log.error(error);
    }
  );

const mongoose = require("mongoose");
const { log } = require("./config.logger");

const mongoUrl = "mongodb://mongo:27017/template-nodejs-express";

const dbConnect = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Connected to the database!");
    })
    .catch((err) => {
      log.error("Cannot connect to the database!", err);
      process.exit();
    });
};

module.exports = {
  dbConnect,
};

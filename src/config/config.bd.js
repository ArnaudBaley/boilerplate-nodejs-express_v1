const { MongoClient } = require("mongodb");
const { log } = require("./config.logger");

const mongoUrl = "mongodb://mongo:27017/";
const dbName = "template-nodejs-express";

let db;

const connectToDB = async () => {
  MongoClient.connect(mongoUrl)
    .then(function (dbClient) {
      log.info("Connected to the database.");
      db = dbClient.db(dbName);
      return db;
    })
    .catch(function (error) {
      log.error(`Database connection error : ${error}`);
      throw error;
    });
};

const getDBClient = () => {
  return db;
};

module.exports = {
  connectToDB,
  getDBClient,
};

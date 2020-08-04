/**
 * @summary Users Data Access Layer (DAL).
 */
const { log } = require("../../config/config.logger");
const { userModel } = require("./users.model");

const createUser = (user) => {
  userModel
    .save(user)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      log.error(err);
    });
};

module.exports = {
  createUser,
};

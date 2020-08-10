/**
 * @summary Users Data Access Layer (DAL).
 */
const { log } = require("../../config/config.logger");

const createUser = (user) => {
  user
    .save(user)
    .then((data) => {
      log.debug(`création user "${user.username}" OK.`);
      return data;
    })
    .catch((err) => {
      log.error(err);
    });
};

module.exports = {
  createUser,
};

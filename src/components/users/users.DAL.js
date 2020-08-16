/**
 * @summary Users Data Access Layer (DAL).
 */
const { getDBClient } = require("../../config/config.bd");
const { log } = require("../../config/config.logger");

const createUser = async (user) => {
  try {
    const db = getDBClient();
    const userCollection = db.collection("users");

    await userCollection.insert({
      username: user.username,
      createdAt: new Date(),
    });

    log.debug(`création user "${user.username}" OK.`);
  } catch (error) {
    log.error(`Database error : ${error}`);
    throw error;
  }
};

module.exports = {
  createUser,
};

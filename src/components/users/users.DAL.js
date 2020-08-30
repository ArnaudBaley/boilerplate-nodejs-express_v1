/**
 * @summary Users Data Access Layer (DAL).
 */
const Ajv = require("ajv");
const { getDBClient } = require("../../config/config.bd");
const { log } = require("../../config/config.logger");
const userSchema = require("./users.schema.json");

const createUser = async (userData) => {
  const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(userSchema);
  const valid = validate(userData);
  if (!valid) {
    throw new Error(JSON.stringify(validate.errors));
  }

  try {
    const db = getDBClient();
    const userCollection = db.collection("users");

    await userCollection.insert({
      username: userData.userName,
      createdAt: new Date(),
    });

    log.debug(`création user "${userData.userName}" OK.`);
  } catch (error) {
    log.error(`Database error : ${error}`);
    throw error;
  }
};

module.exports = {
  createUser,
};

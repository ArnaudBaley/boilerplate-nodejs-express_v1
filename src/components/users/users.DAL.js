/**
 * @summary Users Data Access Layer (DAL).
 */
const { getDBClient } = require("../../config/config.bd");

const createUser = async (userData) => {
  const db = getDBClient();
  const userCollection = db.collection("users");

  const payload = {
    ...userData,
    createdAt: new Date(),
  };

  await userCollection.insert(payload);

  return payload;
};

module.exports = {
  createUser,
};

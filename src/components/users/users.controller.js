/**
 * @summary Users Controller.
 */
const { log } = require("../../config/config.logger");
const { createUser } = require("./users.DAL");
const { userModel } = require("./users.model");

async function create(req, res) {
  try {
    const user = userModel(req.body);
    createUser(user);
    return res.status(201).json({ result: "OK" });
  } catch (err) {
    log.error(err);
    return res.status(500);
  }
}

module.exports = {
  create,
};

/**
 * @summary Users Controller.
 */
const { log } = require("../../config/config.logger");
const { createUser } = require("./users.DAL");

async function create(req, res) {
  try {
    createUser(req.body);
    return res.status(201).json({ result: "OK" });
  } catch (err) {
    log.error(err);
    return res.status(500);
  }
}

module.exports = {
  create,
};

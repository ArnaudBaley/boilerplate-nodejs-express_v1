/**
 * @summary Users Controller.
 */
const { log } = require("../../config/config.logger");
const { createUserService } = require("./users.service");

async function create(req, res) {
  try {
    const createUserResult = await createUserService(req.body);
    log.debug(`création user "${createUserResult.userName}" OK.`);
    return res.status(201).json({ success: true });
  } catch (err) {
    log.error(err);
    return res.status(500);
  }
}

module.exports = {
  create,
};

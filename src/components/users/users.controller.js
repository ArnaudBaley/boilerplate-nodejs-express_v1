/**
 * @summary Users Controller.
 */

const { log } = require("../../config/config.logger");
const {
  createUserService,
  createRandomUserService,
} = require("./users.service");

async function createUser(req, res) {
  try {
    const createUserResult = await createUserService(req.body);
    log.debug(`création user "${createUserResult.userName}" OK.`);
    return res.status(201).json({ success: true });
  } catch (err) {
    log.error(err);
    return res.status(500);
  }
}

async function createRandomUser(req, res) {
  try {
    const createUserResult = await createRandomUserService();
    log.debug(`création user "${createUserResult.userName}" OK.`);
    return res.status(201).json({ success: true });
  } catch (err) {
    log.error(err);
    return res.status(500);
  }
}

module.exports = {
  createUser,
  createRandomUser,
};

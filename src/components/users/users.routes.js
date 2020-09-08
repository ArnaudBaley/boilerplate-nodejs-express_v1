/**
 * @summary Users Routes.
 */

const express = require("express");
const userController = require("./users.controller");

const router = express.Router();

// anonymous
router.post("/", userController.createUser);
router.post("/random", userController.createRandomUser);

module.exports = {
  router,
};

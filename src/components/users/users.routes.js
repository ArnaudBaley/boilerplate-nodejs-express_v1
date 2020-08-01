/**
 * @summary Users Routes.
 */

const express = require("express");
const userController = require("./users.controller");

const router = express.Router();

// anonymous
router.post("/", userController.create);

module.exports = {
  router,
};

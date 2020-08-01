/**
 * @summary API Routes configuration.
 */

const express = require("express");
const userRoutes = require("../components/users/users.routes");

const router = express.Router();

router.use("/users", userRoutes.router);

module.exports = {
  router,
};

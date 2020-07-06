/**
 * @summary Users Routes.
 */

import { Router } from "express";
import * as UserController from "./users.controller";

const routes = new Router();

// anonymous
routes.post("/", UserController.create);

export default routes;

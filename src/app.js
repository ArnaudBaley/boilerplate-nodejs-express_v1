/**
 * @summary Main app file.
 */

// CommonJS instead of ES Modules (still experimental on NodeJS https://nodejs.org/api/esm.html)
const express = require("express");
import { Router } from 'express';

const app = express();

// eslint-disable-next-line func-names
app.get("/", function (req, res) {
  res.send("Hello World");
});

console.log(`Routes : ${router.stack}`)

// eslint-disable-next-line func-names
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
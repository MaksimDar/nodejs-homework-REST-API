const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const { validateUserBody } = require("../../schemas/validateUserBody");
const schemas = require("../../schemas/user");

router.post(
  "/register",
  validateUserBody(schemas.UserSchema),
  controllers.register
);
module.exports = router;

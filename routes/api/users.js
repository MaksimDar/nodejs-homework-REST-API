const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const { validateUserBody } = require("../../schemas/validateUserBody");
const schemas = require("../../schemas/user");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares");

router.post(
  "/register",
  validateUserBody(schemas.UserSchema),
  controllers.register
);

router.get("/verify/:verificationToken", controllers.verifyEmail);
router.post(
  "/verify",
  validateUserBody(schemas.emailSchema, 404, "missing required field email"),
  controllers.resendEmail
);
router.post("/login", validateUserBody(schemas.UserSchema), controllers.login);
router.post("/logout", auth, controllers.logout);
router.get("/current", auth, controllers.getCurrentUser);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllers.uploadImage
);

module.exports = router;

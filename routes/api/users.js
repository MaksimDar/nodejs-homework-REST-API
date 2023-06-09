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
router.post("/login", validateUserBody(schemas.UserSchema), controllers.login);
router.post("/logout", auth, controllers.logout);
router.get("/current", auth, controllers.getCurrentUser);
router.patch("/:id/image", upload.single("image"), controllers.uploadImage);

module.exports = router;

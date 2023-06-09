const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");
const { validateBody } = require("../../schemas/validateBody");
const { validateFavoriteBody } = require("../../schemas/validateFavoriteBody");
const { upload } = require("../../middlewares");

const schemas = require("../../schemas/contact");
router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", validateBody(schemas.contactSchema), controllers.add);

router.delete("/:contactId", controllers.deleteContact);

router.put(
  "/:contactId",
  validateBody(schemas.contactSchema),
  controllers.update
);

router.patch(
  "/:contactId/favorite",
  validateFavoriteBody(schemas.favoriteSchema),
  controllers.updateFavorite
);

router.patch("/:id/image", upload.single("image"), controllers.uploadImage);

module.exports = router;

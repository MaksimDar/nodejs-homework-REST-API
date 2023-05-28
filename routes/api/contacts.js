const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");
const { validateBody } = require("../../schemas/validateBody");
const { validateFavoriteBody } = require("../../schemas/validateFavoriteBody");

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

module.exports = router;

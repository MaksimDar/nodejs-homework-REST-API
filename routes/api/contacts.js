const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/contacts");
const { validateBody } = require("../../schemas/validateBody");
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

module.exports = router;

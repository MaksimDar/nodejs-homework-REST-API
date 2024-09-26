const { HttpError } = require("../helpers");
const { Contact } = require("../models/contactShema");

const update = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
    { new: true }
  );
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ status: "success", data: updatedContact });
};

module.exports = update;

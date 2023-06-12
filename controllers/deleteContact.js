const { HttpError } = require("../helpers");
const { Contact } = require("../models/contactSchema");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndRemove({ _id: contactId });
  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ status: "success", data: deletedContact });
};

module.exports = deleteContact;

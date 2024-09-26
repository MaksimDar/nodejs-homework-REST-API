const { HttpError } = require("../helpers");
const { Contact } = require("../models/contactShema");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const updatedFavorite = await Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
    { new: true }
  );
  if (!updatedFavorite) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ status: "success", data: updatedFavorite });
};
module.exports = updateFavorite;

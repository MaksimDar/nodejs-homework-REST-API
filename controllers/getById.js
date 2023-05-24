const { HttpError } = require("../helpers");
const { Contact } = require("../models/contactShema");

const getById = async (req, response) => {
  const { contactId } = req.params;
  const foundContactById = await Contact.findOne({ _id: contactId });
  if (!foundContactById) {
    throw HttpError(404, "Not found");
  }
  response.status(200).json({ status: "success", data: foundContactById });
};
module.exports = getById;

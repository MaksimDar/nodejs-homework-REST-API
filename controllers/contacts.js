const { HttpError, controller } = require("../helpers");
// const {
//   listContacts,
//   getContactById,
//   // addContact,
//   removeContact,
//   updateContact,
// } = require("../models/contacts");

const { Contact } = require("../models/contactShema");

const getAll = async (_, response) => {
  const result = await Contact.find();

  response.status(200).json({ status: "success", data: result });
};

const getById = async (req, response) => {
  const { contactId } = req.params;
  const foundContactById = await Contact.findOne({ _id: contactId });
  if (!foundContactById) {
    throw HttpError(404, "Not found");
  }
  response.status(200).json({ status: "success", data: foundContactById });
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json({ status: "success", code: 201, data: result });
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndRemove({ _id: contactId });
  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ status: "success", data: deletedContact });
};

const update = async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body
  );
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ status: "success", data: updatedContact });
};

module.exports = {
  getAll: controller(getAll),
  getById: controller(getById),
  add: controller(add),
  deleteContact: controller(deleteContact),
  //   update: controller(update),
};

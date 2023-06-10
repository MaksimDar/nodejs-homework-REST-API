const { Contact } = require("../models/contactSchema");
const getAll = async (_, response) => {
  const result = await Contact.find();

  response.status(200).json({ status: "success", data: result });
};

module.exports = getAll;

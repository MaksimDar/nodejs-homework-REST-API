const { Contact } = require("../models/contactShema");

const getAll = async (_, response) => {
  const result = await Contact.find();

  response.status(200).json({ status: "success", data: result });
};

module.exports = getAll;

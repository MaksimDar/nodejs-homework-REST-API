const { controller } = require("../helpers");

const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const deleteContact = require("./deleteContact");
const update = require("./update");
const updateFavorite = require("./updateFavorite");
const uploadImage = require("./uploadImage");

module.exports = {
  getAll: controller(getAll),
  getById: controller(getById),
  add: controller(add),
  deleteContact: controller(deleteContact),
  update: controller(update),
  updateFavorite: controller(updateFavorite),
  uploadImage: controller(uploadImage),
};

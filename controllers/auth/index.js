const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const uploadImage = require("./uploadImage");

const { controller } = require("../../helpers");

module.exports = {
  register: controller(register),
  login: controller(login),
  logout: controller(logout),
  getCurrentUser: controller(getCurrentUser),
  uploadImage: controller(uploadImage),
};

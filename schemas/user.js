const Joi = require("joi");

const UserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = { UserSchema, emailSchema };

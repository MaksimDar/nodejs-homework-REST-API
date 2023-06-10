const validateUserBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: "<Помилка від Joi або іншої бібліотеки валідації>",
      });
    }
    next();
  };
  return func;
};
module.exports = { validateUserBody };

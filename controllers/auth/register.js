const { User } = require("../../models/schema");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  if (existingUser) {
    return res.status(409).json({ message: "Email in use" });
  }
  const result = await User.create({ email, password: hashedPassword });

  res
    .status(201)
    .json({ status: "success", code: 201, data: { id: result._id, email } });
};

module.exports = register;

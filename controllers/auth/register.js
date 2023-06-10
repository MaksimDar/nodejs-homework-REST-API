const { User } = require("../../models/schema");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const register = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const avatarURL = gravatar.url(email);
  if (existingUser) {
    return res.status(409).json({ message: "Email in use" });
  }
  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL: avatarURL,
  });

  res.status(201);
  res.status(201).json({
    email: newUser.email,
  });
};

module.exports = register;

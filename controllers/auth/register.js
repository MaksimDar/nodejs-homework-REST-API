const { User } = require("../../models/schema");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { sendMail } = require("../../helpers");
const { v4 } = require("uuid");
const register = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();

  if (existingUser) {
    return res.status(409).json({ message: "Email in use" });
  }
  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL: avatarURL,
    verificationToken,
  });

  await sendMail({
    to: email,
    subject: "Please, confirm your email",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm your email</a>`,
  });
  res.status(201).json({
    email: newUser.email,
  });
};

module.exports = register;

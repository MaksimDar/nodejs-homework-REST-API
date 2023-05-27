const { User } = require("../../models/schema");
// const { HttpError } = require("../../helpers");
const register = async (req, res) => {
  const { email, password } = req.body;

  // Check if the email already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: "Email already in use" });
  }

  // Create the new user
  const newUser = new User({ email, password });
  const result = await newUser.save();

  res.status(201).json({ status: "success", code: 201, data: result });
};

module.exports = register;

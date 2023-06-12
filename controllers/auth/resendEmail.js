const { User } = require("../../models/schema");

const { sendMail } = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  if (user.verify)
    res.status(404).json({ message: "Verification has already been passed" });

  const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" target="_blank" title="Verify Email">Verify Email</a>`,
  };

  await sendMail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendEmail;

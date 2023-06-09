const path = require("path");
const uploadImage = async (req, res) => {
  const { filename } = req.file;

  res.json({ ok: true });
};

module.exports = uploadImage;

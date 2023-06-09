const uploadImage = async (req, res) => {
  console.log("file", req.file);
  res.json({ ok: true });
};

module.exports = uploadImage;

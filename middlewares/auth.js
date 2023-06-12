const jwt = require("jsonwebtoken");
const { User } = require("../models/schema");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer") {
    return res.status(400).json({ message: "Not right type" });
  }

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  // try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = decoded;
  const user = await User.findById(id);

  if (!user || !user.token || user.token !== token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  req.user = user;
  next();
  // } catch (error) {
  //   return res.status(401).json({ message: "Not authorized" });
  // }
};

module.exports = auth;

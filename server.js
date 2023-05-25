const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_HOST, PORT } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(
        "Server running. Use our API link http://localhost:3000/api/contacts/ on port: 3000"
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const jwt = require("jsonwebtoken");
const payload = { id: "123456", name: "Maksym", password: "998776@mail.com" };
const secret = "Very strong password";
const token = jwt.sign(payload, secret);

module.exports = { token };

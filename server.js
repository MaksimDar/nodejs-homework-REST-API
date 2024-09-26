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

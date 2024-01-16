const mongoose = require("mongoose");
require("dotenv").config();
const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
  .then((resp) => {
    console.log(
      mongoose.connection.readyState,
      "MongoDB Connection Successfully"
    );
  })
  .catch((error) => {
    console.log(error, "===mongodb connection error");
    process.exit(1);
  });
module.exports = { mongoose };

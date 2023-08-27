const mongoose = require("mongoose");

const connectDB = (url) =>
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the DB..."))
    .catch((err) => console.log(err));

module.exports = connectDB;

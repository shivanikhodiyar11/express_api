const mongoose = require("mongoose");
const path = "mongodb://localhost:27017/express";
mongoose
  .connect(path)
  .then(() => console.log("Connected to monog server!"))
  .catch((err) => console.error(err));

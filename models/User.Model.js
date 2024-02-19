const joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /.+\@.+\..+/,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports.validationRegister = (user) => {
  const schema = joi.object({
    email: joi.string().email().trim().required(),
    first_name: joi.string().min(5).max(20).required().trim(),
    last_name: joi.string().min(5).max(20).required().trim(),
  });
  return schema.validate(user);
};
module.exports.User = mongoose.model("users", userSchema);

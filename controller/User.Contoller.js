const { User, validationRegister } = require("../models/User.Model");

const getData = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) return res.staus(400).send("Users not availablel");
    res.status(200).send(users);
    return;
  } catch (error) {
    return next();
  }
};

const addData = async (req, res, next) => {
  const { error, value } = validationRegister(req.body);
  if (error) return res.status(400).send(error);
  try {
    let user = await User.findOne({ email: value.email });
    if (user) return res.status(400).send("Email already exist!");

    const { isApproved = false } = res.locals;
    const newUser = new User({ ...value, isApproved });
    await newUser.save();

    res.status(200).send("User added successfully!");
    return;
  } catch (error) {
    return next();
  }
};

const updateData = async (req, res, next) => {
  const { id } = req.params;
  const { error, value } = validationRegister(req.body);
  if (error) return res.status(400).send("Please enter valid data");
  try {
    const user = await User.findByIdAndUpdate(id, value);
    if (!user) return res.status(404).send("User Not found!");
    res.status(200).send("User update successfully!");
    return;
  } catch (error) {
    return next();
  }
};

const deleteData = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).send("User Not found!");
    res.status(200).send("User Deleted successfully!");
    return;
  } catch (error) {
    return next();
  }
};
module.exports = { getData, addData, updateData, deleteData };

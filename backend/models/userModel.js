const mongoose = require("../connection");
const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: new Date() },
  isAdmin : { type: Boolean, default: false },
});

const model = mongoose.model("users", schema);

module.exports = model;
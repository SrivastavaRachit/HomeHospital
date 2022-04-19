const mongoose = require("../connection");
const schema = new mongoose.Schema({
  name: String,
  monthlyprice: String,
  description: String,
  category: String,
  termscondition: String,
  createdAt: { type: Date, default: new Date() },
  isAdmin : { type: Boolean, default: false },
});

const model = mongoose.model("users", schema);

module.exports = model;
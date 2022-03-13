const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  rentable: Boolean,
  thumbnail: String,
  createdAt: { type: Date, default: new Date() },
  tags: Array,
});

const model = mongoose.model("equipment", schema);

module.exports = model;

const mongoose = require("../connection");
const schema = new mongoose.Schema({
title: String,
description: String,
price: String,
rentable: Boolean,
createdAt: { type: Date, default: new Date() },
taxs: Array, 
});

const model = mongoose.model("equipment", schema);

module.exports = model;
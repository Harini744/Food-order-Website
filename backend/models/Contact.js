const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  queryType: { type: String, required: true },
  comments: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);

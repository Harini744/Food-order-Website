// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      description: String,
      rating: Number,
      img: String,
    }
  ],
  totalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);

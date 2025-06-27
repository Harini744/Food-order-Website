const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// GET /api/cart - fetch all cart data
router.get("/", (req, res) => {
  Cart.find()
    .then((carts) => {
      if (carts.length === 0) {
        return res.status(404).json({ message: "No carts found" });
      }
      res.json(carts);
    })
    .catch((error) => {
      console.error("❌ Failed to fetch carts:", error);
      res.status(500).json({ error: "Failed to fetch carts ❌" });
    });
});


// POST /api/cart - save new cart data
router.post("/", async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json({ message: "✅ Cart saved to MongoDB!" });
  } catch (error) {
    console.error("❌ Failed to save cart:", error);
    res.status(400).json({ error: "Failed to save cart ❌" });
  }
});

module.exports = router;

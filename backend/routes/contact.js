// routes/contact.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define a schema for contact submissions
const contactSchema = new mongoose.Schema({
  mobile: String,
  email: String,
  queryType: String,
  comments: String,
});

const Contact = mongoose.model("Contact", contactSchema);
router.get("/", (req, res) => {
  res.send("📬 Contact route is working!");
});

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "📬 Contact form submitted successfully" });
  } catch (error) {
    res.status(400).json({ error: "❌ Failed to submit contact form" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Otp = require("../models/Otp");
const sendOtpMail = require("../utils/sendOtpMail");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

router.post("/send", async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  try {
    await Otp.deleteMany({ email });
    await Otp.create({ email, otp, expiresAt });

    await sendOtpMail(email, otp);
    res.json({ message: "OTP sent to email ✅" });
  } catch (err) {
    console.error("❌ Send OTP failed:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/verify", async (req, res) => {
  const { email, otp } = req.body;
  const record = await Otp.findOne({ email });

  if (!record) return res.status(404).json({ error: "OTP not found" });
  if (record.otp !== otp.toString()) return res.status(400).json({ error: "Invalid OTP" });
  if (record.expiresAt < new Date()) return res.status(400).json({ error: "OTP expired" });

  await Otp.deleteMany({ email });
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "OTP verified ✅", token });
});

module.exports = router;

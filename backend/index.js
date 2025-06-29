require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cartRoutes = require("./routes/cart");
const otpRoutes = require("./routes/otp");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors({
  origin:["https://food-order-website-backend-qsr5.onrender.com"],
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.use("/api/cart", cartRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

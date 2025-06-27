const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendOtpMail(email, otp) {
  try {
    await transporter.sendMail({
      from: `"Your App Name" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is <b>${otp}</b></h2><p>This OTP expires in 5 minutes.</p>`,
    });
    console.log("✅ Email sent to:", email);
  } catch (error) {
    console.error("❌ Failed to send OTP Email:", error);
    throw error;
  }
}

module.exports = sendOtpMail;

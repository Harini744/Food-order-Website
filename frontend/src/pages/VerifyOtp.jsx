import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { toast } from "react-toastify";
const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("email");

  const handleVerify = async () => {
    try {
      const res = await axios.post("https://food-order-website-backend-qsr5.onrender.com/api/otp/verify", {
        email,
        otp, // remove accidental whitespace
      });

      toast.success("✅ OTP Verified!");
      console.log("Token:", res.data.token);

      // Save token and redirect
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      toast.error("❌ Invalid or expired OTP");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="card p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "400px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            color: "black",
          }}
        >
          <h2 className="mb-4 text-center">Enter the OTP </h2>
          <input
            className="form-control mb-3"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button className="btn btn-success w-100" onClick={handleVerify}>
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;

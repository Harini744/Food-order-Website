import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");




  const navigate = useNavigate();
  

  const handleSendOTP = async () => {
    try {
      await axios.post("https://food-order-website-backend-qsr5.onrender.com/api/otp/send", { email });
      toast.success("OTP sent to your email 📩");
      localStorage.setItem("email", email); // Optional: store for next step
      navigate("/verify"); // 👉 Redirect to VerifyOtp page
    } catch (error) {
      console.error("Send OTP error:", error);
      toast.error("❌ Failed to send OTP");
    }
  };

  

  return (
    <div className="container d-flex align-items-center justify-content-center">
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
        <h3 className="text-center mb-3">Login with Email</h3>
        <input
          type="email"
          className="form-control text-center mb-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleSendOTP}>
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default Login;

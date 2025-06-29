import React, { useState } from 'react';
import Navbar from './navbar';
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    queryType: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://food-order-website-backend-qsr5.onrender.com", formData);

      console.log("✅ Response:", response.data);
      alert("✅ Thank you! We’ll get back to you soon.");

      setFormData({
        mobile: '',
        email: '',
        queryType: '',
        comments: '',
      });
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("❌ Something went wrong while submitting your form.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          backgroundImage:
            "url('https://images.pexels.com/photos/30179490/pexels-photo-30179490.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="p-5 rounded shadow"
          style={{
            width: '100%',
            maxWidth: '500px',
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            color: "black",
          }}
        >
          <h2 className="text-center mb-4">Contact Us</h2>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Query Type</label>
            <select
              className="form-select"
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="booking">Booking</option>
              <option value="feedback">Feedback</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Comments</label>
            <textarea
              name="comments"
              className="form-control"
              rows="4"
              placeholder="Write your message..."
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

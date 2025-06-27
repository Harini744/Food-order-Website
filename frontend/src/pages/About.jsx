import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/31921731/pexels-photo-31921731.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          className="container text-white"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "800px",
          }}
        >
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-12 text-center">
              <h1 className="mb-4">About Aroma</h1>
              <p>
                At <strong>Aroma</strong>, we don’t just cook—we craft experiences. Every dish is a tribute to tradition
                and innovation, blending locally sourced ingredients with global flavors.
              </p>
              <p>
                Our chefs pour passion into every plate, and our cozy ambiance makes each visit feel like home.
                Whether you're here for a quiet dinner, a family feast, or a celebration, Aroma is where
                flavor meets heart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

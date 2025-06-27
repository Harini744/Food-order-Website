import React from "react";
import Navbar from "./navbar";
import Login from "./login";

const Home = () => {
  return (
    <>
      <Navbar />

      

      {/* Fullscreen background section */}
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: "100vh", // subtract navbar+heading height
          backgroundImage:
            "url('https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Login />
      </div>
    </>
  );
};

export default Home;

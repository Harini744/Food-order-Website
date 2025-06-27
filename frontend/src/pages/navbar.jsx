import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm bg-transparent"
      style={{ width: '100%',
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        color: "black",
        
      }}
      
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-black" to="/">
          Aroma
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-black" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/app">
                Foods
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-black" to="/price">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   

  );
};

export default Navbar;

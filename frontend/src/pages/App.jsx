import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function App() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched posts:", data);
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="row justify-content-center m-3"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage:
            "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <div
              className="card m-3 text-white bg-dark bg-opacity-75"
              style={{
                width: "18rem",
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                cursor: "pointer",
              }}
              onClick={() => navigate("/post/" + post.id)}
            >
              <img
                src={post.img}
                className="card-img-top img-fluid"
                alt={`Image of ${post.name}`}
                style={{ height: "250px", objectFit: "cover" }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">Rating: {post.rating} ⭐</p>
                <p className="card-text">₹{post.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

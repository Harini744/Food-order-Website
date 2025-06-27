import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import { useCart } from './CartContext';
import { toast } from "react-toastify";
 // ⬅️ Import the CartContext

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart(); // ⬅️ Access addToCart from context

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  const handleAddToCart = () => {
    if (post) {
      addToCart(post);
      toast.success("Order placed") // ⬅️ Add post to cart
      
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center mt-5">
        {post && (
          <div
            className="card shadow-lg"
            style={{
              width: '100%',
              maxWidth: '800px',
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              color: "black"
            }}
          >
            <img
              src={post.img}
              className="card-img-top mt-2"
              alt={post.name}
              style={{ height: '400px', objectFit: 'contain' }}
            />
            <div className="card-body text-center">
              <h2 className="card-title">{post.name}</h2>
              <p className="card-text">{post.description}</p>
              <p className="card-text fw-semibold">Rating: {post.rating} ⭐</p>
              <p className="card-text fw-semibold">Price: ₹{post.price}</p>
              <button
                className="btn btn-success btn-sm"
                onClick={handleAddToCart}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Post;

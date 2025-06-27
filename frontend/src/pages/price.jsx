import React from 'react';
import Navbar from './navbar';
import { useCart } from './CartContext';
import axios from 'axios';
import { toast } from "react-toastify";

const Price = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

  const Submit = async () => {
    try {
     await axios.post("http://localhost:5000/api/cart", {
        items: cartItems,
        totalPrice: total,
      });

      toast.success("🎉 Order Confirmed Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });

      // Optional: clearCart(); or redirect
    } catch (error) {
      toast.error("❌ Failed to place order", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error("Error saving cart:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          margin: 0,
          padding: "40px 10px",
          backgroundImage:
            "url('https://images.pexels.com/photos/7195850/pexels-photo-7195850.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white">🛒 Your Cart</h1>
        <p className="text-white">Here are the items you ordered:</p>

        {cartItems.length > 0 ? (
          <div className="table-responsive w-100">
            <table className="table table-striped table-bordered table-hover bg-white">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.rating} ⭐</td>
                    <td>₹{item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total</td>
                  <td className="fw-bold">₹{total}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-end mt-3">
              <button className="btn btn-success" onClick={Submit}>
                Confirm Order
              </button>
            </div>
          </div>
        ) : (
          <p className="text-light">Your cart is empty. Go order something!</p>
        )}
      </div>
    </>
  );
};

export default Price;

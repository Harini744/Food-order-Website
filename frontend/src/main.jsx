import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/login";
import Home from "./pages/home"; // ✅ Make sure this is correct
import App from "./pages/App";
import About from "./pages/About";
import Contact from "./pages/contact";
import Price from "./pages/price";
import Post from "./pages/post";
import VerifyOtp from "./pages/VerifyOtp";
 
import { CartProvider } from "./pages/CartContext";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> }, 
  { path: "/", element: <Home /> }, // ✅ THIS IS WHAT YOU NEED
  { path: "/app", element: <App /> },
   { path: "/verify", element: <VerifyOtp /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/price", element: <Price /> },
  { path: "/post/:id", element: <Post /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  </React.StrictMode>
);

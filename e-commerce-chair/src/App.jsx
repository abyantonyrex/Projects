// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WishList from "./pages/WishList";

export default function App() {
  return (
    <Routes>
      {/* Layout route wraps all pages with Navbar + Footer */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />               {/* / */}
        <Route path="/about-us" element={<About />} />         {/* /about */}
        <Route path="/contact-us" element={<ContactForm />} /> {/* /contact */}
        <Route path="/products" element={<ProductCard />} />{/* /products */}
        <Route path="/cart" element={<Cart/>} />           {/* /cart */}
        <Route path="/wishlist" element={<WishList/>} /> {/* /wishlist */}
        
        {/* Redirects */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="p-6">404 Not Found</h1>} />
      </Route>
        <Route path="/register" element={<Register />} />   {/* /register */}
        <Route path="/login" element={<Login />} />         {/* /login */}
    </Routes>
  );
}

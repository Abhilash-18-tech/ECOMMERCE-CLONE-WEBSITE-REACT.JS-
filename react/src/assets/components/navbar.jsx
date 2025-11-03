import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={{ backgroundColor: "#007bff", color: "white", padding: "10px" }}>
      <h2 style={{ display: "inline" }}>🛒 SimpleShop</h2>
      <div style={{ float: "right" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/cart" style={{ color: "white", marginRight: "15px" }}>
          Cart ({cartCount})
        </Link>
        <Link to="/checkout" style={{ color: "white" }}>Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;

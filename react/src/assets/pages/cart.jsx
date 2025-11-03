import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0); 

  if (cartItems.length === 0)
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>🛒 Your cart is empty</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout" style={{ marginLeft: "20px" }}>
        Go to Checkout
      </Link>
    </div>
  );
}

export default Cart;

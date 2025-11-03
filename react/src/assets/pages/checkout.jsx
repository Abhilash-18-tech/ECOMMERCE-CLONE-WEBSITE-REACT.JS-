import React from "react";
function Checkout({ cartItems, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
    alert("✅ Order placed successfully!");
    clearCart();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Checkout</h1>
      <p>Total amount: ₹{total}</p>
      <button onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
}

export default Checkout;

import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function Home({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ Products</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid gray", padding: "10px", width: "180px" }}>
            <img src={p.image} alt={p.name} width="180" height="180" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
            <br />
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

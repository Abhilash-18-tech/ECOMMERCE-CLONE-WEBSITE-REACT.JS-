import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="200" />
      <p>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;

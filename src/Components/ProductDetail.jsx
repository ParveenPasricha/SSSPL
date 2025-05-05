import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/Products"; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Back
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-contain mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">
          {Array.isArray(product.name) ? product.name.join("") : product.name}
        </h1>
        <p className="text-lg text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

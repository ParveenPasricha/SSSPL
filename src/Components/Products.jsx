import React, { useEffect, useState } from "react";
import Bars from "react-loading-icons/dist/esm/components/bars";
import { Link } from "react-router-dom";
import products from "../data/Products";

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="bg-black z-10 w-full h-screen flex justify-center items-center">
        <Bars className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div
        className="fixed inset-0 -z-10 bg-repeat-y bg-cover opacity-50"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-black-600 mb-8">
        Solar Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
          <div
            key={product.id}
            className="bg-white hover:scale-110 hover:opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-contain rounded-lg mb-4 bg-gray-100"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {Array.isArray(product.name)
                ? product.name.join("")
                : product.name}
            </h3>
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

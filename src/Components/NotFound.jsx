// src/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-[#cfe5f3] flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
        <img
          src="/images/404.png"
          alt="404"
          className="w-full md:w-1/2 object-contain mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold text-blue-800 mb-2">404</h1>
          <p className="text-xl text-gray-700 mb-4">
            Something's missing. This page is missing or you assembled the link
            incorrectly.
          </p>
          <Link
            to="/"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
          >
            ⬅ Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

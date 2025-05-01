import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const routes = {
    Home: '/',
    About: '/about',
    Products: '/products',
    'Price List': '/price-list',
    Clientele: '/clientele',
    Inquiry: '/inquiry',
    'Contact Us': '/contact',
    'Photo Gallery': '/gallery',
    Testimonial: '/testimonial',
    // Admin: '/admin',
  };

  return (
    <header className="bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-lg px-6 md:px-12 py-5 rounded-lg border border-blue-200">
      <div className="flex justify-between items-center mb-4">
        <Link className="bg-blue-600 text-white text-bold p-2 rounded" to="https://www.susolartech.com">
          Go to Old Version Website
        </Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
      <h1 className="text-5xl md:text-5xl flex items-center justify-center font-extrabold text-blue-700 mb-4 tracking-wide">
        {/* <img src='https://i.ibb.co/fVdFztzb/logo.jpg' className='w-40 '/> */}
        <span className="text-blue-500 text-6xl" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Su Solartech Systems (P) Ltd.</span>
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-700 font-medium mb-6 leading-relaxed">
        <span className="font-semibold text-xl ">Manufacturers & Dealers of:</span><br />
        Solar PV Systems, Thermal Systems, SWEG, Energy Saving & Security Devices, etc.
      </p>
      
      <nav className="flex flex-wrap justify-center gap-3 md:gap-6">
        {Object.keys(routes).map((label, index) => (
          <button
            key={index}
            onClick={() => navigate(routes[label])}
            className="bg-white cursor-pointer hover:text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

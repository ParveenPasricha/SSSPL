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
    <header className="bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-lg px-4 sm:px-6 md:px-12 py-5 rounded-lg border border-blue-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
        <Link
          className="bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm sm:text-base text-center"
          to="https://www.susolartech.com"
        >
          Go to Old Version Website
        </Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
          >
            Logout
          </button>
        )}
      </div>

      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-wide leading-snug">
        <span className="text-blue-500" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          Su Solartech Systems (P) Ltd.
        </span>
      </h1>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 font-medium mb-6 leading-relaxed px-2">
        <span className="font-semibold text-base sm:text-lg">Manufacturers & Dealers of:</span><br />
        Solar PV Systems, Thermal Systems, SWEG, Energy Saving & Security Devices, etc.
      </p>

      <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2">
        {Object.keys(routes).map((label, index) => (
          <button
            key={index}
            onClick={() => navigate(routes[label])}
            className="bg-white text-sm sm:text-base cursor-pointer hover:text-white font-semibold px-4 sm:px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

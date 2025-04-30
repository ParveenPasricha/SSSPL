import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inquiry from './Inquiry';

const Header = () => {
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
    'Testimonial': '/testimonial'
  };

  return (
    <header className="bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-lg px-6 md:px-12 py-5 rounded-lg border border-blue-200">
      {/* <Link className='bg-blue-600 text-white text-bold p-2' onClick={()=>{'/https://www.susolartech.com/'}}>Go to Old Version of Website</Link> */}
      <Link className='bg-blue-600 text-white text-bold p-2' to="https://www.susolartech.com">Go to Old Version Website</Link>
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-wide">
        Welcome to <span className="text-blue-500">Su Solartech Systems (P) Ltd.</span>
        {/* <img className='w-full' src='https://www.susolartech.com/images/header.jpg'/> */}
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-700 font-medium mb-6 leading-relaxed">
        <span className="font-semibold text-xl">Manufacturers & Dealers of:</span><br />
        Solar PV Systems, Thermal Systems, SWEG, Energy Saving & Security Devices, etc.
      </p>
      
      <nav className="flex flex-wrap justify-center gap-3 md:gap-6">
        {Object.keys(routes).map((label, index) => (
          <button
            key={index}
            onClick={() => navigate(routes[label])}
            className="bg-white cursor-pointer  hover:text-black font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

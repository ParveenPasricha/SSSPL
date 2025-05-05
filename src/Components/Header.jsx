import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routes = {
    Home: '/',
    About: '/about',
    Products: '/products',
    'Price List': '/price-list',
    Clientele: '/clientele',
    Inquiry: '/inquiry',
    'Contact Us': '/contact',
    'Photo Gallery': '/gallery',
    Testimonials: '/testimonial',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md px-4 sm:px-6 md:px-12 py-4">
      {/* Top Bar for Mobile */}
      <div className="flex justify-between items-center sm:mb-4">
        <Link
          className="sm:hidden text-blue-600 font-bold text-sm px-3 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
          to="https://www.susolartech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Old Website
        </Link>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Header Banner - Only when not scrolled */}
      {!scrolled && (
        <div className="relative text-center mb-6">
          <img
            src="https://amplussolar.com/blog/wp-content/uploads/2024/11/news-header.webp"
            alt="Header Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
            <span style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Su Solartech Systems (P) Ltd.
            </span>
          </h1>
          <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            <span className="font-semibold">Manufacturers & Dealers of:</span><br />
            Solar PV Systems, Thermal Systems, SWEG, Energy Saving & Security Devices, etc.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col sm:flex sm:flex-row flex-wrap bg-transparent justify-center items-center gap-2 sm:gap-4 transition-all`}
      >
        {Object.entries(routes).map(([label, path], index) => (
          <button
            key={index}
            onClick={() => {
              navigate(path);
              setMenuOpen(false);
            }}
            className="bg-white text-sm sm:text-base hover:text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-600 transition-all duration-200"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

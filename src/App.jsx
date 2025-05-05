import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import ImageSlider from './Components/ImageSlider';
import Products from './Components/Products';
import PriceList from './Components/PriceList';
import Clientele from './Components/Clientele';
import PhotoGallery from './Components/PhotoGallery';
import Contact from './Components/Contact';
import Inquiry from './Components/Inquiry';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Media from './Components/Media';
import ScrollToTop from './Components/ScrollToTop';
import ProductDetail from './Components/ProductDetail';
// import Admin from './Components/Admin';

const App = () => {

  useEffect(() => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><ImageSlider/><Media/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        {/* <Route path="/admin" element={<Admin setIsLoggedIn={setIsLoggedIn} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

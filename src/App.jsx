import React from 'react';
import Header from './Components/Header'; // corrected import
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider';
import Products from './Components/Products';
import PriceList from './Components/PriceList';
import Clientele from './Components/Clientele';
import PhotoGallery from './Components/PhotoGallery';
import Contact from './Components/Contact';
import Inquiry from './Components/Inquiry';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Always visible on all pages */}
      <Routes>
        <Route path="/" element={<><ImageSlider/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/gallery" element={<PhotoGallery />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

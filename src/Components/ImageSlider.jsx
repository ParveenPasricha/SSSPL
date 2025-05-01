import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-blue-800 bg-opacity-50 text-white p-3 rounded-full z-10"
  >
    <img src='https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Red_Arrow_Head_Right-2-512.png' className='w-8 h-8 rotate-180' />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-gradient-to-r from-blue-600 bg-opacity-50 text-white p-3 rounded-full z-10"
  >
    <img src='https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Red_Arrow_Head_Right-2-512.png' className='w-8 h-8 hover:none' />
  </button>
);

const ImageSlider = () => {
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipOFZaeM_CkthgD-BSrLqJBv4FiyyMZ4dKSy1Ea4=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/p/AF1QipO7rPB6LaKjx0JaANpSQS7M83nl3LWRbAfHpaDQ=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/p/AF1QipPI9XBBbhG_qceD47NEGv6rzBLVaP0NLu0B8_54=s680-w680-h510-rw",
    'https://www.susolartech.com/images1/15%20kw%20spp%20installed%20at%20sutlej%20public%20school,%20banga%20(pb)%20pic1.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Helmet>
        <title>Solar Water Heating System - SSSPL</title>
        <meta
          name="description"
          content="Efficient solar water heating systems designed for homes and businesses. SSSPL is an MNRE-approved, ISO-certified solar energy products manufacturer based in India."
        />
        <meta
          name="keywords"
          content="solar water heating, solar energy India, SSSPL, MNRE solar products, renewable energy solutions"
        />
      </Helmet>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-screen h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

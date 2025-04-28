import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    'https://www.susolartech.com/images1/jassa%20singh.png',
    'https://i.ytimg.com/vi/WHvM_Q8Ue9I/mqdefault.jpg',
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
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

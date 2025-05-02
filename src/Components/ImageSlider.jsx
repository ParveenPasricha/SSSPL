import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
  >
    <img src='https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Red_Arrow_Head_Right-2-512.png' className='w-8 h-8 rotate-180' />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
  >
    <img src='https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Red_Arrow_Head_Right-2-512.png' className='w-8 h-8 hover:none' />
  </button>
);

const ImageSlider = () => {
  const images = [
    "https://media.istockphoto.com/id/1252816967/photo/solar-panel-green-energy-efficiency-for-house-roof.jpg?s=612x612&w=0&k=20&c=-v5mQB2kBhSG-HqWtDWCCCyE46aKOKQ34P52zzam8wA=",
    'https://www.susolartech.com/images1/15%20kw%20spp%20installed%20at%20sutlej%20public%20school,%20banga%20(pb)%20pic1.png',
    'https://media.istockphoto.com/id/2137937205/photo/indian-worker-installing-solar-panels-on-roof-of-house-maintenance-of-photovoltaic-panel.jpg?s=612x612&w=0&k=20&c=EqdLVCyE0Jqa0kfTvdAK0nxFyurBLmRcpuliphRosdw=',
    'https://static.bangkokpost.com/media/content/20240504/c1_2786670_240504112129_700.jpg',
    ''
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
          <div key={index} className='p-20'>
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

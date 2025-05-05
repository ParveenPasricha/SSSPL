import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl"
  >
    ◀
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl"
  >
    ▶
  </button>
);

const highlightText = (text, highlights) => {
  let highlighted = text;
  highlights.forEach((hl) => {
    const regex = new RegExp(`(${hl})`, "gi");
    highlighted = highlighted.replace(
      regex,
      '<span class="text-yellow-300 font-semibold">$1</span>'
    );
  });
  return highlighted;
};

const ImageSlider = () => {
  const slides = [
    {
      type: "image",
      title: "Chengmari Tea Estate",
      subtitle:
        "Asia’s Largest Tea Estate with Innovative Solar Power Technology",
      points: [
        "Su Solartech Power Renewable commissions 1040 kW Bifacial Solar System",
        "First-ever on-ground bifacial modules in eastern India",
        "Completed in 6 months despite 3.5-month monsoon",
        "Around 1,900 modules used",
        "Generates 1.5 MUs of energy annually",
      ],
      highlights: [
        1040,
        "on-ground bifacial modules",
        "3.5-month",
        "1,900",
        "1.5 MUs",
      ],
      media: "https://static.bangkokpost.com/media/content/20240504/c1_2786670_240504112129_700.jpg",
    },
    {
      type: "image",
      title: "Solar Panel Installation",
      subtitle: "Indian worker installing solar panels on roof",
      points: [
        "Efficient installation methods",
        "Ensuring safety and durability",
        "Renewable energy for homes",
      ],
      highlights: ["installation", "safety", "renewable"],
      media:
        "https://media.istockphoto.com/id/2137937205/photo/indian-worker-installing-solar-panels-on-roof-of-house-maintenance-of-photovoltaic-panel.jpg?s=612x612&w=0&k=20&c=EqdLVCyE0Jqa0kfTvdAK0nxFyurBLmRcpuliphRosdw=",
    },
    {
      type: "image",
      title: "Bangkok Solar Update",
      subtitle: "New solar farm brings innovation to Thailand",
      points: [
        "Advanced panel designs",
        "High efficiency output",
        "International collaboration",
      ],
      highlights: ["Advanced", "efficiency", "collaboration"],
      media:
        "https://i.ibb.co/n8kVgX66/Whats-App-Image-2023-09-21-at-2-45-17-PM-1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full">
      {/* 🔹 Always-show Intro Video */}
      <div className="w-full h-[100vh] overflow-hidden">
        <video
          src="https://video.wixstatic.com/video/bc7878_15837e43d35e4ef09a03a6ba4e3b5ce4/1080p/mp4/file.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* 🔹 Slider Section */}
      <div className="w-full h-screen bg-white overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-row flex-wrap h-screen w-full"
            >
              {/* Left Side: Text */}
              <div className="flex h-screen">
                {/* Left Side: Text */}
                <div className="w-full md:w-1/2 h-full bg-blue-800 text-white flex flex-col justify-center p-8 md:p-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-md md:text-lg font-semibold mb-6">
                    {slide.subtitle}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base">
                    {slide.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400">✔</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlightText(point, slide.highlights),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Media */}
                <div className="w-full md:w-1/2 h-full">
                  {slide.type === "image" ? (
                    <img
                      src={slide.media}
                      alt="Slide"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={slide.media}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

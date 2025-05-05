import React from "react";

const HeroHeader = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Solar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Header content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Su Solartech Systems (P) Ltd.
        </h1>

        <p className="text-lg sm:text-xl mt-4 italic">
          Powering a Sustainable Future
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

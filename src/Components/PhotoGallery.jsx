import React from 'react';

const images = [
  'https://www.susolartech.com/EXHIBITION-1.jpg',
  'https://www.susolartech.com/EXHIBITION-2.jpg',
  'https://www.susolartech.com/EXHIBITION-3.jpg',
  'https://www.susolartech.com/EXHIBITION-4.jpg',
  'https://www.susolartech.com/EXHIBITION-5.jpg',
  'https://www.susolartech.com/EXHIBITION-6.jpg',
];

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={src}
              alt={`SolarTech Image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

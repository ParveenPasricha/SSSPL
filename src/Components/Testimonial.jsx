import React from 'react';

const Testimonial = () => {
  const videoIds = [
    "erVyIbY7b9s",
    "izwvjUlUagU",
    "YngZmiHkTbk",
    "ZpzVeIqcGWo",
    "gfeiU7hYuBo",
    "Sdk6Cn5XbBc",
    "6Tg0-9G7SRM",
    "BPrm9QtEdrY",
  ];

  return (
    <div className="p-4">
      <h1 className="font-bold text-center p-3 bg-blue-600 text-white rounded mb-6 w-full sm:w-fit mx-auto">
        Welcome to Customer Review Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {videoIds.map((videoId, index) => (
          <iframe
            key={index}
            className="w-full max-w-sm h-48 sm:h-52 rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`Customer Review ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

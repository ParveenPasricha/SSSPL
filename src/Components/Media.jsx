import React from 'react';

const mediaItems = [
  {
    img: 'https://www.tatapowersolar.com/wp-content/uploads/2023/10/03115532/coverage-report-03-10-2023.jpg',
    date: 'April 23, 2025',
    title: 'Tata Power Renewable ties up with Tata Motors',
    desc: 'Ties up to set up 131 MW Wind-Solar hybrid Project',
  },
  {
    img: 'https://www.livehindustan.com/lh-img/uploadimage/library/2019/07/01/16_9/16_9_1/_1561921668.jpg',
    date: 'March 3, 2025',
    title: 'TPREL developed Solar Project in Bikaner',
    desc: 'Bhanipura Solar Power Project successfully launched in Rajasthan.',
  },
  {
    img: 'https://static.langimg.com/photo/imgsize-67356,msid-108190086/navbharat-times.jpg',
    date: 'March 7, 2025',
    title: 'MoU with Andhra Govt',
    desc: 'Agreement to develop 7000 MW of renewable energy projects.',
  },
  {
    img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/19/full/1734605315-0461.jpg',
    date: 'February 13, 2025',
    title: 'Floating Solar Power in Madhya Pradesh',
    desc: 'Largest floating solar project commissioned in Omkareshwar.',
  },
];

const Media = () => {
  return (
    <div className="bg-black py-10  px-6 md:px-16">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">MEDIA</h1>
      <h3 className="text-center text-white mb-10">
        Here are all the latest happenings from the world of Su Solartech Systems Private Limited
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-red-500 font-semibold">{item.date}</p>
              <h4 className="text-lg font-bold mt-2">{item.title}</h4>
              <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;

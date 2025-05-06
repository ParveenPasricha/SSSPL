import React from 'react';
import { motion } from 'framer-motion';

const mediaItems = [
  {
    img: 'https://www.shutterstock.com/image-photo/solar-panels-on-sky-background-260nw-1696361656.jpg',
    date: 'April 23, 2025',
    title: 'Su Solartech Power Renewable',
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
  },{
    img: 'https://www.shutterstock.com/image-photo/solar-panels-on-sky-background-260nw-1696361656.jpg',
    date: 'April 23, 2025',
    title: 'Su Solartech Power Renewable',
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
  }
];

const Media = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-12 px-6 md:px-16">
      <h1 className="text-4xl font-extrabold text-center text-white mb-3 tracking-wide">
        MEDIA
      </h1>
      <h3 className="text-center text-white mb-12 text-lg font-medium">
        Here are all the latest happenings from the world of Su Solartech Systems Private Limited
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:ring-4 hover:ring-blue-300/40"
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-5">
              <p className="text-sm text-blue-600 font-semibold">{item.date}</p>
              <h4 className="text-xl font-bold mt-2 text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Media;

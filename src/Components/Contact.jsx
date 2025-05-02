import { FaPhoneAlt, FaMobileAlt, FaEnvelopeOpenText } from "react-icons/fa";
import React from "react";
import { FaGlobeAmericas, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-6">
      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-6xl">
        
        {/* Left Side: Company Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-6 animate-fade-in-down">
            Su Solartech Systems (P) Ltd.
          </h1>

          <div className="space-y-3 text-gray-700 text-lg">
            <p><strong>Unit I:</strong> 739, Industrial Area, Phase - II, Chandigarh - 160002</p>
            <p><strong>Unit II:</strong> 481, Industrial Area, Phase - I, Panchkula - 134113</p>
          </div>

          <div className="flex gap-4 mt-6">
            {/* Social Media Icons */}
            {[
              { icon: <FaFacebookF />, bg: 'bg-blue-600', link: 'http://facebook.com/susolartechsystems/' },
              { icon: <FaInstagram />, bg: 'bg-pink-500', link: 'https://instagram.com/susolartechsystems/' },
              { icon: <FaTwitter />, bg: 'bg-black', link: 'https://x.com/susolartechsystems/' },  
              { icon: <FaLinkedinIn />, bg: 'bg-blue-700', link: 'https://in.linkedin.com/in/harinder-jain-a15b6720' },
              { icon: <FaYoutube />, bg: 'bg-red-600', link: 'https://www.youtube.com/@SuSolartechSystemsPvtLtd' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${item.bg} hover:scale-110 transform transition`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Options */}
        <div className="flex flex-col justify-center items-start space-y-8">
          {[
            { title: 'Phone', info: '+91-172-2642874', icon: <FaPhoneAlt />, color: 'bg-blue-500', hover: 'hover:bg-blue-700' },
            { title: 'Mobile', info: '+91-9878090103, 9878090104, 9878090107, 9876542600', icon: <FaMobileAlt />, color: 'bg-green-500', hover: 'hover:bg-green-700' },
            { title: 'Email', info: 'solartech@susolartech.com', icon: <FaEnvelopeOpenText />, color: 'bg-purple-500', hover: 'hover:bg-purple-700', link: 'mailto:solartech@susolartech.com' },
            { title: 'Website', info: 'www.susolartech.com', icon: <FaGlobeAmericas />, color: 'bg-red-500', hover: 'hover:bg-red-700', link: 'http://www.susolartech.com' }
          ].map((contact, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-pointer">
              <div className={`p-4 ${contact.color} text-white rounded-full shadow-lg group-hover:scale-110 ${contact.hover} transition`}>
                {contact.icon}
              </div>
              <div>
                <h3 className="font-semibold">{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-gray-700">{contact.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;

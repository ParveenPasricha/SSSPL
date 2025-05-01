import React, { useEffect } from "react";
import { useToaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Footer = () => {
  const { toast } = useToaster();
  const navigate = useNavigate();

  const routes = {
    Home: "/",
    About: "/about",
    Products: "/products",
    "Price List": "/price-list",
    Clientele: "/clientele",
    Inquiry: "/inquiry",
    "Contact Us": "/contact",
    "Photo Gallery": "/gallery",
    Testimonial: "/testimonial",
    // Admin: '/admin',
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.counter.dev/script.js";
    script.setAttribute("data-id", "6d505942-3f9e-4a0c-be97-e4db8cb7d623");
    script.setAttribute("data-utcoffset", "6");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up on unmount
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = new FormData(form).get("email");

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });

    form.reset();
  };

  return (
    <footer className="bg-gradient-to-tl from-purple-400 to-blue-100 text-black pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info + Social Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SSSPL</h3>
            <p className="text-solar-100/80">
              Leading provider of solar solutions for residential, commercial,
              and industrial clients across India.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/susolartechsystems"
                className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid"
                  className="h-8 w-15 rounded-2xl"
                />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com"
                className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s"
                  className="h-8 w-15"
                />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.twitter.com"
                className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.pinimg.com/474x/4f/4a/6d/4f4a6d8fff700daa65743811932244b7.jpg"
                  className="h-8 w-15"
                />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com"
                className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
                  className="h-8 w-15"
                />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.linkedin.com"
                className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
                  className="h-8 w-15"
                />
                <span className="sr-only">Whatsapp</span>
              </a>
  
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-2">
              {Object.keys(routes).map((label, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(routes[label]);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="cursor-pointer font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                { name: "Residential Solar", link: "/services/residential" },
                { name: "Commercial Solar", link: "/services/commercial" },
                { name: "Industrial Solutions", link: "/services/industrial" },
                { name: "Solar Water Heating",link: "/services/water-heating"},
                { name: "Maintenance & Support", link: "/services/maintenance"},
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.link}
                    className="text-solar-100/80 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-solar-100/80 mb-4">
              Stay updated with the latest in solar technology and exclusive
              offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="bg-solar-800 p-2 border border-solar-700 text-black font-bold placeholder:text-solar-100/50"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-4 py-2 hover:opacity-80 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-solar-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-solar-100/80 text-sm">
            &copy; {new Date().getFullYear()} Su Solartech Systems Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-solar-100/80 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-solar-100/80 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-solar-100/80 text-sm hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

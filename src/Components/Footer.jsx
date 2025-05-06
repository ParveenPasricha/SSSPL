import React, { useEffect } from "react";
import { useToaster } from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.counter.dev/script.js";
    script.setAttribute("data-id", "6d505942-3f9e-4a0c-be97-e4db8cb7d623");
    script.setAttribute("data-utcoffset", "6");
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
  
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
  
    try {
      await axios.post("https://backendssspl.onrender.com/api/subscribe", { email });
      alert("Subscription successful!");
    } catch (error) {
      if (error.response?.status === 409) {
        alert("You are already subscribed.");
      } else {
        alert("Subscription failed. Please try again later.");
        console.error(error);
      }
    }
}
  
  return (
  <footer className="bg-blue-100 text-black pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Company Info + Social Icons */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">SSSPL</h3>
        <p className="text-gray-600">
          Leading provider of solar solutions for residential, commercial,
          and industrial clients across India.
        </p>
        <div className="flex gap-3 mt-6 flex-wrap mb-4">
          {[
            {
              icon: <FaFacebookF />,
              bg: "bg-blue-600",
              link: "http://facebook.com/susolartechsystems/",
              label: "Facebook",
            },
            {
              icon: <FaInstagram />,
              bg: "bg-pink-500",
              link: "https://instagram.com/susolartechsystems/",
              label: "Instagram",
            },
            {
              icon: <FaTwitter />,
              bg: "bg-sky-500",
              link: "https://x.com/susolartechsystems/",
              label: "Twitter",
            },
            {
              icon: <FaLinkedinIn />,
              bg: "bg-blue-800",
              link: "https://in.linkedin.com/in/harinder-jain-a15b6720",
              label: "LinkedIn",
            },
            {
              icon: <FaYoutube />,
              bg: "bg-red-600",
              link: "https://www.youtube.com/@SuSolartechSystemsPvtLtd",
              label: "YouTube",
            },
          ].map(({ icon, bg, link, label }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${bg} hover:scale-110 transform transition`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <nav className="flex flex-wrap gap-2">
          {Object.keys(routes).map((label, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(routes[label]);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm bg-white font-semibold px-4 py-1 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
        <p className="text-gray-600">
          Stay updated with the latest in solar technology and exclusive offers.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-2 w-full"
        >
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            className="p-2 border rounded text-sm flex-1"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="h-px bg-gray-300 my-8" />

    {/* Bottom Footer */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} Su Solartech Systems Pvt. Ltd.</p>
      <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-black transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-black transition">
          Terms of Service
        </a>
        <a href="#" className="hover:text-black transition">
          Sitemap
        </a>
      </div>
    </div>
  </div>
</footer>
);
};

export default Footer;
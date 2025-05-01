import React, { useEffect } from "react";
import { useToaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");

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

    e.target.reset();
  };

  return (
    <footer className="bg-blue-100 text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info + Social Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SSSPL</h3>
            <p className="text-gray-600">
              Leading provider of solar solutions for residential, commercial,
              and industrial clients across India.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: "https://www.facebook.com/susolartechsystems",
                  src: "https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid",
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s",
                  label: "Instagram",
                },
                {
                  href: "https://www.twitter.com",
                  src: "https://i.pinimg.com/474x/4f/4a/6d/4f4a6d8fff700daa65743811932244b7.jpg",
                  label: "Twitter",
                },
                {
                  href: "https://www.linkedin.com",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png",
                  label: "LinkedIn",
                },
                {
                  href: "https://wa.me/c/917087137733",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
                  label: "Whatsapp",
                },
              ].map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition"
                >
                  <img src={icon.src} className="h-6 w-6" alt={icon.label} />
                  <span className="sr-only">{icon.label}</span>
                </a>
              ))}
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
                  className="text-sm bg-white font-semibold px-4 py-1 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
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
                { name: "Solar Water Heating", link: "/services/water-heating" },
                { name: "Maintenance & Support", link: "/services/maintenance" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.link}
                    className="block bg-white text-sm font-semibold px-4 py-1 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
                  >
                    {s.name}
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
            <p className="text-gray-600 mb-4">
              Stay updated with the latest in solar technology and exclusive
              offers.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
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
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
            <a href="#" className="hover:text-black transition">Terms of Service</a>
            <a href="#" className="hover:text-black transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

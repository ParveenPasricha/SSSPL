import React from "react";
import { useToaster } from "react-hot-toast";

const Footer = () => {
  const { toast } = useToaster();
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = new FormData(form).get('email');
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
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
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SSSPL</h3>
            <p className="text-solar-100/80">
              Leading provider of solar solutions for residential, commercial, and industrial clients across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors">
                <div className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors">
                <div className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors">
                <div className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-solar-800 hover:bg-solar-700 transition-colors">
                <div className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-solar-100/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-solar-100/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/products" className="text-solar-100/80 hover:text-white transition-colors">Products</a></li>
              <li><a href="/testimonials" className="text-solar-100/80 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-solar-100/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-solar-100/80 hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-solar-100/80 hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-solar-100/80 hover:text-white transition-colors">Industrial Solutions</a></li>
              <li><a href="#" className="text-solar-100/80 hover:text-white transition-colors">Solar Water Heating</a></li>
              <li><a href="#" className="text-solar-100/80 hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-solar-100/80 mb-4">
              Stay updated with the latest in solar technology and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input 
                name="email"
                type="email"
                placeholder="Your email address"
                className="bg-solar-800 p-2  border-solar-700 text-black text-bold placeholder:text-solar-100/50"
              />
              <button type="submit" className="bg-orange-500 p-2 hover:opacity-60">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <separator className="bg-solar-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-solar-100/80 text-sm">
            &copy; {new Date().getFullYear()} Su Solartech Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-solar-100/80 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-solar-100/80 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-solar-100/80 text-sm hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

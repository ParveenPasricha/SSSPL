import React, { useState } from "react";

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // List of products
  const products = [
    {
      id: 1,
      name: "Solar Power Plant",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNGjGw5SoIyLXCiHMMwEmfx49wMfmmMCOBvtG-L=s680-w680-h510-rw",
      description:
        "State-of-the-art Solar Power Plant solutions designed for residential and commercial establishments.",
    },
    {
      id: 2,
      name: "Solartech Water Heating System",
      image:
      // "https://scontent.fixc1-8.fna.fbcdn.net/v/t39.30808-6/461837628_8176958742353686_4024380202958365619_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=cBbhehrhMBsQ7kNvwEZWGwL&_nc_oc=Adl-d80W_bufQIYhppoghpSFeVYXTNJ0dQ00__473eKqxvknaGZe4uqab8eYwgvqpScRHuooyMD2XwevhErkrhyg&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=GEXcAEps1SYWtV-XXVAr_w&oh=00_AfE0-hS0lNy5WLxroORkO-yCoFVhT1x2tLRN1ihtu2SNYA&oe=6818011E",
      "https://scontent.fixc1-8.fna.fbcdn.net/v/t39.30808-6/457365786_7904061766310053_4180626802627625564_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=VSFNZQKguVYQ7kNvwEZEDv9&_nc_oc=AdlxujjLfPsa_zaW4_h9L0q3i2x46zH9hTmB22drPst4MCvr1r8fWfKcryWJ233R_9RZxzCWOgE166g-j40fXAiG&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=69AP8J3Opt9IoUWyLgXdPA&oh=00_AfGxqozX_YHptNpuj9iOzQIx4vz8LDYkHna2kb9zmNG5gA&oe=68180702",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 3,
      name: "Solartech stand alone led security",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipN7iqtRcIwkWs4BDk7QLIGG4gAiuD8yD6Vi1CHU=s680-w680-h510-rw",
      description:
        "Tailored solar power plants that maximize energy production and reduce long-term energy costs.",
    },
    {
      id: 4,
      name: "Solartech Still",
      image:
        "https://www.sofo-soler.mu/cdn/shop/products/solarwaterheater.jpg?v=1716035820",
      description:
        "Affordable and reliable solar energy solutions for large-scale installations.",
    },
    {
      id: 5,
      name: "Solartech Hand Held Lantern/ Emergency Light",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMwnu35WjK_eRW7CqnrQx1Ra25EJKQ3F9hqytlB=s680-w680-h510-rw",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 6,
      name: "Solartech Box Type Cookers & Dish Type Cookers",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/353816819/BH/FZ/AT/151783329/solar-box-cooker-500x500.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 7,
      name: "Solartech Cabinet Drier",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMCSYKVE9PUEhH8FCekwdmCOP7cNiQxBuJ7TA07=s680-w680-h510-rw",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 8,
      name: "Solartech Home/Indoor Lighting Systems",
      image:
        "https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 9,
      name: "Solartech Blinker Light",
      image:
        " https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 10,
      name: "Solartech Garden Lights",
      image:
        "https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg",
      description:
        "Highly efficient solar plants designed to meet both residential and commercial energy needs.",
    },
    {
      id: 11,
      name: "Solartech Pump",
      image: "https://samsonsolar.in/img/s9.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 12,
      name: "Solartech Power Pack/ Stand By Power Supply, UPS & Invertor",
      image:
        "https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 13,
      name: "Solartech Hand Held Rechargeable Torch",
      image:
        "https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 14,
      name: "Solartech Portable Battery Charger or Mobile Chargers",
      image:
        "https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 15,
      name: "Solartech Hand Held Search/ Dragon Light",
      image:
        "https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 16,
      name: "Solartech Hand Held Metal Detector",
      image:
        "https://www.suryashakti.biz/images/products_clip_image001_0007.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 17,
      name: "Solartech Door Frame Metal Detector",
      image: "https://magtech.in/wp-content/uploads/2023/10/2.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 18,
      name: "Solartech Under Vehicle Mirror Trolly",
      image:
        "https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 19,
      name: "Solartech IR Sensor",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 20,
      name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
      image:
        "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 21,
      name: "Solartech Systems Parts & Spares",
      image:
        "https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Solar Products
      </h1>

      {/* Grid for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {product.name}
            </h3>
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

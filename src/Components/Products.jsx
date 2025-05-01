import React, { useEffect, useState } from "react";
import Bars from "react-loading-icons/dist/esm/components/bars";

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

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
      name: ["Solartech Water Heating System ", "FPC & ETC"],
      image:
      "https://scontent.fixc1-8.fna.fbcdn.net/v/t39.30808-6/457365786_7904061766310053_4180626802627625564_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=VSFNZQKguVYQ7kNvwEZEDv9&_nc_oc=AdlxujjLfPsa_zaW4_h9L0q3i2x46zH9hTmB22drPst4MCvr1r8fWfKcryWJ233R_9RZxzCWOgE166g-j40fXAiG&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=69AP8J3Opt9IoUWyLgXdPA&oh=00_AfGxqozX_YHptNpuj9iOzQIx4vz8LDYkHna2kb9zmNG5gA&oe=68180702",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 3,
      name: "Solartech LED Light ",
      image:
        "https://i.ibb.co/q3MxmhM9/123.jpg",
      description:
        "Tailored solar power plants that maximize energy production and reduce long-term energy costs.",
    },
    {
      id: 4,
      name: "Solartech Still",
      image:
        "https://3.imimg.com/data3/AH/IB/MY-2045897/stills-500x500.jpg",
      description:
        "Affordable and reliable solar energy solutions for large-scale installations.",
    },
    {
      id: 5,
      name: "Solartech Hand Held Lantern/ Emergency Light",
      image:
        "https://i.ibb.co/JjWz5pq8/unnamed-removebg-preview.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 6,
      name: "Solartech Box Type Cookers & Dish Type Cookers",
      image:
        "https://i.ibb.co/G4WVPWXX/cooker-removebg-preview-2.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 7,
      name: "Solartech Cabinet Drier",
      image:
        "https://i.ibb.co/hx2Gbrjc/drier-removebg-preview.png",
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
      name: "Solartech Blinker Light",
      image:
        "https://i.ibb.co/67KSf3Qk/2022-04-14-removebg-preview.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 21,
      name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
      image:
        "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
    {
      id: 22,
      name: "Solartech Systems Parts & Spares",
      image:
        "https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
    },
  ];

  if (loading) {
    return (
      <div className="bg-black z-10 w-full">
      <h1 className="text-4xl h-screen font-bold">
        <Bars className="w-full justify-center" />
      </h1>
    </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Solar Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-contain rounded-lg mb-4 bg-gray-100"
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

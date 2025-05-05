// import React, { useEffect, useState } from "react";
// import Bars from "react-loading-icons/dist/esm/components/bars";

// const Products = () => {
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: "Solar Power Plant",
//       image: "https://lh3.googleusercontent.com/p/AF1QipNGjGw5SoIyLXCiHMMwEmfx49wMfmmMCOBvtG-L=s680-w680-h510-rw",
//       description: "State-of-the-art Solar Power Plant solutions designed for residential and commercial establishments.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 2,
//       name: ["Solartech Water Heating System- ", "FPC & ETC Type"],
//       image: "https://scontent.fixc1-8.fna.fbcdn.net/...",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: "Commercial",
//     },
//     {
//       id: 3,
//       name: "Solartech LED Street Light ",
//       image: "https://i.ibb.co/q3MxmhM9/123.jpg",
//       description: "Tailored solar power plants that maximize energy production and reduce long-term energy costs.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 4,
//       name: "Solartech Distilled Water Still",
//       image: "https://3.imimg.com/data3/AH/IB/MY-2045897/stills-500x500.jpg",
//       description: "Affordable and reliable solar energy solutions for large-scale installations.",
//       category: "Commercial",
//     },
//     {
//       id: 5,
//       name: "Solartech Hand Held Lantern/ Emergency Light",
//       image: "https://i.ibb.co/d0LD3Rwy/Lamp-I.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: "Residential",
//     },
//     {
//       id: 6,
//       name: "Solartech Box Type Cookers & Dish Type Cookers",
//       image: "https://i.ibb.co/G4WVPWXX/cooker-removebg-preview-2.png",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: "Residential",
//     },
//     {
//       id: 7,
//       name: "Solartech Cabinet Drier",
//       image: "https://i.ibb.co/hx2Gbrjc/drier-removebg-preview.png",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: "Commercial",
//     },
//     {
//       id: 8,
//       name: "Solartech Home/Indoor Lighting Systems",
//       image: "https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 9,
//       name: "Solartech Blinker Light",
//       image: "https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 10,
//       name: "Solartech Garden Lights",
//       image: "https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg",
//       description: "Highly efficient solar plants designed to meet both residential and commercial energy needs.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 11,
//       name: "Solartech Pump",
//       image: "https://samsonsolar.in/img/s9.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 12,
//       name: "Solartech Power Pack/ Stand By Power Supply, UPS & Invertor",
//       image: "https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 13,
//       name: "Solartech Hand Held Rechargeable Torch",
//       image: "https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 14,
//       name: "Solartech Portable Battery Charger or Mobile Chargers",
//       image: "https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 15,
//       name: "Solartech Hand Held Search/ Dragon Light",
//       image: "https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 16,
//       name: "Solartech Hand Held Metal Detector",
//       image: "https://www.suryashakti.biz/images/products_clip_image001_0007.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial"],
//     },
//     {
//       id: 17,
//       name: "Solartech Door Frame Metal Detector",
//       image: "https://magtech.in/wp-content/uploads/2023/10/2.png",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial"],
//     },
//     {
//       id: 18,
//       name: "Solartech Under Vehicle Mirror Trolly",
//       image: "https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Commercial"],
//     },
//     {
//       id: 19,
//       name: "Solartech IR Sensor",
//       image: "https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//     {
//       id: 20,
//       name: "Solartech Traffic Lights",
//       image: "https://i.ibb.co/67KSf3Qk/2022-04-14-removebg-preview.png",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Commercial"],
//     },
//     {
//       id: 21,
//       name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
//       image: "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial"],
//     },
//     {
//       id: 22,
//       name: "Heavy Duty Kerosene Heater with Double Tank System",
//       image: "https://i.ibb.co/h3JvM0x/20250429-103909-removebg-preview.png",
//       description: "Heavy-duty kerosene heater with a Double Tank System for safe, efficient heating—ideal for industrial, commercial, and domestic use..",
//       category: ["All", "Commercial"],
//     },
//     {
//       id: 23,
//       name: "Solartech Systems Parts & Spares",
//       image: "https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg",
//       description: "Customized solar solutions designed to deliver high performance and energy savings.",
//       category: ["All", "Popular", "Commercial", "Residential"],
//     },
//   ];

//   const allCategories = [
//     "All",
//     ...new Set(
//       products
//         .flatMap((product) =>
//           Array.isArray(product.category)
//             ? product.category
//             : product.category
//             ? [product.category]
//             : []
//         )
//         .filter((category) => category !== "All") 
//     ),
//   ];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((product) =>
//           Array.isArray(product.category)
//             ? product.category.includes(selectedCategory)
//             : product.category === selectedCategory
//         );

//   if (loading) {
//     return (
//       <div className="bg-black z-10 w-full h-screen flex justify-center items-center">
//         <Bars className="w-16 h-16 text-white" />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-black-600 mb-8">
//         Solar Products
//       </h1>

//       {/* Category Filter Buttons */}
//       <div className="flex flex-wrap sticky top-0 z-50 justify-center gap-3 mb-8">
//         {allCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-semibold border ${
//               selectedCategory === category
//                 ? "bg-orange-500 text-white"
//                 : "bg-white text-blue-600"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white hover:opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-72 object-contain rounded-lg mb-4 bg-gray-100"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               {Array.isArray(product.name) ? product.name.join("") : product.name}
//             </h3>
//             <p className="text-base text-gray-700 mb-4">
//               {product.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


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
      image: "https://lh3.googleusercontent.com/p/AF1QipNGjGw5SoIyLXCiHMMwEmfx49wMfmmMCOBvtG-L=s680-w680-h510-rw",
      description: "State-of-the-art Solar Power Plant solutions designed for residential and commercial establishments.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 2,
      name: ["Solartech Water Heating System- ", "FPC & ETC Type"],
      image: "https://i.ibb.co/0y2WsZp6/swh-500x500.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Commercial",
    },
    {
      id: 3,
      name: "Solartech LED Street Light ",
      image: "https://i.ibb.co/q3MxmhM9/123.jpg",
      description: "Tailored solar power plants that maximize energy production and reduce long-term energy costs.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 4,
      name: "Solartech Distilled Water Still",
      image: "https://3.imimg.com/data3/AH/IB/MY-2045897/stills-500x500.jpg",
      description: "Affordable and reliable solar energy solutions for large-scale installations.",
      category: "Commercial",
    },
    {
      id: 5,
      name: "Solartech Hand Held Lantern/ Emergency Light",
      image: "https://i.ibb.co/d0LD3Rwy/Lamp-I.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Residential",
    },
    {
      id: 6,
      name: "Solartech Box Type Cookers & Dish Type Cookers",
      image: "https://i.ibb.co/G4WVPWXX/cooker-removebg-preview-2.png",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Residential",
    },
    {
      id: 7,
      name: "Solartech Cabinet Drier",
      image: "https://i.ibb.co/hx2Gbrjc/drier-removebg-preview.png",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Commercial",
    },
    {
      id: 8,
      name: "Solartech Home/Indoor Lighting Systems",
      image: "https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 9,
      name: "Solartech Blinker Light",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 10,
      name: "Solartech Garden Lights",
      image: "https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg",
      description: "Highly efficient solar plants designed to meet both residential and commercial energy needs.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 11,
      name: "Solartech Pump",
      image: "https://samsonsolar.in/img/s9.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 12,
      name: "Solartech Power Pack/ Stand By Power Supply, UPS & Invertor",
      image: "https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 13,
      name: "Solartech Hand Held Rechargeable Torch",
      image: "https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 14,
      name: "Solartech Portable Battery Charger or Mobile Chargers",
      image: "https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 15,
      name: "Solartech Hand Held Search/ Dragon Light",
      image: "https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 16,
      name: "Solartech Hand Held Metal Detector",
      image: "https://www.suryashakti.biz/images/products_clip_image001_0007.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 17,
      name: "Solartech Door Frame Metal Detector",
      image: "https://magtech.in/wp-content/uploads/2023/10/2.png",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 18,
      name: "Solartech Under Vehicle Mirror Trolly",
      image: "https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Commercial"],
    },
    {
      id: 19,
      name: "Solartech IR Sensor",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 20,
      name: "Solartech Traffic Lights",
      image: "https://i.ibb.co/67KSf3Qk/2022-04-14-removebg-preview.png",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Commercial"],
    },
    {
      id: 21,
      name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
      image: "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 22,
      name: "Heavy Duty Kerosene Heater with Double Tank System",
      image: "https://i.ibb.co/h3JvM0x/20250429-103909-removebg-preview.png",
      description: "Heavy-duty kerosene heater with a Double Tank System for safe, efficient heating—ideal for industrial, commercial, and domestic use..",
      category: ["All", "Commercial"],
    },
    {
      id: 23,
      name: "Solartech Systems Parts & Spares",
      image: "https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg",
      description: "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
  ];

  if (loading) {
    return (
      <div className="bg-black z-10 w-full h-screen flex justify-center items-center">
        <Bars className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-tr from-green-500 to-red-200">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-black-600 mb-8">
        Solar Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:scale-110 hover:opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-contain rounded-lg mb-4 bg-gray-100"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {Array.isArray(product.name) ? product.name.join("") : product.name}
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

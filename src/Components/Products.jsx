import React, { useState } from 'react';

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  // List of products
  const products = [
    {
      id: 1,
      name: 'Solar Power Plant',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/PC/AP/SY/138366514/deepsolartech-megha-project-image00135-500x500.jpg',
      description: 'State-of-the-art Solar Power Plant solutions designed for residential and commercial establishments.',
    },
    {
      id: 2,
      name: 'Solartech stand alone led security',
      image: 'data:image/jpeg;base64,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',
      description: 'Tailored solar power plants that maximize energy production and reduce long-term energy costs.',
    },
    {
      id: 3,
      name: 'Solartech Garden Lights',
      image: 'https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg',
      description: 'Highly efficient solar plants designed to meet both residential and commercial energy needs.',
    },
    {
      id: 4,
      name: 'Solartech Still',
      image: 'https://www.sofo-soler.mu/cdn/shop/products/solarwaterheater.jpg?v=1716035820',
      description: 'Affordable and reliable solar energy solutions for large-scale installations.',
    },
    {
      id: 5,
      name: 'Solartech Water Heating System',
      image: 'https://tiimg.tistatic.com/fp/1/003/591/solar-water-heaters-386.jpg',
      description: 'Customized solar solutions designed to deliver high performance and energy savings.',
    },
    {
        id: 6,
        name: 'Solartech Box Type Cookers & Dish Type Cookers',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353816819/BH/FZ/AT/151783329/solar-box-cooker-500x500.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 7,
        name: 'Solartech Cabinet Drier',
        image: 'data:image/jpeg;base64,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',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 8,
        name: 'Solartech Home/Indoor Lighting Systems',
        image: 'https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 9,
        name: 'Solartech Blink Light',
        image: ' https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 10,
        name: 'Solartech Hand Held Lantern/ Emergency Light',
        image: 'https://3.imimg.com/data3/XD/LH/MY-2045897/hand-held-lantern-250x250.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 11,
        name: 'Solartech Pump',
        image: 'https://samsonsolar.in/img/s9.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 12,
        name: 'Solartech Power Pack/ Stand By Power Supply, UPS & Invertor',
        image: 'https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 13,
        name: 'Solartech Hand Held Rechargeable Torch',
        image: 'https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 14,
        name: 'Solartech Portable Battery Charger or Mobile Chargers',
        image: 'https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 15,
        name: 'Solartech Hand Held Search/ Dragon Light',
        image: 'https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 16,
        name: 'Solartech Hand Held Metal Detector',
        image: 'https://www.suryashakti.biz/images/products_clip_image001_0007.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 17,
        name: 'Solartech Door Frame Metal Detector',
        image: 'https://magtech.in/wp-content/uploads/2023/10/2.png',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 18,
        name: 'Solartech Under Vehicle Mirror Trolly',
        image: 'https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 19,
        name: 'Solartech IR Sensor',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 20,
        name: 'Solartech Wind Electric Generator & PV Wind Hybrid System',
        image: 'https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
      {
        id: 21,
        name: 'Solartech Systems Parts & Spares',
        image: 'https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg',
        description: 'Customized solar solutions designed to deliver high performance and energy savings.',
      },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">Solar Products</h1>

      {/* Grid for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
            <p className="text-base text-gray-700 mb-4">{product.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

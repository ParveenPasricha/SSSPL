const products = [
    {
      id: 1,
      name: "Solar Power Plant",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNGjGw5SoIyLXCiHMMwEmfx49wMfmmMCOBvtG-L=s680-w680-h510-rw",
      description:
        "State-of-the-art Solar Power Plant solutions designed for residential and commercial establishments.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 2,
      name: ["Solartech Water Heating System- ", "FPC & ETC Type"],
      image: "https://i.ibb.co/0y2WsZp6/swh-500x500.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Commercial",
    },
    {
      id: 3,
      name: "Solartech LED Street Light ",
      image: "https://i.ibb.co/q3MxmhM9/123.jpg",
      description:
        "Tailored solar power plants that maximize energy production and reduce long-term energy costs.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 4,
      name: "Solartech Distilled Water Still",
      image: "https://3.imimg.com/data3/AH/IB/MY-2045897/stills-500x500.jpg",
      description:
        "Affordable and reliable solar energy solutions for large-scale installations.",
      category: "Commercial",
    },
    {
      id: 5,
      name: "Solartech Hand Held Lantern/ Emergency Light",
      image: "https://i.ibb.co/d0LD3Rwy/Lamp-I.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Residential",
    },
    {
      id: 6,
      name: "Solartech Box Type Cookers & Dish Type Cookers",
      image: "https://i.ibb.co/G4WVPWXX/cooker-removebg-preview-2.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Residential",
    },
    {
      id: 7,
      name: "Solartech Cabinet Drier",
      image: "https://i.ibb.co/hx2Gbrjc/drier-removebg-preview.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: "Commercial",
    },
    {
      id: 8,
      name: "Solartech Home/Indoor Lighting Systems",
      image:
        "https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 9,
      name: "Solartech Blinker Light",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 10,
      name: "Solartech Garden Lights",
      image:
        "https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg",
      description:
        "Highly efficient solar plants designed to meet both residential and commercial energy needs.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 11,
      name: "Solartech Pump",
      image: "https://samsonsolar.in/img/s9.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 12,
      name: "Solartech Power Pack/ Stand By Power Supply, UPS & Invertor",
      image:
        "https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 13,
      name: "Solartech Hand Held Rechargeable Torch",
      image:
        "https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 14,
      name: "Solartech Portable Battery Charger or Mobile Chargers",
      image:
        "https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 15,
      name: "Solartech Hand Held Search/ Dragon Light",
      image:
        "https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 16,
      name: "Solartech Hand Held Metal Detector",
      image:
        "https://www.suryashakti.biz/images/products_clip_image001_0007.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 17,
      name: "Solartech Door Frame Metal Detector",
      image: "https://magtech.in/wp-content/uploads/2023/10/2.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 18,
      name: "Solartech Under Vehicle Mirror Trolly",
      image:
        "https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Commercial"],
    },
    {
      id: 19,
      name: "Solartech IR Sensor",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 20,
      name: "Solartech Traffic Lights",
      image: "https://i.ibb.co/67KSf3Qk/2022-04-14-removebg-preview.png",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Commercial"],
    },
    {
      id: 21,
      name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
      image:
        "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 22,
      name: "Heavy Duty Kerosene Heater with Double Tank System",
      image: "https://i.ibb.co/h3JvM0x/20250429-103909-removebg-preview.png",
      description:
        "Heavy-duty kerosene heater with a Double Tank System for safe, efficient heating—ideal for industrial, commercial, and domestic use..",
      category: ["All", "Commercial"],
    },
    {
      id: 23,
      name: "Solartech Systems Parts & Spares",
      image:
        "https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg",
      description:
        "Customized solar solutions designed to deliver high performance and energy savings.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
  ];


  export default products
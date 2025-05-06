const products = [
    {
      id: 1,
      name: "Solar Power Plant",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNGjGw5SoIyLXCiHMMwEmfx49wMfmmMCOBvtG-L=s680-w680-h510-rw",
      description:
        "Solar Power Plants offer a clean, renewable energy source, helping to combat climate change while reducing energy costs.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 2,
      name: ["Solartech Water Heating System- ", "FPC & ETC Type"],
      image: "https://i.ibb.co/0y2WsZp6/swh-500x500.jpg",
      description:[
      "Solartech Water Heating System provides hot water using clean solar energy, reducing your electricity bills.",
      "Available in FPC & ETC types to suit various climate conditions and usage needs."],
      category: "Commercial",
    },
    {
      id: 3,
      name: "Solartech LED Street Light ",
      image: "https://i.ibb.co/q3MxmhM9/123.jpg",
      description:[
        "Solartech LED Street Lights offer energy-efficient, high-brightness lighting powered entirely by solar energy.",
        "Ideal for streets, parks, and campuses—easy to install, low maintenance, and eco-friendly."
      ],
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 4,
      name: "Solartech Distilled Water Still",
      image: "https://3.imimg.com/data3/AH/IB/MY-2045897/stills-500x500.jpg",
      description:
      [
        "Produces high-purity distilled water using solar energy—ideal for labs, clinics, and schools.",
        "Eco-friendly, low-maintenance system with no need for electricity or chemicals."
      ],
      category: "Commercial",
    },
    {
      id: 5,
      name: "Solartech Hand Held Lantern/ Emergency Light",
      image: "https://i.ibb.co/d0LD3Rwy/Lamp-I.jpg",
      description:
      [
        "Portable solar-powered lantern ideal for emergencies, camping, and off-grid use.",
        "Features dual charging (solar + USB), long battery life, and durable build."
      ],
      category: "Residential",
    },
    {
      id: 6,
      name: "Solartech Box Type Cookers & Dish Type Cookers",
      image: "https://i.ibb.co/G4WVPWXX/cooker-removebg-preview-2.png",
      description:
      [
        "Eco-friendly solar cookers designed for fuel-free outdoor cooking.",
        "Efficient, safe, and ideal for homes, schools, and rural areas."
      ],
      category: "Residential",
    },
    {
      id: 7,
      name: "Solartech Cabinet Drier",
      image: "https://i.ibb.co/hx2Gbrjc/drier-removebg-preview.png",
      description:
      [
        "Solar-powered drying cabinet ideal for food, herbs, and grains.",
        "Energy-efficient, hygienic, and eco-friendly solution for small-scale drying."
      ],
      category: "Commercial",
    },
    {
      id: 8,
      name: "Solartech Home/Indoor Lighting Systems",
      image:
        "https://5.imimg.com/data5/OU/SA/KI/SELLER-17469105/solar-home-light-system.jpg",
      description:
      [
        "Reliable solar-powered lighting solution for homes and indoor use.",
        "Offers bright, energy-efficient light even in power outages."
      ],
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 9,
      name: "Solartech Blinker Light",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/UD/FK/IL/803113/solar-blinker-250x250.jpg",
      description:
        "Solartech Blinker Light is a solar-powered traffic signal with high-visibility LEDs, ideal for road safety. It operates without external power.",
      category: ["Popular", "Commercial", "Residential"],
    },
    {
      id: 10,
      name: "Solartech Garden Lights",
      image:
        "https://3.imimg.com/data3/TU/FD/MY-14922728/solar-garden-lights-250x250.jpg",
      description:
        "Solartech Garden Lights are solar-powered outdoor lights that provide eco-friendly illumination for gardens and pathways. They charge during the day and automatically light up at night without needing external power.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 11,
      name: "Solartech Pump",
      image: "https://samsonsolar.in/img/s9.jpg",
      description:
        "Solartech Pumps are solar-powered water pumping systems designed for irrigation, water supply, and various other applications. They operate efficiently using solar energy, reducing reliance on conventional power sources.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 12,
      name: "Solartech Power Pack/ Stand By Power Supply, UPS & Invertor",
      image:
        "https://3.imimg.com/data3/IX/UU/MY-2045897/stand-by-power-supply-250x250.jpg",
      description:
        "Solartech Power Pack/UPS & Inverter provides reliable backup power by integrating solar energy with grid power. It ensures uninterrupted power supply during outages, supporting both residential and commercial applications.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 13,
      name: "Solartech Hand Held Rechargeable Torch",
      image:
        "https://m.media-amazon.com/images/I/719ZPc6naYL._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Solartech Hand Held Rechargeable Torch is a solar-powered flashlight with both solar and AC charging options. It offers reliable, portable illumination for emergencies and outdoor use.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 14,
      name: "Solartech Portable Battery Charger or Mobile Chargers",
      image:
        "https://m.media-amazon.com/images/I/713YNQwvmjL._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Solartech Portable Battery Charger is a solar-powered power bank with dual USB ports and a built-in flashlight. It's perfect for charging devices outdoors or during emergencies.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 15,
      name: "Solartech Hand Held Search/ Dragon Light",
      image:
        "https://5.imimg.com/data5/UH/NX/MY-5465059/solar-search-light-500x500.jpg",
      description:
        "The Solartech Hand Held Search/Dragon Light is a rugged, solar-powered searchlight ideal for outdoor and emergency use. It offers both solar and AC charging options with remote control functionality for added convenience.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 16,
      name: "Solartech Hand Held Metal Detector",
      image:
        "https://www.suryashakti.biz/images/products_clip_image001_0007.jpg",
      description:
        "The Solartech Hand Held Metal Detector is a high-sensitivity device designed to detect various metals. It operates on rechargeable or disposable batteries and can be charged via solar or AC power.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 17,
      name: "Solartech Door Frame Metal Detector",
      image: "https://magtech.in/wp-content/uploads/2023/10/2.png",
      description:
        "Solartech Door Frame Metal Detector is a security device designed to detect ferrous and non-ferrous metals. It is available in both portable and wooden frame options, suitable for various security applications.",
      category: ["All", "Popular", "Commercial"],
    },
    {
      id: 18,
      name: "Solartech Under Vehicle Mirror Trolly",
      image:
        "https://www.dial4trade.com/uploaded_files/product_images/underviewing-vehicle-mirror-trolley-1225526.jpg",
      description:
        "Solartech Under Vehicle Mirror Trolley is a robust security tool designed for inspecting the undersides of vehicles. It features a large unbreakable mirror mounted on a wheeled trolley, ensuring thorough and efficient vehicle searches.",
      category: ["All", "Commercial"],
    },
    {
      id: 19,
      name: "Solartech IR Sensor",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/JC/MJ/YF/86054066/solartech-ir-with-hooter-halogen-light-250x250.PNG",
      description:
        "The Solartech IR Sensor is an infrared sensor used for detecting suspended solids and turbidity in various applications. It operates using a 950 nm infrared LED for precise measurements.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
    {
      id: 20,
      name: "Solartech Traffic Lights",
      image: "https://i.ibb.co/67KSf3Qk/2022-04-14-removebg-preview.png",
      description:
        "Solartech Traffic Lights with blinkers are solar-powered devices designed for traffic management. They use energy-efficient LEDs for clear visibility and operate autonomously, reducing energy costs.",
      category: ["All", "Commercial"],
    },
    {
      id: 21,
      name: "Solartech Wind Electric Generator & PV Wind Hybrid System",
      image:
        "https://image.made-in-china.com/2f0j00LSpTwFsClZbE/1kw-2kw-3kw-5kw-Wind-Solar-Home-Hybrid-System.webp",
      description:
        "The Solartech Wind Electric Generator & PV Wind Hybrid System combines wind and solar power to provide reliable, continuous energy. It includes energy storage and a hybrid controller for efficient power management.",
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
        "Solartech Systems Parts & Spares provide essential components for maintaining and repairing solar energy systems. These parts ensure the efficiency and longevity of solar installations for both residential and industrial use.",
      category: ["All", "Popular", "Commercial", "Residential"],
    },
  ];


  export default products
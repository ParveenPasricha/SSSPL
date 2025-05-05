import React from "react";
import { Helmet } from "react-helmet";
import { FaSolarPanel, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const About = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-lg z-50"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Helmet>
        <title>Solar Water Heating System - SSSPL</title>
        <meta
          name="description"
          content="Efficient solar water heating systems designed for homes and businesses. SSSPL is an MNRE-approved, ISO-certified solar energy products manufacturer based in India."
        />
        <meta
          name="keywords"
          content="solar water heating, solar energy India, SSSPL, MNRE solar products, renewable energy solutions"
        />
      </Helmet>

      <motion.h1
        className="text-5xl font-bold text-center text-blue-700 mb-10"
        variants={fadeUp}
        custom={0}
      >
        <FaSolarPanel className="inline-block mr-2" />
        About SSSPL
      </motion.h1>

      <motion.div className="flex justify-center mb-10" variants={fadeUp} custom={1}>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQFQXXGpsXrVtQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516926979358?e=2147483647&v=beta&t=KnIACxnS1wwr61L4kRyeV2Mi7S0jb49_O_rsCpF38bg"
          alt="Er. Harinder Jain - Founder of SSSPL"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
        />
      </motion.div>

      <motion.h1
        className="font-bold text-2xl -mt-5 mb-5 text-center"
        variants={fadeUp}
        custom={1.2}
      >
        Er. Harinder Jain - Founder of SSSPL
      </motion.h1>

      <section className="space-y-6 text-lg text-gray-800 leading-relaxed">
        {[
          `Su Solartech Systems Private Limited (SSSPL) is a leading solar energy products manufacturer based in Chandigarh, India. We're MNRE (GOI) approved, MSME,PM Surya Ghar & GeM Registered, and empanelled with DRDO, DGMAP, MES, and other premier institutions.`,
          `Founded by Er. Harinder Jain, our ISO 9001:2015 certified company designs and supplies Solar Photovoltaic Systems, Solar Water Heaters, Solar Thermal Systems, Wind Generators, and complete Solar Power Plants.`,
          `Since 1985, Solartech Group has been exporting high-quality solar products worldwide and supplying to government agencies, industries, defense, railways, and more.`,
          `All products, including SPV and Solar Water Heating Systems, are tested and certified by MNRE-approved labs like Solar Energy Centre, ETDC, SPRERI, and follow IEC 61215 standards.`,
          `Customers benefit from up to 30% MNRE subsidy and depreciation in income tax. The investment cost is often recovered within 2–5 years due to energy savings.`
        ].map((text, i) => (
          <motion.p key={i} variants={fadeUp} custom={i + 2}>
            <FaCheckCircle className="inline text-green-500 mr-2" />
            {text}
          </motion.p>
        ))}
      </section>

      <motion.div className="text-center mt-10" variants={fadeUp} custom={7}>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition hover:scale-105"
        >
          Contact Us to Learn More
        </a>
      </motion.div>
    </motion.div>
  );
};

export default About;

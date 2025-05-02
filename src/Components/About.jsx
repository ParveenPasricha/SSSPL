import React from "react";
import { Helmet } from "react-helmet";
import { FaSolarPanel, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-lg"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
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

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        <FaSolarPanel className="inline-block mr-2" />
        About SSSPL
      </h1>

      <div className="flex justify-center mb-10">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQFQXXGpsXrVtQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516926979358?e=2147483647&v=beta&t=KnIACxnS1wwr61L4kRyeV2Mi7S0jb49_O_rsCpF38bg"
          alt="Er. Harinder Jain - Founder of SSSPL"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>
      <h1 className="font-bold text-2xl -mt-5 mb-5 text-center">Er. Harinder Jain - Founder of SSSPL</h1>

      <section className="space-y-6 text-lg text-gray-800 leading-relaxed">
        <p>
          <FaCheckCircle className="inline text-green-500 mr-2" />
          <strong>Su Solartech Systems Private Limited (SSSPL)</strong> is a
          leading solar energy products manufacturer based in Chandigarh, India.
          We're MNRE (GOI) approved, NSIC & DGS&D registered, and empanelled
          with DRDO, DGMAP, MES, and other premier institutions.
        </p>

        <p>
          <FaCheckCircle className="inline text-green-500 mr-2" />
          Founded by <strong>Er. Harinder Jain</strong>, our ISO 9001:2015
          certified company designs and supplies Solar Photovoltaic Systems,
          Solar Water Heaters, Solar Thermal Systems, Wind Generators, and
          complete Solar Power Plants.
        </p>

        <p>
          <FaCheckCircle className="inline text-green-500 mr-2" />
          Since 1985, Solartech Group has been exporting high-quality solar
          products worldwide and supplying to government agencies, industries,
          defense, railways, and more.
        </p>

        <p>
          <FaCheckCircle className="inline text-green-500 mr-2" />
          All products, including SPV and Solar Water Heating Systems, are
          tested and certified by MNRE-approved labs like Solar Energy Centre,
          ETDC, SPRERI, and follow IEC 61215 standards.
        </p>

        <p>
          <FaCheckCircle className="inline text-green-500 mr-2" />
          Customers benefit from up to <strong>30% MNRE subsidy</strong> and{" "}
          <strong>80% depreciation</strong> in income tax. The investment cost
          is often recovered within 2–5 years due to energy savings.
        </p>
      </section>

      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          Contact Us to Learn More
        </a>
      </div>
    </div>
  );
};

export default About;

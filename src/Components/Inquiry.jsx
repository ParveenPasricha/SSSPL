import React, { useState } from "react";
import axios from "axios";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    companyname: "",
    department: "",
    address: "",
    telephone: "",
    email: "",
    products: [],
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === "select-multiple") {
      const values = Array.from(selectedOptions, (option) => option.value);
      setFormData({ ...formData, [name]: values });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backendssspl.onrender.com/api/inquiry", formData);
      alert("Inquiry submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Inquiry Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Fields */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Company Name *</label>
            <input
              type="text"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Department *</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2">Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Telephone No. *</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2">Products (Hold Ctrl to select multiple)</label>
            <select
              multiple
              name="products"
              value={formData.products}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
            >
              <option>Solartech Hand Held Lantern/Emergency Light</option>
              <option>Solartech Portable Battery Charger</option>
              <option>Solartech Universal Battery Charger</option>
              <option>Solartech Home/Indoor Lighting Systems</option>
              <option>Solartech Wind Electric Generators</option>
              <option>Solartech PV Wind Hybrid Systems</option>
              <option>Solartech Wind Turbines</option>
              <option>solartech smokeless burners</option>
              <option>solartech biogas plants</option>
              <option>solartech micro hydel projects</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2">Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="5"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="flex gap-4 justify-center md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Submit
            </button>
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  name: "",
                  designation: "",
                  companyname: "",
                  department: "",
                  address: "",
                  telephone: "",
                  email: "",
                  products: [],
                  comments: "",
                })
              }
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;

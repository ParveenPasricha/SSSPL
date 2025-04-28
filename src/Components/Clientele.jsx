import React, { useState, useEffect } from "react";

const customers = [
  {
    name: "Defence User",
    details: [
        "25 Inf Div Camp",
        "25 Inf Div Pro Unit",
        "1 RR Bn (Mahar)",
        "30 RR",
        "35 RR",
        "102 Engrs Regt",
        "ITM",
        "6 Mech Inf",
        "23 Mech Inf",
        "507 ASC Bn",
        "7 Inf Div",
        "16(I) Armd Bde",
        "323 Mtn Bde",
        "71 Mtn Bde",
        "Sig Coy 71 Mtn Bde",
        "Bde Camp 71 Mtn Bde",
        "5 Kumaon",
        "3/8 GR",
        "5/11 GR",
        "9 RAJ RIF",
        "2 Engr Regt.",
        "11 Grenadiers",
        "HQ 3 EME Centre",
        "25 Rajput",
        "10 Guards",
        "2 Jak Rifles",
    ],
  },

  {
    name: "Indian Railways",
    details: [
      "Northern Railway, Ambala Cantt.",
      "DMM, Central Railway, Nagpur",
      "DY. Cste/C's Western Railway, Ratlam",
      "DEE, Northern Western Railway, Jodhpur",
      "Sr. DEE, Northern Western Railway, Bikaner",
      "Western Railway, Kota",
      "DMM, South Western Railway, Mysore",
      "Sr. DEE, Northern Railway Bikaner",
      "Sr. DEE, Northern Eastern Railway, Izatnagar",
      "Sr. M.M, Northern Western Railway, Jaipur",
      "DMM, South Central Railway, Guntur",
      "SMM/ELC, South Central Railway, Secundrabad",
      "AMM-II, South Eastern Railway, Kolkata",
      "East Coast Railway, Sambhalpur",
      "North Eastern Railway, Gorakhpur",
      "Central Railway, Mumbai",
    ],
  },
  {
    name: "GOVT. DEPARTMENTS & ENERGY DEVELOPMENT AGENCIES",
    details: [
      "UREDA",
      "PWD",
      "CPWD",
      "MES",
      "PEDA",
      "HARTRON",
      "DEDA",
      "HAREDA",
      "JAKEDA",
      "DST",
      "CHANDIGARH ADMINISTRATION",
      "HIMURJA",
      "MPUVN",
      "CREST",
      "RRECL",
      "NEDA",
    ],
  },
  {
    name: "EDUCATIONAL INSTITUTIONAL & UNIVERSITIES",
    details: [
      "College Of Veterinary & Animal Science, Bikaner",
      "k.M.V. College, Jalandhar",
      "Punjab Public School, Nabha",
      "D.P.S. Pinjore",
      "GUru Nanak Girls College, Yamuna Nagar",
      "Punjab University, Chandigarh",
      "Guru Nanak Dev University, Amritsar",
      "Yadavindra Public School, Patiala",
      "St. Jesus & Mary School, Shimla",
      "Alpine Public School,Bhawana",
      "St. Bede's College, Shimla",
      "Hostel New Block & Gym Hall, Govt. College, Sec 42, Chandigarh",
      "Hotel Management & Catering Tech., Sec 42, Chandigarh",
    ],
  },
  {
    name: "HOTELS, REST HOUSES & CLUBS",
    details: [
      "International Youth Centre, New Delhi",
      "Yatri Niwas, Jawalaji, Himachal Pradesh",
      "Punjab Bhawan, Chandigarh",
      "Gymkhana Club, Panchkula, Haryana",
      "Tosha Beach, Pinjore, Haryana",
      "Bherni Continental, Chandigarh",
      "Shakti Bhawan, Niharika, katra",
    ],
  },
  {
    name: "Hospitals",
    details: [
      "Medical College & New General Hospital, Chandigarh",
      "Indu Nursing Home, Chandigarh",
      "Military Hospital, Ambala Cantt.",
      "S.D. Nature Cure, Hospital, Ambala Cantt.",
      "Medical College, Rohtak",
      "Amar Hospital, Sector Vi, Karnal",
      "District Hospital, Udhampur",
      "City Clinic Private Ltd., Sector 34-C, Chandigarh",
      "Dee, Northern Western Railway, Jodhpur",
    ],
  },
  {
    name: "Industries",
    details: [
      "Punjab Tractor Ltd., Mohali",
      "Eicher Tractor Ltd., Parwanoo, Himachal Pradesh",
      "Nestle India Ltd.,",
      "Swaraj Foundry Division, Mohali, Punjab",
      "Ranbaxy Ltd., Mohali, Punjab",
      "National Fertilizers Ltd., Panipat, Haryana",
      "Indian Oil Corporation Ltd., Faridabad, Haryana",
      "Sampuran Cold Storage, Jalandhar",
      "Gis Ltd., Sangrur , Punjab",
    ],
  },
  {
    name: "Charitable Institutes",
    details: [
      "Nari Niketan, R.S.Pura, Jammu",
      "Blind Institute, Chandigarh",
      "Home For Mentally Retarded Children, Delhi",
      "Bal Niketan, Panchkula, Haryana",
      "Pingalwara, Amritsar, Punjab",
    ],
  },
];

export default function Clientele() {
  const [selected, setSelected] = useState(null);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Performance Certificates &amp; Prestigious Customers
      </h1>

      <p className="text-blue-800 hover:underline mb-6 cursor-pointer">
        Few Performance Certificates of Appreciation
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Select a customer category to view details:
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((cat) => (
          <li key={cat.name}>
            <button
              onClick={() => setSelected(cat)}
              className="w-full h-20 bg-black text-white text-left px-4 py-4 border rounded-lg hover:bg-white hover:text-black transition"
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {selected.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

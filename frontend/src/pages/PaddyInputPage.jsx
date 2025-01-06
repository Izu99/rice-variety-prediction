import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRiceVarieties = async (province, district, ageGroup) => {
  const response = await fetch(
    "http://127.0.0.1:8000/rice-variety/get-varieties",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        province,
        district,
        age_group: ageGroup,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch rice varieties");
  }

  const data = await response.json();
  return data.rice_varieties;
};

const RiceVarietyForm = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const provinces = [
    "Western",
    "Eastern",
    "Southern",
    "Northern",
    "Central",
    "Uva",
    "Sabaragamuwa",
    "North Central",
    "North Western",
  ];

  const ageGroups = ["3 months", "6 months", "3 1/2 months"]; // Age groups

  const districtData = {
    Western: ["Colombo", "Gampaha", "Kalutara"],
    Eastern: ["Ampara", "Batticaloa", "Trincomalee"],
    Southern: ["Galle", "Matara", "Hambantota"],
    Northern: ["Jaffna", "Kilinochchi", "Mannar"],
    Central: ["Kandy", "Nuwara Eliya", "Matale"],
    Uva: ["Badulla", "Monaragala"],
    Sabaragamuwa: ["Ratnapura", "Kegalle"],
    "North Central": ["Anuradhapura", "Polonnaruwa"],
    "North Western": ["Kurunegala", "Puttalam"],
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistricts(districtData[selectedProvince] || []);
    setDistrict("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!province || !district || !ageGroup) {
      alert("Please select all fields");
      return;
    }
    setLoading(true);

    try {
      const varieties = await getRiceVarieties(province, district, ageGroup);
      navigate("/result", {
        state: { riceVarieties: varieties, district, ageGroup },
      });
    } catch (error) {
      console.error("Error fetching rice varieties:", error);
      alert("Error fetching rice varieties");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen container mx-auto flex flex-col">
        <div className="items-center justify-center bg-cover bg-center">
          <div>
            <h2 className="text-2xl text-center mt-10 font-semibold text-white bg-primary/90 p-5  mx-auto rounded-2xl">
              Predict the Best Suited Varieties for Your District
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 border-2 border-gray-200 w-2/5 p-5 mx-auto rounded-2xl mt-10 shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-white"
                >
                  Province
                </label>
                <select
                  id="province"
                  value={province}
                  onChange={handleProvinceChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Province</option>
                  {provinces.map((provinceOption) => (
                    <option key={provinceOption} value={provinceOption}>
                      {provinceOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-white"
                >
                  District
                </label>
                <select
                  id="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-2 focus:ring-green-500"
                  disabled={!province}
                >
                  <option value="">Select District</option>
                  {districts.map((districtOption) => (
                    <option key={districtOption} value={districtOption}>
                      {districtOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ageGroup"
                  className="block text-sm font-medium text-white"
                >
                  Age Group
                </label>
                <select
                  id="ageGroup"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Age Group</option>
                  {ageGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-16 my-6 bg-primary font-semibold text-xl rounded-md focus:outline-none hover:bg-primary/90"
                >
                  {loading ? "Loading..." : "PREDICT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiceVarietyForm;

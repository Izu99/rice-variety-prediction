import { useEffect, useState } from "react";
import axios from "axios";

const RiceVarietiesPage = () => {
  const [groupedRiceVarieties, setGroupedRiceVarieties] = useState({});
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  useEffect(() => {
    // Fetch rice varieties grouped by age group
    axios
      .get("http://localhost:8000/rice-details/rice-varieties/by-age-group") // Replace with your actual FastAPI endpoint
      .then((response) => {
        setGroupedRiceVarieties(response.data);
        const firstGroup = Object.keys(response.data)[0];
        setSelectedAgeGroup(firstGroup); // Set the first age group as default
      })
      .catch((error) => {
        console.error("Error fetching grouped rice varieties:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Recommended Rice Varieties In Sri Lanka <br /> (1958 - 2024)
        </h1>

        {/* Tabs for Age Groups */}
        <div className="flex justify-center mb-6">
          {Object.keys(groupedRiceVarieties).map((ageGroup) => (
            <button
              key={ageGroup}
              onClick={() => setSelectedAgeGroup(ageGroup)}
              className={`px-4 py-2 mx-2 rounded-lg ${
                selectedAgeGroup === ageGroup
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Age Group: {ageGroup}
            </button>
          ))}
        </div>

        {/* Rice Varieties for Selected Age Group */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 bg-gray-200/40 rounded-lg p-5">
          {selectedAgeGroup &&
            groupedRiceVarieties[selectedAgeGroup]?.map((variety, index) => (
              <div
                key={index}
                className="bg-green-700 rounded-lg shadow-lg text-center p-2 text-white font-bold"
              >
                <div className="text-xl">{variety}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RiceVarietiesPage;

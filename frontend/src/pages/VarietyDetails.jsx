import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VarietyDetails = () => {
  const { varietyName } = useParams(); // Access the varietyName parameter from the route
  const [riceDetails, setRiceDetails] = useState(null);

  useEffect(() => {
    const fetchRiceDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/rice-details/${varietyName}`
        );
        setRiceDetails(response.data);
      } catch (error) {
        console.error("Error fetching rice details:", error);
      }
    };

    fetchRiceDetails();
  }, [varietyName]); // Re-fetch data when the varietyName changes

  // Parse the reaction_to_pests_and_diseases string into an object
  const parsePestReaction = (reactionString) => {
    const reactions = {};
    const pests = reactionString.split(", ");
    pests.forEach((pest) => {
      const [pestName, pestReaction] = pest.split(": ");
      reactions[pestName.trim()] = pestReaction.trim();
    });
    return reactions;
  };

  // Parse the pest reactions if available
  const pestReactions = riceDetails
    ? parsePestReaction(riceDetails.reaction_to_pests_and_diseases)
    : {};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        {riceDetails ? (
          <>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Rice Variety: {riceDetails.variety_name}
            </h2>

            <img
              src={`/${varietyName}.JPG`}
              alt={riceDetails.variety_name}
              className="w-full h-auto rounded-lg mb-6 shadow-md"
            />

            {/* General rice details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <p className="font-medium text-gray-700">
                  <strong>Year of Release:</strong>{" "}
                  {riceDetails.year_of_release}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Parentage:</strong> {riceDetails.parentage}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Average Yield:</strong> {riceDetails.average_yield}{" "}
                  kg/ha
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Maturity:</strong> {riceDetails.maturity} days
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Age Group:</strong> {riceDetails.age_group}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Basal Leaf Sheath Colour:</strong>{" "}
                  {riceDetails.basal_leaf_sheath_colour}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Recommendation:</strong> {riceDetails.recommendation}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Brown Rice Recovery:</strong>{" "}
                  {riceDetails.brown_rice_recovery}%
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-gray-700">
                  <strong>Milling Recovery:</strong>{" "}
                  {riceDetails.milling_recovery}%
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Head Rice Recovery:</strong>{" "}
                  {riceDetails.head_rice_recovery}%
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Gelatinization Temperature:</strong>{" "}
                  {riceDetails.gelatinization_temperature}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Thousand Grain Weight:</strong>{" "}
                  {riceDetails.thousand_grain_weight} g
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Grain Shape:</strong> {riceDetails.grain_shape}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Pericarp Colour:</strong>{" "}
                  {riceDetails.pericarp_colour}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Bushel Weight:</strong> {riceDetails.bushel_weight} kg
                </p>
              </div>
            </div>

            {/* Pest Details Table */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Pest and Disease Resistance
              </h3>
              <table className="min-w-full bg-primary border-collapse border border-gray-200 shadow-md">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-3 text-left border border-gray-300 bg-primary">
                      Brown Planthopper
                    </th>
                    <th className="px-6 py-3 text-left border border-gray-300 bg-primary">
                      Blast
                    </th>
                    <th className="px-6 py-3 text-left border border-gray-300 bg-primary">
                      Bacterial Leaf Blight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">
                      {pestReactions["Brown Planthopper"]}
                    </td>
                    <td className="px-6 py-3 border border-gray-300">
                      {pestReactions["Blast"]}
                    </td>
                    <td className="px-6 py-3 border border-gray-300">
                      {pestReactions["Bacterial Leaf Blight"]}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default VarietyDetails;

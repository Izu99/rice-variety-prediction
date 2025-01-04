import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VarietyDetails = () => {
  const { varietyId } = useParams();
  const [varietyDetails, setVarietyDetails] = useState(null);

  useEffect(() => {
    const fetchVarietyDetails = async () => {
      // Replace with actual API call
      const response = await fetch(
        `http://localhost:8000/varieties/${varietyId}`
      );
      const data = await response.json();
      setVarietyDetails(data);
    };
    fetchVarietyDetails();
  }, [varietyId]);

  if (!varietyDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{varietyDetails.name}</h1>
      <p>{varietyDetails.description}</p>
      <img src={varietyDetails.imageUrl} alt={varietyDetails.name} />
    </div>
  );
};

export default VarietyDetails;

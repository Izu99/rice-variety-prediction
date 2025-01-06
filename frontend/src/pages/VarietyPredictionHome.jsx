import { useNavigate } from "react-router-dom";
const VarietyPredictionHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center m-10 px-4 py-8 bg-black/80 rounded-lg">
        <p className="text-xl italic font-semibold text-white">
          Find the Perfect Match for Your Paddy Fields With Sri Lanka's
          recommended rice varieties, expertly tailored to thrive in the
          island's diverse climates and soils. Let science empower your next
          harvest.
        </p>
      </div>

      {/* Main Button */}

      <div className="my-8 px-4 max-w-2xl w-full">
        {/* VARIETY PREDICTION Button */}
        <button
          onClick={() => navigate("/variety-input")}
          className="w-full py-5 bg-primary text-white rounded-md text-2xl font-semibold hover:bg-primary/90 shadow-lg"
        >
          VARIETY PREDICTION
        </button>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4">
        <button
          onClick={() => navigate("/recommended-varieties")}
          className="py-3 px-2 uppercase font-medium  bg-primary text-darkgreen rounded-md text-lg shadow-md"
        >
          Recommended Rice Varieties
        </button>
        <button
          onClick={() => navigate("/recommendation-process")}
          className="py-3 px-2 uppercase font-medium  bg-primary text-darkgreen rounded-md text-lg shadow-md"
        >
          Rice Recommendation Process
        </button>
        <button
          onClick={() => navigate("/map")}
          className="py-3 px-2 uppercase font-medium  bg-primary text-darkgreen rounded-md text-lg shadow-md"
        >
          Paddy Crop Calendar
        </button>
        <button
          onClick={() => navigate("/varieties")}
          className="py-3 px-2 uppercase font-medium  bg-primary text-darkgreen rounded-md text-lg shadow-md"
        >
          Rice Variety Distribution in Sri Lanka
        </button>
      </div>
    </div>
  );
};

export default VarietyPredictionHome;

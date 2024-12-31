import React from 'react';
import { useNavigate } from 'react-router-dom';

const VarietyPredictionHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Find the Perfect Match for Your Paddy Fields
        </h2>
        <p className="text-lg text-gray-600">
          With Sri Lanka's recommended rice varieties, expertly tailored to thrive in the island's diverse climates and soils. Let science empower your next harvest.
        </p>
      </div>

      {/* Main Button */}
      <div className="my-8">
        <button
          onClick={() => navigate('/input-page')}
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 shadow-lg"
        >
          Get Started
        </button>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4">
        <button
          onClick={() => navigate('/recommended-varieties')}
          className="py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 shadow-md"
        >
          Recommended Rice Varieties
        </button>
        <button
          onClick={() => navigate('/recommendation-process')}
          className="py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 shadow-md"
        >
          Rice Recommendation Process
        </button>
        <button
          onClick={() => navigate('/crop-calendar')}
          className="py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 shadow-md"
        >
          Paddy Crop Calendar
        </button>
        <button
          onClick={() => navigate('/variety-distribution')}
          className="py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 shadow-md"
        >
          Rice Variety Distribution in Sri Lanka
        </button>
      </div>
    </div>
  );
};

export default VarietyPredictionHome;

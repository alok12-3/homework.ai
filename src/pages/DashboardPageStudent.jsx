// src/pages/DashboardPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPageTeacher = () => {
  const navigate = useNavigate();

  const goToHomeworks = () => {
    navigate("/student/class/subject/homeworks");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Student Dashboard Page</h1>
      <p className="text-lg mb-4">Here the analytics will be suject wise</p>
      <button
        onClick={goToHomeworks}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go to All Homeworks
      </button>
    </div>
  );
};

export default DashboardPageTeacher;

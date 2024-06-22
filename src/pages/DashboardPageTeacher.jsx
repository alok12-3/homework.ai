// src/pages/DashboardPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPageTeacher = () => {
  const navigate = useNavigate();

  const goToHomeworks = () => {
    navigate('/teacher/class/subject/homeworks');
  };

  const createHomework = () => {
    navigate('/teacher/dashboard/create');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Dashboard Page</h1>
      <p className="text-lg mb-4">Here stats will be class and suject wise dropdown if more than one subject in a class</p>
      <button
        onClick={createHomework}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Homework
      </button>
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

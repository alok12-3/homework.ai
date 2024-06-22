// src/pages/LoginPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleTeacherLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate('/teacher/dashboard');
  };
  const handleStudentLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate('/student/class/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Login Page</h1>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={handleTeacherLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Teacher Login
          </button>

          <button
            onClick={handleStudentLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Student Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

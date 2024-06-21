// src/pages/LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Application!</h1>
      <p className="text-lg mb-6">This is the landing page of our application. Please login or sign up to continue.</p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

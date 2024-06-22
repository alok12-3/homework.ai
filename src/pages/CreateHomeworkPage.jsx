// src/pages/HomeworkPage.jsx

import React from 'react';

const HomeworkPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Create Homework</h1>      
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Upload question files</h2>
        <div className="mb-4">
          <input
            type="file"
            accept=".pdf"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Upload answer files</h2>
        <div className="mb-4">
          <input
            type="file"
            accept=".pdf"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Questions List (Dummy Display) */}
      <div className="bg-white p-6 rounded shadow-md">
  <h2 className="text-2xl font-bold mb-4">Questions Added:</h2>

  <div className="bg-gray-200 p-4 rounded-lg mb-4">
    <h3 className="text-lg font-bold mb-2">Question 1</h3>
    <p><strong>Question:</strong> What is React?</p>
    <p><strong>Model Answer:</strong> React is a JavaScript library for building user interfaces.</p>

    <div className="space-x-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add marking Scheme
    </button>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Edit
    </button></div>

    
  </div>

  <div className="bg-gray-200 p-4 rounded-lg mb-4">
    <h3 className="text-lg font-bold mb-2">Question 2</h3>
    <p><strong>Question:</strong> How does useState work?</p>
    <p><strong>Model Answer:</strong> useState is a Hook that allows you to have state variables in functional components.</p>
    <div className="space-x-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add marking Scheme
    </button>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Edit
    </button></div>
    
  </div>
  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Finish
    </button>

</div>

    </div>
  );
};

export default HomeworkPage;

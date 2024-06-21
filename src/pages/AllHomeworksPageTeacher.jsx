// src/pages/AllHomeworksPage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const AllHomeworksPageStudent = () => {
  // Sample homework data (replace with actual data or API fetch)
  const homeworks = [
    { id: 1, title: 'Quest for the Golden Artifact' },
    { id: 2, title: 'Journey through Time: Ancient Civilizations' },
    { id: 3, title: 'Mysteries of the Quantum Realm' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">All Homeworks Page</h1>
      <p className="text-lg">This is the page where all homeworks will be listed.</p>

      <div className="mt-6">
        {homeworks.map(homework => (
          <div key={homework.id} className="mb-4">
            <h2 className="text-2xl font-bold">{homework.title}</h2>
            <Link to='/teacher or student/class/subject/homework' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHomeworksPageStudent;

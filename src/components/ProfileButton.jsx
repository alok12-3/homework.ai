// ProfileDropdown.js
import React, { useState } from "react";

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".profile-button")) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="relative profile-button">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-black bg-white border rounded-full shadow-md hover:bg-gray-100"
      >
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 z-10 w-72 mt-2 bg-white rounded-lg shadow-lg profile-dropdown">
          <div className="relative p-4 text-center border-b">
            <button
              onClick={toggleDropdown}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="mt-2 text-lg font-semibold">Hi, Sal Khan!</p>
            <p className="text-sm text-gray-500">St Paul's English School</p>
          </div>
          <div className="p-4 text-center">
            <button className="w-full bg-blue-600 px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-500 flex items-center justify-center space-x-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
                className="w-5 h-5"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span>Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;

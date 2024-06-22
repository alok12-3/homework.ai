import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 mr-2 ml-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-gray-900 dark:text-white hover:text-blue-700"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Homework.ai
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <div className="hidden md:flex space-x-3 rtl:space-x-reverse">
            <Link to="/login">
              <button className="box-border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="box-border border border-blue-700 text-blue-500 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full">
                Sign Up
              </button>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                Student
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                Teacher
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                School
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/demo"
                className={`block py-2 px-3 md:p-0 text-gray-900 ${
                  isOpen
                    ? "hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                    : "hover:text-blue-700 dark:hover:text-blue-500"
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent rounded`}
              >
                Demo
              </Link>
            </li>
            <li className="md:hidden">
              <Link to="/login">
                <button className="w-full mt-4 mb-2 box-border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full">
                  Login
                </button>
              </Link>
            </li>
            <li className="md:hidden">
              <Link to="/signup">
                <button className="w-full mt-2 box-border border border-blue-700 text-blue-500 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

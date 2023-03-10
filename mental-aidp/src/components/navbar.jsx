import React from "react";
import logo from "../images/logo.png";
import "../css/NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Apna Logo" />
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row 
        md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 
        md:dark:bg-gray-900 dark:border-gray-700 nav-items"
            >
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
            md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
            md:dark:hover:bg-transparent "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
            md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
            md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
            md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
            md:dark:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/detect"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
            md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
            md:dark:hover:bg-transparent"
                >
                  Detect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React, { useState } from "react";
import Body from "./Body.jsx";
import { NavLink } from "react-router-dom";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (event.target.value == undefined || event.target.value == "") {
        alert("Please enter a dish...");
      } else {
        setSearch(event.target.value);
        console.log("Searching:", event.target.value);
      }
    }
  };

  return (
    <>
      <header className="text-gray-600 body-font relative ">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between md:flex-row">
          <div className="flex items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 mr-14 text-xl font-bold">
                FlavourFusion
              </span>
            </a>

            <button
              className="md:hidden ml-4 text-gray-900 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                {showSidebar ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>

          <div className="flex justify-center items-center w-full md:w-auto mt-4 md:mt-0 relative">
            <div className="border border-black rounded-full w-70 h-10 px-4 flex items-center">
              <input
                type="text"
                placeholder="Search a recipe..."
                className="w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline sel"
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center text-gray-900">
              <a
                className="mr-5 hover:text-gray-900 hover:underline"
                href="https://github.com/devarsheecodess"
                target="_blank"
              >
                Developer
              </a>
              <NavLink to="/about">
                <a className="hover:text-gray-900 hover:underline">About Us</a>
              </NavLink>
            </nav>
          </div>
        </div>
        {showSidebar && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-white p-5">
            <button
              className="absolute top-0 right-0 text-gray-900 focus:outline-none mt-3 mr-3"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <nav className="flex flex-col items-start text-gray-900">
              <a
                className="py-1 hover:bg-gray-200"
                href="https://github.com/devarsheecodess"
                target="_blank"
              >
                Developer
              </a>
              <NavLink to="/about">
                <a className="py-1 hover:bg-gray-200">About Us</a>
              </NavLink>
            </nav>
          </div>
        )}
      </header>
      <Body value={search} />
    </>
  );
}

export default Header;

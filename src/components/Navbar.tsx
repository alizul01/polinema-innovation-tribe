import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, toggleNavbar] = useReducer((prev) => !prev, false);

  return (
    <nav className="w-full bg-[#131A22]">
      <div className="md:flex md:items-center lg:max-w-[92rem] md:px-8 mx-auto px-4 justify-between">
        <div id="left-side">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-white">Politribe</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div id="right-side">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-sm text-slate-500 font-bold flex space-y-3 md:space-y-0 items-center justify-center md:space-x-10 md:flex-row flex-col">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/competition">Competition</NavLink>
              </li>
              <li>
                <NavLink to="/idea">Idea Sandbox</NavLink>
              </li>
            </ul>
            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
              <a
                href="#"
                className="text-sm inline-block w-full px-4 py-2 text-center text-white bg-purple-500 rounded-md shadow hover:bg-gray-800"
              >
                Login
              </a>
              <a
                href="#"
                className="text-sm inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="#"
            className="text-sm font-semibold px-4 py-2 text-white rounded-md shadow hover:bg-gray-800"
          >
            Login
          </a>
          <a
            href="#"
            className="text-sm px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:bg-gray-100"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from 'react-icons/md';

const Navbar = ({ completionPercentage }) => {
  return (
    <nav className="bg-teal-600 p-4 fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
      <Link to="/" className="text-white text-2xl font-bold"><MdHome size={40} /></Link>
        <div className="flex flex-col items-center">
          <p className="text-white">Course Completion</p>
          <div className="w-full bg-gray-300 rounded-full mt-2">
            <div
              className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: `${completionPercentage}%` }}
            >
              {Math.round(completionPercentage)}%
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

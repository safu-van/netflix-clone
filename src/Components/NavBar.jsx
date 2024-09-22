import React, { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent h-16">
      <div className="flex justify-between items-center p-2 px-4 md:px-8 lg:px-40">
        <div className="flex items-center">
          <img
            src="/netflix-logo.svg"
            alt="Logo"
            className="h-8 sm:h-10 lg:h-12 cursor-pointer"
          />
          <div className="hidden md:flex gap-4 ml-8">
            <span className="text-white text-sm">Home</span>
            <span className="text-gray-300 text-sm">TV Shows</span>
            <span className="text-gray-300 text-sm">Movies</span>
            <span className="text-gray-300 text-sm">Recently Added</span>
            <span className="text-gray-300 text-sm">My List</span>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-gray-800 p-4">
          <span className="text-white text-sm mb-2">Home</span>
          <span className="text-gray-300 text-xs mb-2">TV Shows</span>
          <span className="text-gray-300 text-xs mb-2">Movies</span>
          <span className="text-gray-300 text-xs mb-2">Recently Added</span>
          <span className="text-gray-300 text-xs">My List</span>
        </div>
      )}
    </div>
  );
}

export default NavBar;

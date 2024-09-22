import React from "react";

function NavBar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex justify-between items-center p-2 px-4 md:px-8 lg:px-40">
        <img
          src="/netflix-logo.svg"
          alt="Logo"
          className="h-8 sm:h-10 lg:h-12 cursor-pointer"
        />
        <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded text-white text-sm sm:text-base">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default NavBar;

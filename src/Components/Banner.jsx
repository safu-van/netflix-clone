import React from "react";
import { ImageUrl } from "../constants/constants";

function Banner({ banner }) {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
      <img
        className="h-full w-full object-cover"
        src={banner && ImageUrl + banner.backdrop_path}
        alt="Movie banner"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-80"></div>

      <div className="absolute top-1/2 left-[8%] md:left-[10%] lg:left-[12%] transform -translate-y-1/2 text-white px-4">
        {banner && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {banner.title ? banner.title : banner.name}
          </h2>
        )}
        <p
          className="w-full sm:w-96 mt-3 text-sm sm:text-base md:text-lg lg:text-xl line-clamp-5"
          title={banner?.overview}
        >
          {banner?.overview}
        </p>

        <div className="flex justify-center md:justify-start mt-3 space-x-3">
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-2 rounded-sm bg-white text-black hover:bg-gray-300 transition-colors">
            Play
          </button>
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-2 rounded-sm bg-white opacity-50 text-black hover:bg-gray-300 transition-colors">
            More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

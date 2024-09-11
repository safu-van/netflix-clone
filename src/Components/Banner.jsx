import React from 'react'
import { ImageUrl } from '../constants/constants'

function Banner({ banner }) {
    return (
        <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh]">
            <img className="h-full object-cover w-full" src={banner && ImageUrl + banner.backdrop_path} alt="Movie banner" />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-80"></div>

            <div className="absolute top-1/2 left-1/6 md:left-[12%] lg:left-[10%] w-[90%] sm:w-96 transform -translate-x-[20%] md:translate-x-0 -translate-y-1/2 text-white text-center md:text-left">
                {banner &&
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        {banner.title ? banner.title : banner.name}
                    </h2>
                }
                <p className="w-full sm:w-80 mt-3 text-sm sm:text-base md:text-lg line-clamp-5" title={banner?.overview}>
                    {banner?.overview}
                </p>
                <div className="flex justify-center md:justify-start mt-3">
                    <button className="flex items-center justify-center w-full sm:w-auto px-4 py-1 rounded-sm bg-white text-black hover:bg-gray-300">
                        Play
                    </button>
                    <button className="flex items-center justify-center w-full sm:w-auto px-4 py-1 ml-3 rounded-sm bg-white opacity-50 text-black hover:bg-gray-300">
                        More info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
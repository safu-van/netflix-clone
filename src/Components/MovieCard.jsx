import React, { useState } from "react";
import { ApiKey, BaseUrl, ImageUrl } from "../constants/constants";
import YouTube from "react-youtube";
import axios from "axios";

function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState();

  const openModal = () => {
    axios
      .get(
        `${BaseUrl}/movie/${movie.id}/videos?api_key=${ApiKey}&language=en-US`
      )
      .then((res) => {
        setVideoId(res.data.results[0]?.key);
      })
      .catch((err) => {
        console.error(err);
      });

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex-none">
      <img
        className="w-44 cursor-pointer transition-transform transform hover:scale-110"
        src={movie && ImageUrl + movie.poster_path}
        alt="Movie name"
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative bg-white bg-opacity-30 rounded-lg p-8 w-[90vh]">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {movie.title}
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              {videoId ? (
                <YouTube videoId={videoId} opts={opts} />
              ) : (
                <span className="text-white">Video not fond</span>
              )}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 p-1 hover:bg-red-500 rounded-md text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;

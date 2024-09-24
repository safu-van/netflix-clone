import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import MovieCard from "./Components/MovieCard";
import axios from "axios";
import { ApiKey } from "./constants/constants";
import { BaseUrl } from "./constants/constants";

function App() {
  const [banner, setBanner] = useState();
  const [trending, setTrending] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20);

    axios
      .get(`${BaseUrl}/trending/all/week?api_key=${ApiKey}&language=en-US`)
      .then((res) => {
        setBanner(res.data.results[randomNumber]);
        setLoading(false);
        setTrending(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${BaseUrl}/discover/movie?api_key=${ApiKey}&with_genres=28`)
      .then((res) => {
        setAction(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${BaseUrl}/discover/movie?api_key=${ApiKey}&with_genres=27`)
      .then((res) => {
        setHorror(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-black mb-16">
      <NavBar />
      <Banner banner={banner} loading={loading} />
      <div className="p-4 px-10">
        <h3 className="my-3 text-2xl text-white">Trending</h3>
        <div className="flex overflow-x-scroll w-full gap-4 scroll-smooth scrollbar-hide">
          {trending.map((trending_movie, index) => (
            <MovieCard movie={trending_movie} key={index} />
          ))}
        </div>
      </div>
      <div className="p-4 px-10">
        <h3 className="my-3 text-2xl text-white">Action</h3>
        <div className="flex overflow-x-scroll w-full gap-4 scroll-smooth scrollbar-hide">
          {action.map((action_movie, index) => (
            <MovieCard movie={action_movie} key={index} />
          ))}
        </div>
      </div>
      <div className="p-4 px-10">
        <h3 className="my-3 text-2xl text-white">Horror</h3>
        <div className="flex overflow-x-scroll w-full gap-4 scroll-smooth scrollbar-hide">
          {horror.map((horror_movie, index) => (
            <MovieCard movie={horror_movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

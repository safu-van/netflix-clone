import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import MovieCard from './Components/MovieCard';
import axios from 'axios';
import { ApiKey } from './API';
import { BaseUrl } from './API';

function App() {
  const [banner, setBanner] = useState();
  const [trending, setTrending] = useState([])
  const [action, setAction] = useState([])
  const [adventure, setAdventure] = useState([])

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20);

    axios.get(`${BaseUrl}/trending/all/week?api_key=${ApiKey}&language=en-US`)
      .then((res) => {
        setBanner(res.data.results[randomNumber]);
        setTrending(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`${BaseUrl}/discover/movie?api_key=${ApiKey}&with_genres=28`)
      .then((res) => {
        setAction(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(`${BaseUrl}/discover/movie?api_key=${ApiKey}&with_genres=12`)
      .then((res) => {
        setAdventure(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })

  }, []);

  return (
    <div className='bg-black'>
      <NavBar />
      <Banner banner={banner} />
      <div className='p-4 px-10'>
        <h3 className='my-3 text-2xl text-white'>Trending</h3>
        <div className='flex overflow-x-scroll w-full gap-4 '>
          {trending.map((trending_movie, index) => (<MovieCard movie={trending_movie} key={index} />))}
        </div>
      </div>
      <div className='p-4 px-10'>
        <h3 className='my-3 text-2xl text-white'>Action</h3>
        <div className='flex overflow-x-scroll w-full gap-4 '>
          {action.map((action_movie, index) => (<MovieCard movie={action_movie} key={index} />))}
        </div>
      </div>
      <div className='p-4 px-10'>
        <h3 className='my-3 text-2xl text-white'>Adventure</h3>
        <div className='flex overflow-x-scroll w-full gap-4 '>
          {adventure.map((adventure_movie, index) => (<MovieCard movie={adventure_movie} key={index} />))}
        </div>
      </div>
    </div>
  );
}

export default App;

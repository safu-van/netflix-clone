import React from 'react'
import { ImageUrl } from '../constants/constants'

function MovieCard({ movie }) {
  return (
    <div className='flex-none'>
      <img
        className='w-40 cursor-pointer'
        src={movie && ImageUrl + movie.poster_path}
        alt="Movie name"
      />
    </div>
  )
}

export default MovieCard
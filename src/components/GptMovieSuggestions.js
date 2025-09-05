import React from 'react'
import { useSelector } from 'react-redux'
import MovieCart from './MovieCart'
const GptMovieSuggestions = () => {

  const searchMovies = useSelector(store => store.gpt.gptMovies)
  console.log(searchMovies);

  if (!searchMovies) return null;
  return (
    <div className='bg-black bg-opacity-90 p-8 m-2 mt-10 pb-4 '>
      <div className='flex flex-wrap justify-around gap-3 '>
     {searchMovies.map((movie)=> <MovieCart key={movie.id} posterPath={movie.poster_path} /> )}
     </div>
    </div>
  )
}

export default GptMovieSuggestions
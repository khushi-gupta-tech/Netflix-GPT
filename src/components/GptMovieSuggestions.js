import React from 'react'
import { useSelector } from 'react-redux'
import MovieCart from './MovieCart'
const GptMovieSuggestions = () => {

  const searchMovies = useSelector(store => store.gpt.gptMovies)
  console.log(searchMovies);

  if (!searchMovies) return null;
  return (
    <div className='flex flex-wrap w-32 p-4 m-4 bg-black bg-opacity-90'>
     {searchMovies.map((movie)=> <MovieCart key={movie.id} posterPath={movie.poster_path} /> )}
    </div>
  )
}

export default GptMovieSuggestions
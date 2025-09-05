import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {

  const searchMovies = useSelector(store => store.gpt.gptMovies)
  console.log(searchMovies);
  return (
    <div>
      
    </div>
  )
}

export default GptMovieSuggestions
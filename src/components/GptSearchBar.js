import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((Store) => Store.config.lang || "en");
  const searchText = useRef(null);
  const dispatch = useDispatch();
  
  //   const handleGptSearchClick = async () => {

  //     // make an API call to GPT API and get Movie results
  //     const gptQuery =
  //       "Act as a Movie Recommendation system and suggest some movies for the query:" +
  //       searchText.current.value +
  //       " only give me names of 5 movies, comma separated like the example result ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";
  //     const gptResults = await openai.chat.completions.create({
  //       model: "gpt-3.5-turbo",
  //       messages: [{ role: "developer", content: gptQuery }],
  //     });
  //     if(!gptResults.choices) {
  //         //TODO: Write Error Hangling
  //         }
  //     const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
  //     console.log(gptResults.choices?.[0]?.message.content);

  //     // For each movie i will search TMDB API

  //     const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

  //     const tmdbResults = await  Promise.all(promiseArray);
  //     console.log(tmdbResults)

  //   };
  // search movie in TMDB

    
  const searchMovieTMDB = async () => {
    const data =  await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
   // console.log(json.results);
    dispatch(addGptMovieResult(json.results))

  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4  col-span-9 rounded-lg"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-4  p-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={searchMovieTMDB}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

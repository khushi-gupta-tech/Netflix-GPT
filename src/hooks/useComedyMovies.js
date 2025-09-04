import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addComedyMovies } from "../utils/movieSlice";

const useComedyMovies = () =>{
     // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getComedyMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=2",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addComedyMovies(json.results))
  };

  useEffect(()=>{
     getComedyMovies();
  },[])

};

export default useComedyMovies;
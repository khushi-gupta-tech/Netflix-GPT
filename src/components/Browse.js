import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
   
 useNowPlayingMovies();
 usePopularMovies();
 useTopRated();
 useUpcomingMovies();
 useComedyMovies();
  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

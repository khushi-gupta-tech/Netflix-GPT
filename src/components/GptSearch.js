import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute  -z-10 fixed ">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

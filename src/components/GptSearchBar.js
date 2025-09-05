import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const langKey = useSelector(Store => Store.config.lang || 'en' );
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4  col-span-9 rounded-lg"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className=" col-span-3 m-4  p-2 px-4 bg-red-700 text-white rounded-lg">{lang[langKey]?.search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;

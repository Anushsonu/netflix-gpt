import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GptSearchShimmer from "./GptSearchShimmer";

const GptMovieSuggestions = ({ searching, setIsSearching }) => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames && searching) {
    return (
      <div className="bg-gray-700 p-5 rounded-md mx-10 mt-10 ">
        <GptSearchShimmer />
      </div>
    );
  }
  if (!movieNames) {
    return (
      <div className="bg-gray-700 p-5 rounded-md mx-10 mt-10 text-white">
        Search for movies ...
      </div>
    );
  }

  return (
    <div className="bg-gray-700 p-5 rounded-md mx-10 mt-10">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

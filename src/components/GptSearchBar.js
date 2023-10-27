import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ({ searching, setIsSearching }) => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };
  const handleGptSearchClick = async () => {
    setIsSearching(true);
    const gpt_query =
      "Act as a movie recomendation system and suggest some movies for the query " +
      searchText?.current?.value +
      ". Only give names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Hera Pheri, Golmal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gpt_query }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults) {
      throw new Error("Cannot fetch results at the moment");
    }
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setIsSearching(false);
    // console.log("tmdb results :", tmdbResults);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="mr-5 w-[400px] p-3 rounded-md"
          type="text"
          placeholder="What would you like to watch today ?"
        />
        <button
          className="px-5 py-3 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

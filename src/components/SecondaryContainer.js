import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList
          title={"Now playing movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

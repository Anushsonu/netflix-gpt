import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackgorund = ({ movieId }) => {
  //   Fetch movie trailer and set it in store
  useMovieTrailer(movieId);
  const trailerVodeo = useSelector((store) => store.movies?.trailerVideo);
  console.log("Key :", trailerVodeo?.key);
  return (
    <div className="w-full">
      <iframe
        className="w-full h-screen"
        // src={
        //   "https://www.youtube.com/embed/Cm3Z1jEjHHc?si=" +
        //   trailerVodeo?.key +
        //   "&autoplay=1" +
        //   "&mute=1"
        // }
        src={
          "https://www.youtube.com/embed/" +
          trailerVodeo?.key +
          "?autoplay=1" +
          "&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgorund;

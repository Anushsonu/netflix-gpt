import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackgorund = ({ movieId }) => {
  const trailerVodeo = useSelector((store) => store.movies?.trailerVodeo);
  //   Fetch movie trailer and set it in store
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen min-h-[930px]"
        src={
          "https://www.youtube.com/embed/Cm3Z1jEjHHc?si=" +
          trailerVodeo?.key +
          "&autoplay=1" +
          "&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgorund;

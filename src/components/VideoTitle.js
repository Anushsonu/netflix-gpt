import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[45%] md:pt-[20%] px-5 md:px-12 h-screen absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl md:text-6xl">{title}</h1>
      <p className="w-1/2 pt-12 text-sm md:text-lg">{overview}</p>
      <div>
        <button className="text-black text-xl px-4 py-2 bg-white hover:bg-gray-300 rounded-lg border border-black">
          <FontAwesomeIcon icon="play" /> Play
        </button>
        <button className="text-black text-xl px-4 py-2 mx-2 mt-5 bg-white hover:bg-gray-300 rounded-lg border border-black">
          <FontAwesomeIcon icon="fa-circle-info" /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

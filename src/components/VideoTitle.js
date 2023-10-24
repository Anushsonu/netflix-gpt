import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] pl-10 absolute text-white bg-gradient-to-r from-black h-[930px]">
      <h1 className="text-6xl">{title}</h1>
      <p className="w-1/2 pt-12 text-lg">{overview}</p>
      <div className="">
        <button className="text-black text-xl px-4 py-2 bg-white rounded-lg border border-black">
          ▶️Play
        </button>
        <button className="text-black text-xl px-4 py-2 mx-2 mt-5 bg-white rounded-lg border border-black">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

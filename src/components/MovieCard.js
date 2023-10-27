import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }
  return (
    <div class="image-container">
      <img src={IMG_CDN_URL + posterPath} alt="movie_card" class="zoom-image" />
    </div>
  );
};

export default MovieCard;

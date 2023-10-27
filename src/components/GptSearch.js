import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  const [searching, setIsSearching] = useState(false);
  return (
    <div className="bg-black py-36 min-h-screen">
      <GptSearchBar searching={searching} setIsSearching={setIsSearching} />
      <GptMovieSuggestions
        searching={searching}
        setIsSearching={setIsSearching}
      />
    </div>
  );
};

export default GptSearch;

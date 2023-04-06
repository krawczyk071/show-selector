import React from "react";

const SearchBar = () => {
  return (
    <div class="search-bar">
      <input
        type="text"
        class="ipt ipt-forbtn"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="ipt-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

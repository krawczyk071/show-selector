import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="ipt ipt-forbtn"
        placeholder="What are you looking for?"
      />
      <button type="submit" className="ipt-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

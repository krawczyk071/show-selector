import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tips, setTips] = useState("");

  const navigate = useNavigate();
  function handleSubmit() {
    navigate(`/search/${searchTerm}`);
  }
  function handleChange(e) {
    setSearchTerm(e.target.value);
    // fetchFromAPI(`search/keyword?query=${e.target.value}`).then((data) => {
    //   setTips(data.results.map((res) => res.name));
    // });
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="ipt ipt-forbtn"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="ipt-btn" onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="tips">{tips}</div>
    </>
  );
};

export default SearchBar;

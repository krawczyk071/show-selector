import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tips, setTips] = useState("");

  const navigate = useNavigate();
  function handleSubmit() {
    navigate(`/search/${searchTerm}`);
  }
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="ipt ipt-forbtn"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
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

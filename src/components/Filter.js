import React from "react";
import SearchBar from "./SearchBar";

const Filter = () => {
  return (
    <div class="filter-bar">
      <div class="selector">
        <div class="select">
          <select id="standard-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
          <span class="focus"></span>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Filter;

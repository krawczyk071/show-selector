import React from "react";

const Star = ({ liked }) => {
  return (
    <div className=" star">
      {liked ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
};

export default Star;

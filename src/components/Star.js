import React from "react";

const Star = ({ liked }) => {
  return (
    <div className="cursor-pointer [&>*]:text-tdark [&>*]:bg-accent [&>*]:p-2 [&>*]:rounded-full">
      {liked ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
};

export default Star;

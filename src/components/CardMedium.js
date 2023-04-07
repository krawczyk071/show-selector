import React from "react";

const CardMedium = () => {
  return (
    <div className="card card--medium">
      <img className="card__img" src="./img/popular-movie-1.jpg" alt="cover" />
      <div className="card__info">
        <p className="card__title">Title</p>
        <p className="card__text">Genre</p>
        <div className="card__icon">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default CardMedium;

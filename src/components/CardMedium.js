import React from "react";

const CardMedium = () => {
  return (
    <div class="card card--medium">
      <img class="card__img" src="./img/popular-movie-1.jpg" alt="cover" />
      <div class="card__info">
        <p class="card__title">Title</p>
        <p class="card__text">Genre</p>
        <div class="card__icon">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default CardMedium;

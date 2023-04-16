import React from "react";
const BASE = "https://image.tmdb.org/t/p/w342/";

const PersonCard = ({ actor }) => {
  const { character, name, profile_path: img } = actor;
  const photo = img ? BASE + img : "/img/noperson.jpg";
  return (
    <div className="actors__card">
      <p className="actors__card__name">{name}</p>
      <p className="actors__card__as">{character}</p>
      <div className="actors__card__img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default PersonCard;

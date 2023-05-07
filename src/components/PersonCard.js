import React from "react";
const BASE = "https://image.tmdb.org/t/p/w342/";

const PersonCard = ({ actor }) => {
  const { character, name, profile_path: img } = actor;
  const photo = img ? BASE + img : "/img/noperson.jpg";
  return (
    <div className="flex flex-col">
      <p className="text-sm m-0 truncate max-w-[150px]">{name}</p>
      <p className="text-sm m-0 truncate max-w-[150px] pb-2">{character}</p>
      <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
        <img className="w-full" src={photo} alt="" />
      </div>
    </div>
  );
};

export default PersonCard;

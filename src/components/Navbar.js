import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="header">
      <nav class="navbar layout-lg shadow-sm">
        <div class="navbar__logo">
          ShowSelector <i class="fa-solid fa-eye"></i>
        </div>
        <ul class="navbar__list">
          <li class="navbar__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li class="navbar__item">
            <Link to={"/trending"}>Trending</Link>
          </li>
          <li class="navbar__item">
            <Link to={"/actors"}>Actors</Link>
          </li>
          <li class="navbar__item">
            <Link to={"/favorites"}>Favorites</Link>
          </li>
        </ul>
        <button class="btn shadow-sm">Push</button>
      </nav>
    </div>
  );
};

export default Navbar;

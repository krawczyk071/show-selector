import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar layout-lg shadow-sm">
        <div className="navbar__logo">
          ShowSelector <i className="fa-solid fa-eye"></i>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/trending"}>Trending</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/actors"}>Actors</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/favorites"}>Favorites</Link>
          </li>
        </ul>
        <button className="btn shadow-sm">Push</button>
      </nav>
    </div>
  );
};

export default Navbar;

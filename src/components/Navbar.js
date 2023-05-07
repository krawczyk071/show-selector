import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="header">
      <nav className="flex flex-wrap mx-auto px-8 max-w-5xl shadow-sm bg-primary text-tlight min-h-[4.5rem] items-center justify-center">
        <div className="flex-1 order-1 flex items-center justify-center">
          <div className="bg-accent p-4 m-4 rounded-xl font-bold text-xl font-logo text-black w-[188px] ">
            ShowSelector <i className="fa-solid fa-eye"></i>
          </div>
        </div>
        <ul className="flex-grow m-0 p-0 list-none order-4 sm:order-2 flex items-center justify-center">
          <NavItem>
            <Link to={"/"}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to={"/trending"}>Trending</Link>
          </NavItem>
          <NavItem>
            <Link to={"/trailers"}>Trailers</Link>
          </NavItem>
          <NavItem>
            <Link to={"/favorites"}>
              Watchlist <i className="fa-solid fa-star"></i>
            </Link>
          </NavItem>
        </ul>
        {/* <button className="btn shadow-sm">Push</button> */}
        <SearchBar />
      </nav>
    </div>
  );
};

export default Navbar;

const NavItem = (props) => (
  <li className="inline m-4  [&>*:hover]:underline [&>*:]:text-tlight [&>*:active]:text-tlight [&>*:visited]:text-tlight">
    {props.children}
  </li>
);

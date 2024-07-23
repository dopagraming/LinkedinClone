import React from "react";
import { Link, useLocation } from "react-router-dom";

import HeaderSearch from "./HeaderSearch";
import HeaderBar from "./HeaderBar";
const Header = () => {
  const location = useLocation();
  return (
    <header
      className={location.pathname !== "/" ? "bg-white py-1 px-7" : "hidden"}
    >
      <nav className="flex justify-center md:justify-between flex-wrap md:flex-nowrap">
        <div className="flex order-1 items-center">
          <Link to="/" className="me-3">
            <img src="./images/linkedin-logo.png" alt="profile-img" />
          </Link>
          <HeaderSearch />
        </div>
        <HeaderBar />
      </nav>
    </header>
  );
};

export default Header;

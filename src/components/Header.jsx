import React from "react";
import { logoName } from "../data/mainData";
import { Link } from "react-router-dom";

const Header = ({ tl }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
        <Link to={"/"}>{logoName}</Link>
        </div>
        <nav className="menu">
            <ul className="navigation">
                
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

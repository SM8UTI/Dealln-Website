import React, { useState } from "react";
import { logoName, menuNavigationLinks } from "../data/mainData";
import { Link } from "react-router-dom";

const Header = ({ tl }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>{logoName}</Link>
        </div>
        <nav className="menu">
          <ul className="navigation">
            {menuNavigationLinks.map((elem, index) => (
              <li key={index} className="anime-hover">
                <Link to={elem.link}>{elem.text}</Link>
              </li>
            ))}
          </ul>
          <Link to={"#"} className="btn">
            <span>Get Started</span>
            <span>Get Started</span>
          </Link>
          <div
            className={active ? "hamMenu" : "hamMenu active"}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

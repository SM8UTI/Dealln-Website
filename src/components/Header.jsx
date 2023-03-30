import React, { useRef, useState } from "react";
import { logoName, menuNavigationLinks } from "../data/mainData";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const tll = gsap.timeline();
  const [active, setActive] = useState(true);
  let navigation = useRef(null);

  const menuHover = () => {
    setActive(!active);

    tll
      .to(".navigation", {
        width: active ? "100%" : "0%",
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".nav li",
        {
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0,
          y: active ? 0 : "100px",
          stagger: active ? 0.3 : 0,
          duration: 0.5,
          ease: "expo.out",
        },
        "-=1"
      );

    tll.play();
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>{logoName}</Link>
        </div>
        <nav className="menu">
          <ul className="navigation" ref={navigation}>
            <div className="nav">
              {menuNavigationLinks.map((elem, index) => (
                <li key={index} className="anime-hover">
                  <Link to={elem.link}>{elem.text}</Link>
                </li>
              ))}
            </div>
          </ul>
          <Link to={"#"} className="btn">
            <span>Get Started</span>
            <span>Get Started</span>
          </Link>
          <div
            className={active ? "hamMenu" : "hamMenu active"}
            onClick={menuHover}
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

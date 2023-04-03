import React, { useEffect } from "react";
import { footer, menuNavigationLinks } from "../data/mainData";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.to(".Footer .container", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".Footer",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="Footer">
      <div className="container max">
        <div className="companyDetails">
          <div className="logo">
            <span>{footer.title}</span>
          </div>
          <p>{footer.desc}</p>
        </div>
        <div className="navigation-links">
          <ul className="list-1">
            {menuNavigationLinks.map((elem, index) => (
              <li key={index}>
                <Link to={elem.link} key={index}>
                  {elem.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list-1">
            {menuNavigationLinks.map((elem, index) => (
              <li key={index}>
                <Link to={elem.link} key={index}>
                  {elem.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list-1">
            {menuNavigationLinks.map((elem, index) => (
              <li key={index}>
                <Link to={elem.link} key={index}>
                  {elem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;

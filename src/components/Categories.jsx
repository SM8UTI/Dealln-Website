import React, { useEffect } from "react";
import { CategoriesData } from "../data/mainData";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Categories = () => {
  useEffect(() => {
    gsap.to(".Categories .main-section", {
      scrollTrigger: {
        trigger: ".Categories",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to(".Categories .container", {
      scrollTrigger: {
        trigger: ".Categories",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <div className="Categories max">
      <span className="sub-text">categories</span>

      <div className="main-section">
        <h2>
          <span>{CategoriesData[0].br}</span> {CategoriesData[0].mainHeading}
        </h2>
        <p>{CategoriesData[0].mainDesc}</p>
      </div>

      <div className="container">
        <SearchInput placeholderText={"Search for Data"} />
        <div className="category-list">
          <ul>
            {CategoriesData[1].map((elem, index) => (
              <li className="category" key={index}>
                {elem}
              </li>
            ))}
          </ul>
          <Link to={"/"} className="btn-s">
            <span>View all categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

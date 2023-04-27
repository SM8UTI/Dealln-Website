import React from "react";
import { PopularSectionData, PopularCardData } from "../data/mainData";
import { gsap } from "gsap";
import { useEffect } from "react";
import DatainfoCard from "./DatainfoCard";
import { Link } from "react-router-dom";

const PopularSection = () => {
  useEffect(() => {
    gsap.to(".PopularSection .container .main-section", {
      scrollTrigger: {
        trigger: ".PopularSection .sub-text",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to(".PopularSection .container .card-wrapper", {
      scrollTrigger: {
        trigger: ".PopularSection .main-section",
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
    <div className="PopularSection">
      <div className="max">
        <span className="sub-text">Popular</span>
      </div>
      <div className="container max">
        <div className="main-section">
          <h2>
            <span>{PopularSectionData[0].br} </span>
            {PopularSectionData[0].mainHeading}
          </h2>
          <p>{PopularSectionData[0].mainDesc}</p>
        </div>
        <div className="card-wrapper max">
          {PopularCardData.map((elem, index) => (
            <DatainfoCard
              key={index}
              title={elem.title}
              comapnyName={elem.comapnyName}
              comapnyLogo={elem.comapnyLogo}
              desc={elem.desc.slice(0, 100)}
              link={elem.link}
            />
          ))}
        </div>
        <Link to={"/"} className="btn-s">
          <span>Search all Products</span>
        </Link>
      </div>
    </div>
  );
};

export default PopularSection;

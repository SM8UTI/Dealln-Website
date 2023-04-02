import React from "react";
import { PopularSectionData } from "../data/mainData";
import { gsap } from "gsap";
import { useEffect } from "react";
import DatainfoCard from "./DatainfoCard";

const PopularSection = () => {
  useEffect(() => {
    gsap.to(".PopularSection .container .main-section", {
      scrollTrigger: {
        trigger: ".PopularSection",
        start: "top 100%",
        end: "bottom 100%",
        markers: true,
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
        <div className="card-wrapper">
          <DatainfoCard />
        </div>
      </div>
    </div>
  );
};

export default PopularSection;

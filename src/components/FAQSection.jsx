import React, { useEffect, useState } from "react";
import { FAQSectionData } from "../data/mainData";
import FAQQuestionCard from "./FAQQuestionCard";
import { gsap } from "gsap";

const FAQSection = () => {
  useEffect(() => {
    gsap.to(".FAQSection  .main-text", {
      scrollTrigger: {
        trigger: ".FAQSection",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to(".FAQSection .container", {
      scrollTrigger: {
        trigger: ".FAQSection",
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
    <div className="FAQSection max">
      <span className="sub-text">FAQs</span>
      <div className="main-text">
        <h2>
          <span>Questions? </span>
          Look here.
        </h2>
        <p>
          Here are some of our most asked questions. If yours is not there, do
          not hesitate to contact us.
        </p>
      </div>
      <div className="container">
        {FAQSectionData.map((elem, index) => (
          <FAQQuestionCard key={index} text={elem.text} desc={elem.desc} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

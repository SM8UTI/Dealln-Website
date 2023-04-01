import React, { useEffect } from "react";
import { ServiceSection } from "../data/mainData";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Service = () => {
  useEffect(() => {
    gsap.to(".main-text h2", {
      x: 0,
      stagger: 0.5,
      // duration: 4,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".Services",
        start: "top 90%",
        end: "bottom 80%",
        // markers: true,
        scrub: 4,
      },
    });

    gsap.to(".Service-1 .desc", {
      y: 0,
      opacity: 1,
      // duration: 4,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".Service-1 .main-text",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        scrub: 4,
      },
    });
  }, []);
  return (
    <div className="Services max">
      <span className="sub-text">{ServiceSection[0].subText}</span>
      <div className="Service-1">
        <div className="main-text">
          <h2>{ServiceSection[1].text1}</h2>
          <h2>{ServiceSection[1].text2}</h2>
          <h2>{ServiceSection[1].text3}</h2>
        </div>
        <div className="desc">
          <p>{ServiceSection[1].desc}</p>
          <Link to={ServiceSection[1].link} className="btn">
            <span>{ServiceSection[1].button}</span>
            <span>{ServiceSection[1].button}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

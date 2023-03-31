import React, { useEffect } from "react";
import image from "../Assets/main.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainImage = ({ tl }) => {
  useEffect(() => {
    gsap.to(".Mainimage img", {
      progress: 0.8,
      scrollTrigger: {
        trigger: ".Mainimage",
        start: "top 90%",
        end: "top 100px",
        scrub: true,
        // markers: true,
        //   toggleActions: "restart complete complete reverse",
      },
      scale: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      //   duration: 2,
    });
  }, [tl]);
  return (
    <div className="Mainimage">
      <img src={image} alt="main-image" />
    </div>
  );
};

export default MainImage;

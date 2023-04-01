import React, { useEffect } from "react";
import image from "../Assets/main.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainImage = () => {
  useEffect(() => {
    gsap.to(".Mainimage img", {
      scrollTrigger: {
        trigger: ".Mainimage",
        start: "top 90%",
        end: "top 100px",
        scrub: true,
        // markers: true,
      },
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      //   duration: 2,
    });
    gsap.to(".Mainimage .line", {
      width: "100%",
      delay: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Mainimage",
        start: "top 90%",
        end: "top 100px",
        scrub: true,
        // markers: true,
        //   toggleActions: "restart complete complete reverse",
      },
    });
  }, []);
  return (
    <div className="Mainimage">
      <img src={image} alt="main-image" />
      <div className="line"></div>
    </div>
  );
};

export default MainImage;

import React, { useEffect, useRef, useState } from "react";
import "../scss/loder.scss";
import gsap from "gsap";

const Loder = ({ tl }) => {
  const llParrent = useRef(null);
  const ll = useRef(null);
  const llChild = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    tl.to(text.current, {
      scale: 2,
      opacity: 1,
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
    })
      .to(text.current, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        display: "none",
        ease: "slow(0.7, 0.7, false)",
      })
      .to(ll.current, {
        width: "100%",
        duration: 2,
        delay: -0.5,
        ease: "power3.out",
      })
      .to(
        ll.current,
        {
          height: "100%",
          duration: 2,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        llChild.current,
        {
          height: "100%",
          duration: 2,
          ease: "slow(0.7, 0.7, false)",
        },
        "-=2"
      )
      .to(llParrent.current, {
        minHeight: "0vh",
        maxHeight: "0vh",
        ease: "circ.out",
      });
  }, []);
  return (
    <div className="lodder" ref={llParrent}>
      <div id="lodder-line" ref={ll}>
        <div ref={llChild}></div>
      </div>
      <span ref={text}>Dealln</span>
    </div>
  );
};

export default Loder;

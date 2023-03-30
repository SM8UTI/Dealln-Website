import React, { useEffect, useRef, useState } from "react";
import "../scss/loder.scss";
import { logoName } from "../data/mainData";

const Loder = ({ tl }) => {
  const llParrent = useRef(null);
  const ll = useRef(null);
  const llChild = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    tl.to(text.current, {
      scale: 2,
      opacity: 1,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });
    tl.to(text.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      display: "none",
      ease: "slow(0.7, 0.7, false)",
    });
    tl.to(ll.current, {
      width: "100%",
      duration: 1,
      delay: -0.5,
      ease: "power3.out",
    });
    tl.to(
      ll.current,
      {
        height: "100%",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
    tl.to(
      llChild.current,
      {
        height: "100%",
        duration: 1.5,
        ease: "slow(0.7, 0.7, false)",
      },
      "-=0.5"
    );
    tl.to(llParrent.current, {
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
      <span ref={text}>{logoName}</span>
    </div>
  );
};

export default Loder;

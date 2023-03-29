import React, { useState } from "react";
import FixedElem from "../components/FixedElem";
import Loder from "../components/Loder";
import gsap from "gsap";

const tl = gsap.timeline();

const Home = () => {
  return (
    <>
      <Loder tl={tl} />
      <FixedElem tl={tl} />
    </>
  );
};

export default Home;

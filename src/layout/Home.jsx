import React, { useState } from "react";
import FixedElem from "../components/FixedElem";
import Loder from "../components/Loder";
import gsap from "gsap";
import Header from "../components/Header";
import DarkLight from "../components/DarkLight";

const tl = gsap.timeline();

const Home = () => {
  return (
    <>
      {/* <Loder tl={tl} /> */}
      <FixedElem />
      <DarkLight />
      <Header tl={tl} />
    </>
  );
};

export default Home;

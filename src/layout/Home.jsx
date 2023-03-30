import React, { useState } from "react";
import FixedElem from "../components/FixedElem";
import Loder from "../components/Loder";
import gsap from "gsap";
import Header from "../components/Header";
import DarkLight from "../components/DarkLight";
import Hero from "../components/Hero";

const tl = gsap.timeline({
  ease: "power3.out",
});

const Home = () => {
  return (
    <>
      <Loder tl={tl} />
      <FixedElem />
      <DarkLight />
      <Header />
      <Hero tl={tl} />
    </>
  );
};

export default Home;

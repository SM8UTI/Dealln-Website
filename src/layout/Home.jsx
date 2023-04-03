import React, { useState } from "react";
import FixedElem from "../components/FixedElem";
import Loder from "../components/Loder";
import gsap from "gsap";
import Header from "../components/Header";
import DarkLight from "../components/DarkLight";
import Hero from "../components/Hero";
import MainImage from "../components/MainImage";
import Service from "../components/Service";
import CompanyLogos from "../components/CompanyLogos";
import Categories from "../components/Categories";
import PopularSection from "../components/PopularSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

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
      <MainImage />
      <Service />
      <CompanyLogos />
      <Categories />
      <PopularSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../Assets/logoCompany.svg";

const CompanyLogos = () => {
  return (
    <div className="CompanyLogos">
      <div className="text max">
        <span className="sub-text">Strategic partner of</span>
      </div>
      <Marquee
        direction={"right"}
        loop={0}
        gradient={false}
        className="container"
      >
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
      </Marquee>
      <Marquee
        direction={"left"}
        loop={0}
        gradient={false}
        className="container"
      >
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
      </Marquee>
    </div>
  );
};

export default CompanyLogos;

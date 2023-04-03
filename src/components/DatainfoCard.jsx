import React from "react";
import image from "../Assets/logoCompany-2.svg";
import { Link } from "react-router-dom";

const DatainfoCard = ({
  title = "",
  comapnyName = "",
  comapnyLogo = "",
  desc = "",
  link = "",
}) => {
  return (
    <div className="DatainfoCard">
      <div className="text-container">
        <h3>{title}</h3>
        <div className="companyDetails">
          <h4>
            <span>by</span> {comapnyName}
          </h4>
          <div className="companyLogo">
            <img src={image} alt={comapnyLogo} />
          </div>
        </div>
        <p>{desc}...</p>
      </div>
      <div className="button-container">
        <Link to={link} className="btn">
          <span> View product</span>
          <span> View product</span>
        </Link>
        <p>Pricing available upon request</p>
      </div>
    </div>
  );
};

export default DatainfoCard;

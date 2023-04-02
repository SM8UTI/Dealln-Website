import React from "react";
import image from "../Assets/logoCompany-2.svg";

const DatainfoCard = () => {
  return (
    <div className="DatainfoCard">
      <div className="text-container">
        <h3>
          BIGDBM USA Consumer, Demographic, Interest Database, Property and
          Intender FIle
        </h3>
        <div className="companyDetails">
          <h4>
            <span>by</span> BIGDBM
          </h4>
          <div className="companyLogo">
            <img src={image} alt="" />
          </div>
        </div>
        <p>
          The BIGDBM Consumer Database is comprised of over 80 sources and
          includes over 400 different data points for each individual in a
          household with complete PII...
        </p>
      </div>
      <div className="button-container"></div>
    </div>
  );
};

export default DatainfoCard;

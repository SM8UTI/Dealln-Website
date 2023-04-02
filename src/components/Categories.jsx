import React from "react";
import { CategoriesData } from "../data/mainData";
import SearchInput from "./SearchInput";

const Categories = () => {
  return (
    <div className="Categories max">
      <span className="sub-text">categories</span>

      <div className="main-section">
        <h2>
          <span>{CategoriesData[0].br}</span> {CategoriesData[0].mainHeading}
        </h2>
        <p>{CategoriesData[0].mainDesc}</p>
      </div>

      <div className="container">
        <SearchInput placeholderText={"Search for Data"} />
      </div>
    </div>
  );
};

export default Categories;

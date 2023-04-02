import React from "react";

const SearchInput = ({ placeholderText }) => {
  return (
    <div className="SearchInput">
      <form>
        <input type="text" placeholder={placeholderText} />
        <button className="btn">
          <span>Search</span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

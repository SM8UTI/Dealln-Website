import React from "react";

const TestomonialsCard = ({ data }) => {
  return (
    <div className="TestomonialsCard">
      <div className="message">
        <p>{data.message}</p>
      </div>
      <div className="info">
        <div className="img">
          <img src={data.Image} alt={data.name} />
        </div>
        <div className="data">
          <h4>{data.name}</h4>
          <span>{data.position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestomonialsCard;

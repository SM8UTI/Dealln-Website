import React, { useState } from "react";
import { gsap } from "gsap";

const FAQQuestionCard = ({ text, desc }) => {
  const [active, setActive] = useState(false);

  const show = (active) => {
    setActive(!active);
  };
  return (
    <div
      className={active ? "FAQQuestionCard active" : "FAQQuestionCard"}
      onClick={() => show(active)}
    >
      <div className="question">
        <h3>{text}</h3>
      </div>
      <div className="answer">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FAQQuestionCard;

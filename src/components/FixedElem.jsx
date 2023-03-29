import React, { useEffect, useLayoutEffect, useRef } from "react";

const FixedElem = ({ tl }) => {
  const line = useRef(null);
  useLayoutEffect(() => {
    tl.to(line.current, {
      height: "100%",
      minHeight: "100vh",
      duration: 1,
    });
  }, [tl]);
  return (
    <div className="fixedElem" ref={null}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FixedElem;

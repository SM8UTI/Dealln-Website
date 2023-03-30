import React, { useEffect, useRef, useState } from "react";

const DarkLight = () => {
  const [theme, setTheme] = useState("dark");
  const checked = useRef(null);

  const check = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="dark-light">
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        onClick={check}
        ref={checked}
      ></input>
    </div>
  );
};

export default DarkLight;

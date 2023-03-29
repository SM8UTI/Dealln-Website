import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
};

export default App;

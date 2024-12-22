// Navigate.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import { Home } from "../../pages";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Navigate;
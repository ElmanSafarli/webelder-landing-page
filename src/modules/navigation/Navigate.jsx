// Navigate.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import { Home, Contact, Prices } from "../../pages";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prices" element={<Prices />} />
    </Routes>
  );
};

export default Navigate;

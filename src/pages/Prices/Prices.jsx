import React from "react";
import styled from "styled-components";

// Components
import { Navbar, Footer, Plans } from "../../widgets";

const Prices = () => {
  return (
    <>
      <Navbar />
      <StyleMain>
        <Plans />
      </StyleMain>
      <Footer />
    </>
  );
};

const StyleMain = styled.main``;

export default Prices;

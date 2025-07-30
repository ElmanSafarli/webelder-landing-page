import React from "react";
import styled from "styled-components";

// Components
import {
  Navbar,
  Header,
  Service,
  Info,
  CTA,
  ServiceSolution,
} from "../../widgets";

const Home = () => {
  return (
    <>
      <Navbar />
      <StyleMain>
        <Header />
        <Service />
        <CTA />
        <Info />
        <ServiceSolution />
      </StyleMain>
    </>
  );
};

const StyleMain = styled.main``;

export default Home;

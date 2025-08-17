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
  Footer,
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
        <Footer />
      </StyleMain>
    </>
  );
};

const StyleMain = styled.main``;

export default Home;

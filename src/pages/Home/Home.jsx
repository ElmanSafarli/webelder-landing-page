import React from "react";
import styled from "styled-components";

// Components
import { Navbar, Header, Service, Info } from "../../widgets";

const Home = () => {
  return (
    <>
      <Navbar />
      <StyleMain>
        <Header />
        <Service />
        <Info />
      </StyleMain>
    </>
  );
};

const StyleMain = styled.main`
  margin: 0 auto;
  max-width: 1120px;
`;

export default Home;

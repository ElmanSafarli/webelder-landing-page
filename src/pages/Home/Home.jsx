import React from "react";
import styled from "styled-components";

// Components
import { Navbar, Header, Service } from "../../widgets";

const Home = () => {
  return (
    <>
      <Navbar />
      <StyleMain>
        <Header />
        <Service />
      </StyleMain>
    </>
  );
};

const StyleMain = styled.main`
  margin: 0 auto;
  max-width: 1120px;
`;

export default Home;

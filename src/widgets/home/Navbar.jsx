import React from "react";
import styled from "styled-components";

// Components
import { TopNavDesktop, BottomNavDesktop } from "./Navbar/index";

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="mobile_nav"></div>
      <div className="desktop_nav">
        <TopNavDesktop />
        <BottomNavDesktop />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .desktop_nav {
    border-bottom: 1px solid #ded7cad9;
    transition-property: transform;
    transition-duration: 0.5s;
    position: sticky;
    top: -50px;
  }
`;

export default Navbar;

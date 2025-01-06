import React from "react";
import styled from "styled-components";

// Components
import {
  TopNavDesktop,
  BottomNavDesktop,
  TopNavMobile,
  BottomNavMobile,
} from "./Navbar/index";

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="mobile_nav">
        <TopNavMobile />
        <BottomNavMobile />
      </div>
      <div className="desktop_nav">
        <TopNavDesktop />
        <BottomNavDesktop />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: sticky;
  top: -28px;
  z-index: 1000;
  background-color: var(--white);
  transition-property: transform;
  transition-duration: 0.5s;

  .desktop_nav {
    border-bottom: 1px solid #ded7cad9;
  }

  .mobile_nav {
    display: none;
  }
  @media screen and (max-width: 768px) {
    top: 0px;
    .mobile_nav {
      display: block;
    }
    .desktop_nav {
      display: none;
    }
  }
`;

export default Navbar;

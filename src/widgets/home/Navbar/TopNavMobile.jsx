import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { AccentBtn, HamburgerMobileBtn } from "../../../shared";

const TopNavMobile = () => {
  return (
    <StyledWrapper>
      <nav>
        <div>
          <Link to="/">WebElder</Link>
          <AccentBtn content="Contact us" link="/" />
          <HamburgerMobileBtn />
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  nav {
    div {
      display: flex;
      justify-content: space-between;
      -moz-box-align: center;
      align-items: center;
      gap: 14px;
      position: relative;
    }
  }
`;

export default TopNavMobile;

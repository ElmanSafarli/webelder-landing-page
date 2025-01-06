import React from "react";
import styled from "styled-components";

// Components
import { AccentBtn, HamburgerMobileBtn, LogoName } from "../../../shared";

const TopNavMobile = () => {
  return (
    <StyledWrapper>
      <div>
        <LogoName link="/" width="120" height="62" fill="black" />
        <div>
          <AccentBtn content="Contact us" link="/" />
          <HamburgerMobileBtn />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.nav`
  border-bottom: 1px solid #ded7cad9;
  padding: 0 8px;
  div {
    display: flex;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    gap: 14px;
    position: relative;
  }
`;

export default TopNavMobile;
